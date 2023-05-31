import { Box, Button, CardHeader, Heading, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, Text, useDisclosure } from "@chakra-ui/react";
import { useAppSelector } from "@/app/hooks";
import { selectPracticeType, selectPrompt, selectShowHintsSetting } from "@/features/practice/selectors";
import { FaRegLightbulb } from "react-icons/fa";
import PromptHint from "./prompt-hint";


export default function PracticePrompt() {
  const prompt = useAppSelector(selectPrompt);
  const showHints = useAppSelector(selectShowHintsSetting);
  const practiceType = useAppSelector(selectPracticeType);
  const { onOpen, onClose, isOpen } = useDisclosure()

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
    </CardHeader>
  )
}