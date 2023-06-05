import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { RootState } from 'store'

const initialState: any = {
  img: null,
  pic: null,
  curY: 0,
}

export const imageSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSelectedImage: (state, action: PayloadAction<any>) => {
      const res = action.payload ;
      state.img = res.img ;
      state.pic = res.pic ;
      state.curY = res.curY ;
    }
  }
})

// actions
export const {
  setSelectedImage,
} = imageSlice.actions

// selectors
// export const selectUser = (state: RootState) => state.auth.account

export default imageSlice.reducer
