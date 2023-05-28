import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { RootState } from 'store'

const initialState: any = {
  account: null
}

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSelectedAccount: (state, action: PayloadAction<any>) => {
      const singleUser = action.payload
      state.account = singleUser
    },
    logout: state => {
      state.account = null
    }
  }
})

// actions
export const {
  setSelectedAccount,
  logout
} = authSlice.actions

// selectors
// export const selectUser = (state: RootState) => state.auth.account

export default authSlice.reducer
