import {Tabs } from "expo-router";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#dcdcdc",
          paddingTop: 10,
          height: 90,
        },
        tabBarActiveTintColor: "#318ce7",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({focused}) => <Entypo name="home" size={24} color={focused?'#318ce7':"gray"}/>,
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: "Reword",
          tabBarIcon: ( {focused}) => (
            <MaterialIcons name="credit-card" size={24} color={focused?'#318ce7':"gray"} />
          ),
        }}
      />
      <Tabs.Screen
        name="plus"
        options={{
          title: "",
          tabBarIcon: () => (
            <AntDesign name="plus" size={30} color='#318ce7'/>
          ),
        }}
      />
          <Tabs.Screen
        name="menu"
        options={{
          title: "Job",
          tabBarIcon: ({focused}) => (
            <Ionicons name="bag" size={24} color={focused?'#318ce7':"gray"} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Profile",
          tabBarIcon: ({focused}) => <Ionicons name="person" size={24} color={focused?'#318ce7':"gray"} />,
        }}
      />
  
    </Tabs>
  );
};
export default _layout;
