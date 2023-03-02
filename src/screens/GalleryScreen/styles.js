import {StyleSheet} from 'react-native';
import {hp, wp} from '../../config/responsive';
import {Colors} from '../../theme/Variables';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  BottomHeader: {
    position: 'absolute',
    bottom: 0,
  },
  centerView: {
    alignItems: 'center',
    marginTop: hp('8'),
  },
  allPhotos: {
    fontSize: hp('2.5'),
    color: Colors.primaryColorFaded,
    fontWeight: 'bold',
  },
  allPhotosInner: {
    // flexDirection: 'row',
  },
  selPhotos: {
    fontSize: hp('2'),
    color: Colors.white,
    marginLeft:wp('3')
  },
  ipoutfield: {
    borderRadius:5,
    width: wp('55'),
    height: hp('6'),
    backgroundColor: 'white',
    marginBottom:hp('2'),
    padding:10
  },
  
  
  // flatsty:{
  //   marginTop:hp('2')
  // }
});
