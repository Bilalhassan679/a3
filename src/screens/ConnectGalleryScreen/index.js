import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import BackHeader from '../../components/BackHeader';
import { styles } from './styles';
import { TextComponent } from '../../components/TextComponent';
import useConnectGalleryScreen from './ConnectGalleryScreen';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../theme/Variables';
import { hp } from '../../config/responsive';
const ConnectGalleryScreen = ({ navigation }) => {
  const { GetImgesPicker } = useConnectGalleryScreen();
  const { imageList } = useSelector(state => state);

  console.log(imageList, 'imagePicker');
  return (
    <>
      <View style={styles.container}>
        <BackHeader title={'GALLARY'} onPress={() => navigation.goBack()} />
        <View style={styles.centerView}>
          <TextComponent
            styles={styles.allPhotos}
            text={'30 Photos Selected'}
          />
          <View style={styles.imagesContainer}>
            {imageList.map(item => {
              return (
                <Image
                  style={styles.imagesContainer1}
                  resizeMode="cover"
                  source={{ uri: item.uri }}
                />
              );
            })}
            <View style={styles.addIconS}>

              <Ionicons onPress={GetImgesPicker}
                name="add-circle-sharp" color={"#5d0076"} size={hp('3')} />
            </View>
          </View>
            <View >
            <TextComponent
              onPress={GetImgesPicker}
              styles={styles.selPhotos}
              text={'Turn on Auto Slide Feature'}
              />
              </View> 
              <View style={{alignItems:'center'}}>   
              <TouchableOpacity style={styles.connbtn} onPress={()=>navigation.navigate('GalleryScreen')}>
                <Text style={styles.textColor}>Connect</Text>
                </TouchableOpacity>
                </View>        
        </View>
      </View>
    </>
  );
};

export default ConnectGalleryScreen;
