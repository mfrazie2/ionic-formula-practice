"use client";

import { Box, Heading } from "@chakra-ui/layout";
import { useEffect } from "react";

import RichTextInput from "@/components/common/rich-text-input";
import { useAppSelector } from "../hooks";
import { selectAnion, selectCation } from "@/features/practice/selectors";
import CompoundName from "@/components/common/compound-name";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";
import { useQuestionGenerator } from "@/hooks/use-question-generator";
import Feedback from "@/components/common/feedback";
import ActionContainer from "@/components/common/action-container";

export default function Practice() {
  const {
    getNewCompound
  } = useQuestionGenerator();

  const anion = useAppSelector(selectAnion);
  const cation = useAppSelector(selectCation);

  useEffect(() => {
    if (!anion && !cation) {
      getNewCompound();
    }
  }, [anion, cation, getNewCompound]);

  return (
    <Box maxW="1280px" p="40px 80px" mx="auto">
      <Heading as="h1" marginBottom={4}>Name to Formula</Heading>
      <Card p="16px" size="lg">
        <CardHeader paddingY={4}>
          {cation && anion && <CompoundName name={`${cation.name} ${anion.name}`} />}
        </CardHeader>
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