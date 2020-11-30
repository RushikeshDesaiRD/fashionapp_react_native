import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, SIZES } from './../constants';
import Entypo from "react-native-vector-icons/Entypo"
import Home from "../screens/Home"
import Detail from "../screens/Detail"
import Women from "../screens/Women"
import Men from "../screens/Men"
const Tabs = createBottomTabNavigator();
const BottomTabs = () => (
    <Tabs.Navigator
        tabBarOptions={{
           style:{
            height: 60,
            justifyContent: 'center',
            paddingVertical: SIZES.h4,
            backgroundColor: COLORS.secondary,
            elevation: 2
           }
        }}
    >

        <Tabs.Screen
            options={{
                tabBarLabel: "",
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="home" size={25} color={"white"} />
                )
            }}
            name="Home"
            component={Home}
        />
        <Tabs.Screen
            options={{
                tabBarLabel: "",
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="shopping-cart" color={"white"} size={25} />
                )
            }}
            name="Cart"
            component={Home}
        />


        <Tabs.Screen
            options={{
                tabBarLabel: "",
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="user" color={"white"} size={25} />
                )
            }}
            name="user"
            component={Home}
        />
    </Tabs.Navigator>
    //shopping-cart
    //user

)
const Stack = createStackNavigator()
export const HomeStack = () => {
    return (
        <Stack.Navigator
           screenOptions={{
               headerShown:false,
           }}
        >
            <Stack.Screen name="Home" component={BottomTabs} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Women" component={Women}/>
            <Stack.Screen name="Men" component={Men}/>
        </Stack.Navigator>
    )
}

