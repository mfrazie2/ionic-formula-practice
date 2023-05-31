export type PracticeMode = 'name-to-formula' | 'formula-to-name'

export type PracticeType = 'compound' | 'cation-only' | 'anion-only'

export type PracticeSettings = {
  mode: PracticeMode;
  showHints: boolean;
  type: PracticeType;
}

export const defaultPracticeSettings: PracticeSettings = {
  mode: 'name-to-formula',
  showHints: true,
  type: 'compound',
}