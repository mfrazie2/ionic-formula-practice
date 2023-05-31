import { useAppSelector } from "@/app/hooks";
import { selectIsCorrect, selectUserResponse } from "@/features/practice/selectors";
import { useQuestionGenerator } from "@/hooks/use-question-generator";
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";

export default function ActionContainer() {
  const {
    checkUserResponse,
    getNewCompound
  } = useQuestionGenerator();
  const isCorrect = useAppSelector(selectIsCorrect);
  const userResponse = useAppSelector(selectUserResponse);

  return (
    <Flex className="actionContainer" justifyContent='space-between' width="100%">
      {
        isCorrect === null ? (<Button onClick={checkUserResponse} disabled={!!userResponse}>Check answer</Button>) : (<Button onClick={getNewCompound}>New compound</Button>)
      }
    </Flex>
  )
}