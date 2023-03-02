import React from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {AddImage} from '../../redux/ImageSlices';
const useConnectGalleryScreen = () => {
  const dispatch = useDispatch();

  async function GetImgesPicker() {
    launchImageLibrary(
      {
        selectionLimit: 0,
        mediaType: 'photo',
        quality: 0.5,
        maxWidth: 300,
        maxHeight: 300,
      },
      res => {
        if (!res?.didCancel) {
          let resCopy = res?.assets?.map((item, index) => {
            return {...item, fileName: 'test' + index};
          });
          console.log(resCopy, 'resCopy');
          dispatch(AddImage(resCopy));

          // updateImage(res?.assets);
        }
      },
    );

    // if (imagePicker.length > 0) {
    //   console.log('a', imagePicker);
    // } else {
    //   console.log('b', imagePicker);
    // }
  }
  return {GetImgesPicker};
};

export default useConnectGalleryScreen;
