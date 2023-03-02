import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Variables';
import {hp, wp} from '../config/responsive';

const BottomHeader = ({title, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.container}}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BottomHeader;

const styles = StyleSheet.create({
  container: {
    
    width: wp('100'),
    height: hp('8'),
    backgroundColor: "#1c2a39",
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    position: 'absolute',
    bottom: 0,
  },
  text: {
    fontSize: hp('2'),
    color: Colors.white,
  },
});
