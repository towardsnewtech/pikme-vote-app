import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { RootState } from 'store'

const initialState: any = {
  category: {}
}

export const voteSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<any>) => {
      const res = action.payload ;
      state.category = res ;
    }
  }
})

// actions
export const {
    setSelectedCategory,
} = voteSlice.actions

// selectors
// export const selectUser = (state: RootState) => state.auth.account

export default voteSlice.reducer
