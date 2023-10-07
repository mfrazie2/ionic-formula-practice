"use client";

import { useAppSelector } from "@/app/hooks"
import { selectAnswer, selectIsCorrect } from "@/features/practice/selectors"
import { Box, Text } from "@chakra-ui/layout";

export default function Feedback() {
  const isCorrect = useAppSelector(selectIsCorrect);
  const answer = useAppSelector(selectAnswer);
  return (
    <Box marginY={4}>
      {isCorrect !== null && (
        isCorrect ? (
          <Text p={2} borderRadius={4} width='fit-content' backgroundColor="pigmentGreen60" color="spaceCadet">Correct 🎉</Text>
        ) : (<Text p={2} borderRadius={4} width='fit-content' backgroundColor="carmine40" color="spaceCadet">Incorrect - <Text color="spaceCadet" as='span' dangerouslySetInnerHTML={{ __html: answer }} /></Text>)
      )}
    </Box>
  )
}