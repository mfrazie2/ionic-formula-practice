import { useAppSelector } from "@/app/hooks";
import { selectPracticeMode } from "@/features/practice/selectors";
import { Flex, Heading } from "@chakra-ui/react";
import SettingsModal from "../settings-modal";
import { useMemo } from "react";

export default function PracticeHeader() {
  const practiceMode = useAppSelector(selectPracticeMode);

  const heading = useMemo(() => {
    return practiceMode === 'formula-to-name' ? "Formula to Name" : "Name to Formula";
  }, [practiceMode]);

  return (
    <Flex flexDirection='row' justifyContent="space-between" alignContent="center">
      <Heading as="h1" marginBottom={4}>{heading}</Heading>
      <SettingsModal />
    </Flex>
  )
}