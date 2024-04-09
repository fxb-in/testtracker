import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapScreen from "../Navigations/MapScreen";
import Profile from "../Navigations/Profile";
import AboutScreen from "../Navigations/AboutScreen";
import GroupChat from "../Navigations/GroupChat";
export default function TabNavigations() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>

          <Tab.Screen name="About" component={AboutScreen}  options={{
          tabBarLabel: "information",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" color={color} size={size} />
          ),
        }}/>

      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" color={color} size={size} />
          ),
        }}
      />

           <Tab.Screen name="Chat" component={GroupChat}  options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox-ellipses" color={color} size={size} />
          ),
        }} />


      <Tab.Screen name="Profile" component={Profile}   options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color="black" />
          ),
        }}/>


    


    </Tab.Navigator>
  );
}
