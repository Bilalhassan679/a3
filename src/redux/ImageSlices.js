import {createSlice} from '@reduxjs/toolkit';
initialState = [];
const ImageSlice = createSlice({
  name: 'save_images',
  initialState,
  reducers: {
    AddImage(state, action) {
      console.clear();
      console.log(action.payload, 'action.payload');
      console.log(initialState, 'initialState');
      state.push(...action.payload);
    },
  },
});

export const {AddImage} = ImageSlice.actions;
export default ImageSlice.reducer;
