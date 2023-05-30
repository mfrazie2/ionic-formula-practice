import { AnyAction, ThunkAction, configureStore } from '@reduxjs/toolkit'
import practiceReducer from "@/features/practice/slice";

export const store = configureStore({
  reducer: {
    practice: practiceReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;