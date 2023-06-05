import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import authReducer from './slices/auth.slice'
import imageReducer from './slices/image.slice'
import voteReducer from './slices/vote.slice'

const rootReducer = combineReducers({
  auth: authReducer,
  image: imageReducer,
  vote: voteReducer
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
