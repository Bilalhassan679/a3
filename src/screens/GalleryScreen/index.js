import {FlatList, Image, TextInput, View} from 'react-native';
import React from 'react';
import BackHeader from '../../components/BackHeader';
import {styles} from './styles';
import BottomHeader from '../../components/BottomHeader';
import {TextComponent} from '../../components/TextComponent';
import {useSelector} from 'react-redux';
import useGalleryScreen from './useGalleryScreen';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import {hp, wp} from '../../config/responsive';
const GalleryScreen = ({navigation}) => {
  const {searchFun, search, categoryFilterData} = useGalleryScreen();
  const {imageList} = useGalleryScreen();
  console.log(imageList, 'GalleryScreen');

  return (
    <>
      <View style={styles.container}>
        <BackHeader title={'GALLARY'} />
        <View style={styles.centerView}>
          <TextComponent styles={styles.allPhotos} text={'All Photos'} />
        
            <TextComponent
              styles={styles.selPhotos}
              text={'Select Photos to Display'}
            />
          <TextInput
            style={styles.ipoutfield}
            onChangeText={e => searchFun(e)}
            placeholder="search your picture"
            value={search}
            />
          <View style={styles.allPhotosInner}>
            <View style={styles.flatsty}>


            <FlatList
              data={categoryFilterData || imageList}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={index => index.toString()}
              renderItem={({item}) => {
                return (
                  <View >
                    <Image
                      source={{uri: item.uri}}
                      style={{height: hp('13'), width: wp('28'), margin: 5,}}
                      resizeMode="cover"
                      />
                    <TextComponent text={item.fileName} />
                  </View>
                );
              }}
              />
              </View>
          </View>
        </View>

        <BottomHeader
          onPress={() => {
            navigation.navigate('ConnectGalleryScreen');
          }}
          title={'Proceed to Connect'}
        />
      </View>
    </>
  );
};

export default GalleryScreen;
