"use client";

import { Box } from "@chakra-ui/layout";
import { useEffect } from "react";

import RichTextInput from "@/components/common/rich-text-input";
import { useAppSelector } from "../hooks";
import { selectAnion, selectCation, selectPracticeSettings } from "@/features/practice/selectors";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { useQuestionGenerator } from "@/hooks/use-question-generator";
import Feedback from "@/components/common/feedback";
import ActionContainer from "@/components/common/action-container";
import PracticeHeader from "@/components/common/practice-header";
import PracticePrompt from "@/components/common/practice-prompt";

export default function Practice() {
  const {
    getNewCompound
  } = useQuestionGenerator();

  const anion = useAppSelector(selectAnion);
  const cation = useAppSelector(selectCation);
  const settings = useAppSelector(selectPracticeSettings);

  useEffect(() => {
    if (!anion && !cation) {
      getNewCompound();
    }
  }, [anion, cation, getNewCompound]);

  useEffect(() => {
    getNewCompound()
  }, [settings, getNewCompound])

  return (
    <Box maxW="1280px" p="40px 80px" mx="auto">
      <PracticeHeader />
      <Card p="16px" size="lg">
        <PracticePrompt />
        <CardBody paddingY={4}>
          <RichTextInput />
          <Feedback />
        </CardBody>
        <CardFooter paddingY={4}>
          <ActionContainer />
        </CardFooter>
      </Card>
    </Box>
  )
}