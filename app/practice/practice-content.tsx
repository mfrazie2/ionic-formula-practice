"use client";

import ActionContainer from "@/components/common/action-container";
import ContentWrapper from "@/components/common/content-wrapper";
import Feedback from "@/components/common/feedback";
import PracticeHeader from "@/components/common/practice-header";
import PracticePrompt from "@/components/common/practice-prompt";
import { selectAnion, selectCation, selectPracticeSettings } from "@/features/practice/selectors";
import { useQuestionGenerator } from "@/hooks/use-question-generator";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppSelector } from "../hooks";
import RichTextInput from "@/components/common/rich-text-input";

const PracticeContent = () => {
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
    <ContentWrapper>
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
    </ContentWrapper>
  )
}

export default PracticeContent;