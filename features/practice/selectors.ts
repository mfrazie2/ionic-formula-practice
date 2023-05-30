import { RootState } from "@/app/store"
import { createSelector } from "@reduxjs/toolkit";

const selectPracticeState = createSelector((state: RootState) => state, state => state.practice);


export const selectUserResponse = createSelector(selectPracticeState, ({ userResponse }) => userResponse)
export const selectIsCorrect = createSelector(selectPracticeState, ({ isCorrect }) => isCorrect);

export const selectShowCationHint = createSelector(selectPracticeState, ({ showCationHint }) => showCationHint);
export const selectShowAnionHint = createSelector(selectPracticeState, ({ showAnionHint }) => showAnionHint);