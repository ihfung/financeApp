import { View, Text } from "react-native";
import { Redirect } from "expo-router";
import React from "react";


export default function HomeScreen() {
  return (
    <Redirect href={'/moveMoney'}/>
  )
}

