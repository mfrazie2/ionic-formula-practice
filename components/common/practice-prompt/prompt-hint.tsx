"use client";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectAnionHint, selectCationHint, selectPracticeType, selectShowAnionHint, selectShowCationHint } from "@/features/practice/selectors";
import { actions } from "@/features/practice/slice";
import { Popover, PopoverTrigger, Flex, Button, PopoverContent, PopoverArrow, PopoverCloseButton, Text, useDisclosure } from "@chakra-ui/react";
import { useCallback, useMemo } from "react";

import { FaRegLightbulb } from "react-icons/fa";

interface HintProps {
  buttonText: string;
  handleClick: () => void;
  hintText: string;
  showHint: boolean;

}

function Hint({
  buttonText,
  handleClick,
  hintText,
  showHint
}: HintProps) {
  return !showHint ? <Button onClick={handleClick}>{buttonText}</Button> : <Text dangerouslySetInnerHTML={{ __html: hintText }} />
}

export default function PromptHint() {
  const dispatch = useAppDispatch();
  const practiceType = useAppSelector(selectPracticeType);
  const showCationHint = useAppSelector(selectShowCationHint);
  const cationHint = useAppSelector(selectCationHint);
  const showAnionHint = useAppSelector(selectShowAnionHint);
  const anionHint = useAppSelector(selectAnionHint);
  const { onOpen, onClose, isOpen } = useDisclosure();

  const shouldShowCationHint = useMemo(() => {
    return practiceType !== 'anion-only'
  }, [practiceType]);
  const shouldShowAnionHint = useMemo(() => {
    return practiceType !== 'cation-only'
  }, [practiceType]);

  const handleShowCationHint = useCallback(() => {
    dispatch(actions.showCationHint(true));
  }, [dispatch]);
  const handleShowAnionHint = useCallback(() => {
    dispatch(actions.showAnionHint(true));
  }, [dispatch]);

  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      placement='right'
      trigger="hover"
    >
      <PopoverTrigger>
        <Button variant='link' size='sm' rightIcon={<FaRegLightbulb />}>Need a hint?</Button>
      </PopoverTrigger>
      <PopoverContent p={5}>
        <PopoverArrow />
        <PopoverCloseButton />
        <Flex flexDirection="row" columnGap={2} alignContent='center'>
          {shouldShowCationHint && <Hint buttonText="Show cation hint" handleClick={handleShowCationHint} hintText={cationHint} showHint={showCationHint} />}
          {shouldShowAnionHint && <Hint buttonText="Show anion hint" handleClick={handleShowAnionHint} hintText={anionHint} showHint={showAnionHint} />}
        </Flex>
      </PopoverContent>
    </Popover>
  )
}