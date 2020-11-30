import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack"
import Home from './../screens/Home';
import Details from './../screens/Details';
import Favorute from './../screens/Favorute';
import Profile from './../screens/Profile';
import { sizes, color } from './../screens/Constants';
import HomeMenu from "../images/8.png";
import FavMenu from "../images/9.png";
import ProfileMenu from "../images/10.png";
const Tab = createBottomTabNavigator()
export default function BottomTabNavigator() {
    return (
       <Tab.Navigator
        tabBarOptions={{
            style:{
                height:65,
                justifyContent:"center",
                paddingVertical:sizes.h4,
                backgroundColor:color.white,
                elevation:2
            }
        }}
       >
          <Tab.Screen
           options={{
               tabBarLabel:"",
               tabBarIcon:({color, size}) =>(
                 <Image source={HomeMenu}
                 style={{height:20, width:20}}
                 />
    )
           }}
           name="Home"
           component={Home}/>
         
          <Tab.Screen
           name="Favorute"
           options={{
            tabBarLabel:"",
            tabBarIcon:({color, size}) =>(
              <Image  source={FavMenu}
              style={{height:sizes.padding, width:sizes.padding}}
              />
            )
        }}
           component={Favorute}/>



          <Tab.Screen name="Profile"
          options={{
            tabBarLabel:"",
            tabBarIcon:({color, size}) =>(
              <Image source={ProfileMenu}
              style={{height:sizes.padding, width:sizes.padding}}
              />
            )
        }}
         component={Profile}/>
       </Tab.Navigator>
    )
}
const Stack=createStackNavigator()
export const HomeStackNavigator = () =>{
    return(
     <Stack.Navigator
     screenOptions={{
         headerShown:false
     }}
     >
     <Stack.Screen name="Home" component={BottomTabNavigator} />
     <Stack.Screen name="Details" component={Details} />
     </Stack.Navigator>
    )
}
