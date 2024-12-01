import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, Text, View, StyleSheet } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import Home from "./screens/Home";
import Planets from "./screens/Planets";
import Films from "./screens/Films";
import Spaceships from "./screens/Spaceships";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [isConnected, setIsConnected] = useState(null);


  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected); 
    });

    return () => unsubscribe();
  }, []);

  if (isConnected === null
