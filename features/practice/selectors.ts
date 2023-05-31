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
export const selectPracticeMode = createSelector(selectPracticeSettings, ({ mode }) => mode);
export const selectPracticeType = createSelector(selectPracticeSettings, ({ type }) => type);
export const selectShowHintsSetting = createSelector(selectPracticeSettings, ({ showHints }) => showHints);
export const selectPrompt = createSelector(selectPracticeSettings,
  selectAnion,
  selectCation,
  selectCompound, (
    practiceSettings, anion, cation, compound,
  ) => {
  if (!cation && !anion) return '';
  if (practiceSettings.mode === 'name-to-formula') {
    if (practiceSettings.type === 'compound') {
      return `${cation.name} ${anion.name}`;
    } else if (practiceSettings.type === 'anion-only') {
      return anion.name;
    } else {
      return cation.name;
    }
  } else {
    if (practiceSettings.type === 'compound') {
      return compound;
    } else if (practiceSettings.type === 'anion-only') {
      return anion.formula;
    } else {
      return cation.formula;
    }
  }
});
export const selectAnswer = createSelector(
  selectPracticeSettings,
  selectAnion,
  selectCation,
  selectCompound, (
    practiceSettings, anion, cation, compound,
  ) => {
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

export const selectAnionHint = createSelector(selectPracticeSettings,
  selectAnion, (
    practiceSettings, anion,
  ) => {
  if (!anion) return '';
  if (practiceSettings.mode === 'name-to-formula') {
    return anion.formula;
  } else {
    return anion.name;
  }
});
export const selectCationHint = createSelector(selectPracticeSettings,
  selectCation, (
    practiceSettings, cation,
  ) => {
  if (!cation) return '';
  if (practiceSettings.mode === 'name-to-formula') {
    return cation.formula;
  } else {
    return cation.name;
  }
});
