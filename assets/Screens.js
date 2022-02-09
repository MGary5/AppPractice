import React, { useState } from "react";
import { ScreenContainer } from "../assets/ScreenContainer";
import {
    View,
    Text,
    StyleSheet,
    Button,
    ImageBackground,
    TouchableOpacity,
    SafeAreaView,
    ImageComponent,
  } from "react-native";
import { Style, Colors } from "../style/styles";
import { NavigationContainer } from "@react-navigation/native";


  export const HomeScreen = ({navigation}) => (
      <ScreenContainer>
        <ImageBackground style = {styles.background}>
            <View style = {styles.buttonContainer}>
                <TouchableOpacity
                    title = "Favorite Artists"
                    style = {styles.favArtists}
                    onPress = {() => {
                        navigation.push('Favorite Artists');
                    }}
                >
                    <Text style={styles.buttonText}>Favorite Artists</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
      </ScreenContainer>
  )

  export const ProfileScreen = () => (
    <ScreenContainer>
      <ImageBackground style = {styles.background}>
        <View>
      
        </View>
      </ImageBackground>
    </ScreenContainer>
  )

  export const FavoriteArtists = () => (
    <ScreenContainer>
      <ImageBackground style = {styles.background}>
        <View>
      
        </View>
      </ImageBackground>
    </ScreenContainer>
  );

  export const SettingScreen = () => (
    <ScreenContainer>
        <ImageBackground style = {styles.background}>
        <View>
      
        </View>
      </ImageBackground>
    </ScreenContainer>
  )

  const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#303030"
    },
    itemContainer: {
        justifyContent: "center",
        alignItems: "center",
        top: "45%",
      },
      buttonText: {
        display: "flex",
        position: "relative",
        color: Colors.white,
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
        alignSelf: "auto",
      },
      buttonContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      },
      favArtists: {
        flexDirection: "row",
        width: "70%",
        height: "15%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5a4ec7",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5,
      }
  })