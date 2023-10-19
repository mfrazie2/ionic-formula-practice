"use client";

import { useAppSelector } from "@/app/hooks";
import { selectPracticeMode, } from "@/features/practice/selectors";
import { Box, Text } from "@chakra-ui/react";

const TransitionMetalHint = () => {
  const practiceMode = useAppSelector(selectPracticeMode);

  return practiceMode === 'formula-to-name' ? (
    <Box mt={4}>
      <Text>
        For transition metals, place the Roman numeral charge right after the metal name with no space.
      </Text>
      <Text><em>For example</em>: Iron(II).</Text>
    </Box>)
    : null;
};

export default TransitionMetalHint;