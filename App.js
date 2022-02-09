import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen } from './assets/Screens';
import { NavigationContainer } from "@react-navigation/native";


const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name = "Home Screen" component = {HomeScreen}/>
  </HomeStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <HomeStackScreen/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
