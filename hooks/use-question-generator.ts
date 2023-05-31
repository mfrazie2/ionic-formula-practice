import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectAnswer, selectUserResponse } from "@/features/practice/selectors";
import { actions } from "@/features/practice/slice";
import { checkAnswer } from "@/utils/checkAnswer";
import { getRandomCompound } from "@/utils/getIons";
import { useCallback } from "react";
import { batch } from "react-redux";

export const useQuestionGenerator = () => {
  const dispatch = useAppDispatch();
  const userResp = useAppSelector(selectUserResponse);
  const answer = useAppSelector(selectAnswer);


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
  }, [])

  const checkUserResponse = useCallback(() => {
    dispatch(actions.setIsCorrect(checkAnswer(userResp, answer)))
  }, [userResp, answer]);


  return {
    checkUserResponse,
    getNewCompound
  };
}