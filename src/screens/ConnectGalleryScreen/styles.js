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
    marginLeft: wp('6'),
    marginTop: hp('8'),
  },
  allPhotos: {
    fontSize: hp('2'),
    color: Colors.white,
    fontWeight: 'bold',
  },
  selPhotos: {
    fontSize: hp('2'),
    color: Colors.white,
    marginTop:hp('4')
  },
  imagesContainer: {
    width: wp('20'),
    flexDirection: 'row',
  },
  imagesContainer1: {
    marginTop:hp('2'),
    margin: 1,
    width: wp('15'),
    height: hp('7'),
    flexDirection: 'row',
  },
  addIconS:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft:wp('5'),
    marginTop:hp('3')
  },
  connbtn:{
    elevation:10,
    marginTop:hp('4'),
    padding:15,
    width:wp('50'),
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#560076'
  },
  textColor:{
    fontWeight:'bold',
    color:Colors.white
  }
});
