"use client";

import { CardHeader, Heading } from "@chakra-ui/react";
import { useAppSelector } from "@/app/hooks";
import { selectPrompt, selectShowHintsSetting } from "@/features/practice/selectors";
import PromptHint from "./prompt-hint";
import TransitionMetalHint from "./transition-metal-hint";


export default function PracticePrompt() {
  const prompt = useAppSelector(selectPrompt);
  const showHints = useAppSelector(selectShowHintsSetting);

  return (
    <CardHeader paddingY={4}>
      <Heading as='h2' size="lg"
        _firstLetter={{
          textTransform: 'capitalize'
        }}
        dangerouslySetInnerHTML={{ __html: prompt }}
        display='inline-block'
        marginRight={4}
      />
      {
        showHints && (
          <PromptHint />
        )
      }
      <TransitionMetalHint />
    </CardHeader>
  )
}