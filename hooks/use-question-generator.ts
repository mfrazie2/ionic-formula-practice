import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectAnswer, selectCleanedUserResponse, selectPracticeSettings, selectUserResponse } from "@/features/practice/selectors";
import { actions } from "@/features/practice/slice";
import { checkAnswer } from "@/utils/checkAnswer";
import { getRandomCompound } from "@/utils/getIons";
import { useCallback } from "react";
import { batch } from "react-redux";

export const useQuestionGenerator = () => {
  const dispatch = useAppDispatch();
  const userResp = useAppSelector(selectCleanedUserResponse);
  const answer = useAppSelector(selectAnswer);
  const practiceSettings = useAppSelector(selectPracticeSettings);


  const getNewCompound = useCallback(() => {
    const {
      anion,
      cation,
      compound
    } = getRandomCompound();

    batch(() => {
      dispatch(actions.setAnion(anion));
      dispatch(actions.setCation(cation));
      dispatch(actions.setCompound(compound));
      dispatch(actions.setIsCorrect(null));
      dispatch(actions.setUserResponse(''));
    });
  }, [dispatch])

  const checkUserResponse = useCallback(() => {
    if (practiceSettings.mode === 'formula-to-name') {
      dispatch(actions.setIsCorrect(checkAnswer(userResp.toLowerCase(), answer.toLowerCase())))
      return;
    }
    dispatch(actions.setIsCorrect(checkAnswer(userResp, answer)))
  }, [practiceSettings.mode, dispatch, userResp, answer]);


  return {
    checkUserResponse,
    getNewCompound
  };
}