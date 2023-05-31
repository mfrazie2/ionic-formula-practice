import { RootState } from "@/app/store"
import { createSelector } from "@reduxjs/toolkit";

const selectPracticeState = createSelector((state: RootState) => state, state => state.practice);

export const selectUserResponse = createSelector(selectPracticeState, ({ userResponse }) => userResponse)

export const selectIsCorrect = createSelector(selectPracticeState, ({ isCorrect }) => isCorrect);
export const selectShowCationHint = createSelector(selectPracticeState, ({ showCationHint }) => showCationHint);
export const selectShowAnionHint = createSelector(selectPracticeState, ({ showAnionHint }) => showAnionHint);
export const selectCation = createSelector(selectPracticeState, ({ cation }) => cation);
export const selectAnion = createSelector(selectPracticeState, ({ anion }) => anion);
export const selectCompound = createSelector(selectPracticeState, ({ compound }) => compound);
export const selectPracticeSettings = createSelector(selectPracticeState, ({ practiceSettings }) => practiceSettings);
export const selectAnswer = createSelector(
  selectPracticeState,
  selectPracticeSettings,
  selectAnion,
  selectCation,
  selectCompound, ({
    practiceSettings, anion, cation, compound,
  }) => {
  if (practiceSettings.mode === 'name-to-formula') {
    if (practiceSettings.type === 'compound') {
      return compound;
    } else if (practiceSettings.type === 'anion-only') {
      return anion.formula;
    } else {
      return cation.formula;
    }
  } else {
    if (practiceSettings.type === 'compound') {
      return `${cation.name} ${anion.name}`;
    } else if (practiceSettings.type === 'anion-only') {
      return anion.name;
    } else {
      return cation.name;
    }
  }
});

export const selectCleanedUserResponse = createSelector(selectUserResponse, selectPracticeSettings, (userResponse, practiceSettings) => {
  let cleanedResponse = userResponse.replace("<p>", '').replace("</p>", '').replace("<br>", '');

  if (practiceSettings.mode === 'name-to-formula') {
    cleanedResponse = cleanedResponse.replaceAll(' ', '');
  }

  return cleanedResponse.trim();
});
export const selectHasUserResponse = createSelector(selectCleanedUserResponse, userResponse => {
  return userResponse.length > 0;
});
