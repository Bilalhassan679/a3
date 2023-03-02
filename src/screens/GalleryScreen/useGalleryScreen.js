import {useSelector} from 'react-redux';
import * as React from 'react';
const useGalleryScreen = () => {
  const {imageList} = useSelector(state => state);
  const [search, setSearch] = React.useState('');
  const [categoryFilterData, setCategoryFilterData] = React.useState('');
  function searchFun(e) {
    var text = e;
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = imageList.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.fileName
          ? item.fileName.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setCategoryFilterData(newData);
      setSearch(text);
    } else {
      setCategoryFilterData(imageList);
      setSearch(text);
    }
  }
  return {imageList, search, searchFun, categoryFilterData};
};

export default useGalleryScreen;
