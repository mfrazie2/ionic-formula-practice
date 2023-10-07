"use client";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectPracticeSettings } from "@/features/practice/selectors";
import {
  Button, Divider, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Switch, useDisclosure
} from "@chakra-ui/react"
import { FaSlidersH } from "react-icons/fa"

import { Radio, RadioGroup } from '@chakra-ui/react'
import { ChangeEvent, useCallback, useState } from "react";
import { PracticeMode, PracticeSettings, PracticeType } from "@/features/practice/types";
import { actions } from "@/features/practice/slice";

export default function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const practiceSettings = useAppSelector(selectPracticeSettings);
  const [updatedSettings, setUpdatedSettings] = useState<PracticeSettings>(practiceSettings);

  const handleModeChange = useCallback((value: string) => {
    setUpdatedSettings({
      ...updatedSettings,
      mode: value as PracticeMode
    });
  }, [updatedSettings]);
  const handleOptionsChange = useCallback((value: string) => {
    setUpdatedSettings({
      ...updatedSettings,
      type: value as PracticeType
    });
  }, [updatedSettings]);
  const handleHintsChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    setUpdatedSettings({
      ...updatedSettings,
      showHints: value
    });
  }, [updatedSettings]);
  const handleSaveSettings = useCallback(() => {
    dispatch(actions.setPracticeSettings(updatedSettings));
    onClose();
  }, [dispatch, onClose, updatedSettings]);

  return (
    <>
      <Button variant="link" leftIcon={<FaSlidersH />} onClick={onOpen}>Settings</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Practice Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDirection='column'>
              <Heading size='sm' marginBottom={2}>Mode</Heading>
              <RadioGroup name="mode" value={updatedSettings.mode} onChange={handleModeChange}>
                <Stack paddingLeft={4} spacing={2}>
                  <Radio value="name-to-formula">Name to formula</Radio>
                  <Radio value="formula-to-name">Formula to name</Radio>
                </Stack>
              </RadioGroup>
            </Flex>
            <Divider marginY={2} />
            <Flex flexDirection='column'>
              <Heading size='sm' marginBottom={2}>Options</Heading>
              <RadioGroup name="type" value={updatedSettings.type} onChange={handleOptionsChange}>
                <Stack paddingLeft={4} spacing={2}>
                  <Radio value="compound">Compound</Radio>
                  <Radio value="cation-only">Cation only</Radio>
                  <Radio value="anion-only">Anion only</Radio>
                </Stack>
              </RadioGroup>
            </Flex>
            <Divider marginY={2} />
            <Flex flexDirection='column'>
              <Heading size='sm' marginBottom={2}>Show hints</Heading>
              <Switch isChecked={updatedSettings.showHints} paddingLeft={4} onChange={handleHintsChange} />
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSaveSettings}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}