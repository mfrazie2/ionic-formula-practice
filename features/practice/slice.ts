import { Ion } from '@/utils/buildFormula';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PracticeSettings, defaultPracticeSettings } from './types';

export interface PracticeState {
  cation: Ion;
  anion: Ion;
  compound: string;
  isCorrect: boolean | null;
  showCationHint: boolean;
  showAnionHint: boolean;
  userResponse: string;
  practiceSettings: PracticeSettings;
}

const initialState: PracticeState = {
  cation: null!,
  anion: null!,
  compound: '',
  showAnionHint: false,
  showCationHint: false,
  userResponse: '',
  isCorrect: null,
  practiceSettings: defaultPracticeSettings
}

export const practiceSlice = createSlice({
  name: 'practice',
  initialState,
  reducers: {
    setCation: (state, action: PayloadAction<Ion>) => {
      state.cation = action.payload;
    },
    setAnion: (state, action: PayloadAction<Ion>) => {
      state.anion = action.payload;
    },
    setCompound: (state, action: PayloadAction<string>) => {
      state.compound = action.payload;
    },
    setUserResponse: (state, action: PayloadAction<string>) => {
      state.userResponse = action.payload;
    },
    showAnionHint: (state, action: PayloadAction<boolean>) => {
      state.showAnionHint = action.payload;
    },
    showCationHint: (state, action: PayloadAction<boolean>) => {
      state.showCationHint = action.payload;
    },
    setIsCorrect: (state, action: PayloadAction<boolean | null>) => {
      state.isCorrect = action.payload;
    },
    setPracticeSettings: (state, action: PayloadAction<PracticeSettings>) => {
      state.practiceSettings = action.payload;
    },
    resetState: () => initialState,
  },
})

export const { actions } = practiceSlice;

export default practiceSlice.reducer