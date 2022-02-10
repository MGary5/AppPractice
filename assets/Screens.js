import React, { useState } from "react";
import { ScreenContainer } from "../assets/ScreenContainer";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    SafeAreaView,
    Image
  } from "react-native";
import { Style, Colors } from "../style/styles";
import { NavigationContainer } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";


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
    <SafeAreaView style = {styles.background}>
      <ScrollView showsVerticalScrollIndicator = {false}>
        <View style = {styles.profileTab}>

        </View>
        <View style = {{alignSelf: "center"}}>
          <View style = {styles.profileImage}>
            <Image 
            source = {require("./trollface.png")} 
            style = {styles.image}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

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
        alignItems: "flex-start",
        justifyContent: "flex start",
        padding: 40,
      },
      favArtists: {
        flexDirection: "row",
        width: "50%",
        height: "15%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5a4ec7",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5,
      },
      profileImage: {
        height: 200,
        width: 200,
        borderRadius: 100,
        overflow: "hidden"
      },
      image: {
        flex: 1,
        marginTop: 0,
        height: undefined,
        width: undefined
      },
      profileTab: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 25,
        marginHorizontal: 25
      }

  })