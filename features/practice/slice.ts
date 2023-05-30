import { Ion } from '@/utils/buildFormula';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import ReactQuill from 'react-quill';

export type PracticeModes = {

}

export interface PracticeState {
  cation: Ion | null;
  anion: Ion | null;
  isCorrect: boolean | null;
  practiceMode: null;
  showCationHint: boolean;
  showAnionHint: boolean;
  userResponse: string;
}

const initialState: PracticeState = {
  cation: null,
  anion: null,
  showAnionHint: false,
  showCationHint: false,
  practiceMode: null,
  userResponse: '',
  isCorrect: null,
}

export const practiceSlice = createSlice({
  name: 'practice',
  initialState,
  reducers: {
    setCation: (state, action: PayloadAction<Ion | null>) => {
      state.cation = action.payload;
    },
    setAnion: (state, action: PayloadAction<Ion | null>) => {
      state.anion = action.payload;
    },
    setUserResponse: (state, action: PayloadAction<string>) => {
      state.userResponse = action.payload;
    },
    showAnionHint: (state) => {
      state.showAnionHint = true;
    },
    showCationHint: (state) => {
      state.showCationHint = true;
    },
    setIsCorrect: (state, action: PayloadAction<boolean>) => {
      state.isCorrect = action.payload;
    },
    resetState: () => initialState,
  },
})

export const { actions } = practiceSlice;

export default practiceSlice.reducer