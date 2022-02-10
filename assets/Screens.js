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
                    <Text style={styles.text, {fontSize: 20, }}>Favorite Artists</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
      </ScreenContainer>
  )

  export const ProfileScreen = () => (
    <SafeAreaView style = {styles.background}>
      <ScrollView showsVerticalScrollIndicator = {false}>
        
        {/* creates top margin for profile screen */}
        <View style = {styles.profileTab}/>
        
        {/* importing/styling profile image */}
        <View style = {{alignSelf: "center"}}>
          <View style = {styles.profileImage}>
            <Image 
            source = {require("./trollface.png")} 
            style = {styles.image}
            />
          </View>
        </View>
        
        {/* Account details styling/editing */}
        <View style = {styles.profileContainer}>
          <View style = {styles.accountBox}>
            <Text style = {styles.text, {textFont: 15}}>Followers</Text>
            <Text style = {styles.text, {textFont: 15, fontWeight: "bold"}}>25</Text>
          </View>
          <View style = {styles.accountBox}>
            <Text style = {styles.text, {textFont: 15}}>Discovered</Text>
            <Text style = {styles.text, {textFont: 15, fontWeight: "bold"}}>128</Text>
          </View>
          <View style = {styles.accountBox}>
            <Text style = {styles.text, {textFont: 15}}>Recommended</Text>
            <Text style = {styles.text, {textFont: 15, fontWeight: "bold"}}>300</Text>
          </View>
        </View>
      
        {/* Activity Feed portion of profile */}
        <View>
          <View style = {styles.profileContainer}>
            <View style = {styles.profileBoxDisplays}>
              <Text style = {styles.text, {textFont: 30}}>Dude this is my Third Recommendation!</Text>
              <Text style = {styles.text, {textFont: 30}}>Myles Recommends Slaughterhouse by Ty Segall Band.</Text>

            </View>
          </View>
          <View style = {styles.profileContainer}>
            <View style = {styles.profileBoxDisplays}>
              <Text style = {styles.text, {textFont: 30}}>Dude this is my second Recommendation!</Text>
              <Text style = {styles.text, {textFont: 30}}>Myles Recommends Black Sabbath by Black Sabbath.</Text>
            </View>
          </View>
          <View style = {styles.profileContainer}>
            <View style = {styles.profileBoxDisplays}>
              <Text style = {styles.text, {textFont: 30}}>Dude this is my first Recommendation!</Text>
              <Text style = {styles.text, {textFont: 30}}>Myles Recommends The Sciences by Sleep.</Text>
            </View>
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
      buttonText: {
        display: "flex",
        position: "relative",
        color: Colors.white,
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
        alignSelf: "auto",
      },
      text: {
        fontFamily: "HelveticaNeue",
        color: "#999999"
      },
      profileBoxDisplays: {
        flexDirection: "column",
        alignItems: 'center',
        width: "100%",
        height: "100%",
        backgroundColor: "#525252",
        paddingHorizontal: 20,
        paddingVertical: 10
      },
      buttonContainer: {
        flex: 1,
        alignText: "center",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 40,
      },
      profileContainer: {
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignSelf: "stretch",
        marginTop: 32
      },
      accountBox: {
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignText: "center",
        alignItems: "center",
        alignSelf: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#525252",
        marginRight: 15,
        flex: 1
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
        marginTop: 25,
        marginHorizontal: 25
      }

  })