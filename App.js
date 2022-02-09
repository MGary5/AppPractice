import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { favoriteArtists, HomeScreen, ProfileScreen, SettingScreen } from './assets/Screens';
import { NavigationContainer } from "@react-navigation/native";


const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();
const favArtistStack = createNativeStackNavigator();
const TabNav = createMaterialBottomTabNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name = "Home Screen" component = {HomeScreen}/>
    <HomeStack.Screen name = "Favorite Artists" component = {favArtistScreen}/>
  </HomeStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name = 'Profile' component = {ProfileScreen}/>
  </ProfileStack.Navigator>
);

const SettingStackScreen = () => (
  <SettingStack.Navigator>
    <SettingStack.Screen name = 'Settings' component = {SettingScreen}/>
  </SettingStack.Navigator>
);

const favArtistScreen = () => (
  <favArtistStack.Navigator>
    <favArtistStack.Screen name = 'Favorite Artist' component = {favoriteArtists}/>
  </favArtistStack.Navigator>
)

const TabScreen = () => (
  <TabNav.Navigator>
    <TabNav.Screen name = 'Home' component = {HomeStackScreen}/>
    <TabNav.Screen name = 'Profile' component = {ProfileStackScreen}/>
    <TabNav.Screen name = 'Settings' component = {SettingStackScreen}/>
  </TabNav.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabScreen/>
    </NavigationContainer>
  );
}