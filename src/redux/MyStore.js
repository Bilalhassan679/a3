import {configureStore} from '@reduxjs/toolkit';
import ImageSlices from './ImageSlices';
const MyStore = configureStore({
  reducer: {
    imageList: ImageSlices,
  },
});
export default MyStore;
