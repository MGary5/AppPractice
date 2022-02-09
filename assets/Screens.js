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


  export const HomeScreen = () => (
      <ScreenContainer>
        <View style = {styles.buttonContainer}>
            <TouchableOpacity
                title = "Favorite Artists"
                
            >
            </TouchableOpacity>
        </View>
      </ScreenContainer>
  )

  export const ProfileScreen = () => (
    <ScreenContainer>
        <View>
      
        </View>
    </ScreenContainer>
  )

  export const SettingScreen = () => (
    <ScreenContainer>
        <View>
      
        </View>
    </ScreenContainer>
  )

  const styles = StyleSheet.create({
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
      }
  })