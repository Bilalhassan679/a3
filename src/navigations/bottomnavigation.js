import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../theme/Variables';
import * as Screens from '../screens/index';

const Tab = createBottomTabNavigator();
function MybottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: Colors.blueMenu,
        headerShown: false,
        // tabBarActiveBackgroundColor: color.boxColor,
        tabBarInactiveBackgroundColor: 'white',
        tabBarHideOnKeyboard: true,
        swipeEnabled: true,
        animationEnabled: true,
        tabBarStyle: {
          height: hp('9'),
          //   paddingBottom: hp('0'),
          //   bottom: Platform.OS == 'ios' ? hp('4') : hp('2'),
          //   width: wp('90'),
          //   alignSelf: 'center',
          //   borderRadius: Platform.OS == 'android' ? 10 : 20,
          //   overflow: 'hidden',
        },
      })}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={color == '#ffff' ? 'person' : 'person-outline'}
              color={color === '#000000' ? 'silver' : '#000000'}
              size={hp('3')}
            />
          ),
          title: 'Home',
          tabBarLabelStyle: {
            fontSize: 15,
            marginBottom: hp('1'),
            color: '#000000',
            fontWeight: 'bold',

            // ...globalStyles.globalTextStyles3,
          },
        }}
        component={Screens.GalleryScreen}
      />
      {/* <Tab.Screen
        name="Category"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={color == '#ffff' ? 'home' : 'home-outline'}
              color={color === '#000000' ? 'silver' : '#000000'}
              size={hp('3')}
            />
          ),
          title: 'Category',
          tabBarLabelStyle: {
            fontSize: 15,
            marginBottom: hp('1'),
            color: '#000000',
            fontWeight: 'bold',

            // ...globalStyles.globalTextStyles3,
          },
        }}
        component={screens.Category}
      /> */}

      {/* <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={color == '#ffff' ? 'home' : 'home-outline'}
              color={color === '#000000' ? 'silver' : '#000000'}
              size={hp('3')}
            />
          ),
          title: 'Profile',
          tabBarLabelStyle: {
            fontSize: 15,
            marginBottom: hp('1'),
            color: '#000000',
            fontWeight: 'bold',

            // ...globalStyles.globalTextStyles3,
          },
        }}
        component={screens.Profile}
      /> */}
      {/* <Tab.Screen
        name="Setting"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={color == '#ffff' ? 'home' : 'home-outline'}
              color={color === '#000000' ? 'silver' : '#000000'}
              size={hp('3')}
            />
          ),
          title: 'Setting',
          tabBarLabelStyle: {
            fontSize: 15,
            marginBottom: hp('1'),
            color: '#000000',
            fontWeight: 'bold',
            // ...globalStyles.globalTextStyles3,
          },
        }}
        component={screens.Setting}
      /> */}
    </Tab.Navigator>
  );
}
export default MybottomTabs;

const styles = StyleSheet.create({
  cartCircle: {
    backgroundColor: Colors.blackDark,
    position: 'absolute',
    bottom: hp('-2'),
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    alignSelf: 'center',
    width: Dimensions.get('screen').width * 0.18,
    height: Dimensions.get('screen').width * 0.18,
    alignContent: 'center',
    justifyContent: 'center',
  },
  cartInsideCircle: {
    backgroundColor: Colors.barFaded,
    position: 'absolute',
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    alignSelf: 'center',
    width: Dimensions.get('screen').width * 0.15,
    height: Dimensions.get('screen').width * 0.15,
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: hp('1.5'),
    backgroundColor: Colors.backgroundBlue,
  },
});
