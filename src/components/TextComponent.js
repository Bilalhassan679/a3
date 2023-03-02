import React from 'react';
import {Text} from 'react-native';
import {hp} from '../config/responsive';
import {Colors} from '../theme/Variables';

export const TextComponent = ({text, styles, onPress}) => {
  return (
    <Text
      onPress={onPress}
      style={{color: Colors.white, fontSize: hp('2'), ...styles}}>
      {text}
    </Text>
  );
};
