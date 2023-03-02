import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigatior from './src/navigations/naviagation';
import {Provider} from 'react-redux';
import MyStore from './src/redux/MyStore';
function AppTwo() {
  return (
    <>
      <Provider store={MyStore}>
        <NavigationContainer>
          <StackNavigatior />
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default AppTwo;
