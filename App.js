import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FavoriteArtists, HomeScreen, ProfileScreen, ProfileSettingScreen, SettingScreen } from './assets/Screens';
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();
const FavArtistStack = createNativeStackNavigator();
const ProfileSettingStack = createNativeStackNavigator();
const TabNav = createMaterialBottomTabNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{headerShown: false}}>
    <HomeStack.Screen name = "Home Screen" component = {HomeScreen} />  
    <HomeStack.Screen name = "Favorite Artists" component = {FavArtistScreen} options={{headerShown: true, headerStyle: {backgroundColor: "#545454", borderBottomColor: "#545454"} }}/>
  </HomeStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator screenOptions={{
      headerShown: false
    }}
  >
    <ProfileStack.Screen name = 'Profile' component = {ProfileScreen}/>
    <ProfileStack.Screen name = 'Profile Settings' component = {ProfileSettingStackScreen} options={{headerShown: true, headerStyle: {backgroundColor: "#545454", borderBottomColor: "#545454"} }}/>
  </ProfileStack.Navigator>
);

const ProfileSettingStackScreen = () => (
  <ProfileSettingStack.Navigator screenOptions={{headerShown: false}}>
    <ProfileSettingStack.Screen name = "Profile Settings" component = {ProfileSettingScreen}/>
  </ProfileSettingStack.Navigator>
);

const SettingStackScreen = () => (
  <SettingStack.Navigator screenOptions={{
      headerShown: false
    }}
  >
    <SettingStack.Screen name = 'Settings' component = {SettingScreen}/>
  </SettingStack.Navigator>
);

const FavArtistScreen = () => (
  <FavArtistStack.Navigator screenOptions={{
      headerShown: false
    }}
  >
    <FavArtistStack.Screen name = 'Favorite Artist' component = {FavoriteArtists}/>
  </FavArtistStack.Navigator>
)

const TabScreen = () => (
  <TabNav.Navigator barStyle={{ backgroundColor: "#282828"}}>
    <TabNav.Screen name = 'Profile' component = {ProfileStackScreen} options = {{tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
          name = 'account'
          color = {color}
          size = {20}
          />
        )
      }}
    />
    <TabNav.Screen name = 'Home' component = {HomeStackScreen} options = {{tabBarIcon: ({color, size}) => (
      <MaterialCommunityIcons
      name = "home"
      color = {color}
      size = {20}
      />
      ), 
    }}
    />
    <TabNav.Screen name = 'Settings' component = {SettingStackScreen} options = {{tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
          name = 'cog'
          color = {color}
          size = {20}
          />
        )
      }}/>
  </TabNav.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabScreen/>
    </NavigationContainer>
  );
}