import React,{useState} from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { COLORS, SIZES } from './../constants';
import MainBg from "../images/41.jpg";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";//search
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
//user-female
//import Entypo from "react-native-vector-icons/Entypo";//
//chevron-right
const DATA=[
    {
        name:"Jacket",
        imageUrl:require("../images/9.jpg"),
        price:23
    },
    {
        name:"Jeans Shirt",
        imageUrl:require("../images/12.jpg"),
        price:54
    },
    {
        name:"Candy Tshirt",
        imageUrl:require("../images/14.jpg"),
        price:35
    },
    {
        name:"Rymond",
        imageUrl:require("../images/9.jpg"),
        price:36
    }
]
export default function Home(props) {
   const TopHaeder = ()=>{
       return (
           <ImageBackground
           source={MainBg}
           style={{ 
               height: 250,
              
           }}
           imageStyle={{ borderBottomLeftRadius: SIZES.h1,
                      borderBottomRightRadius: SIZES.h1 }}
           >
                <View style={{
                      flexDirection:"row",
                      justifyContent:"space-between",
                      alignItems:"center",
                      marginHorizontal:SIZES.padding,
                      marginTop:SIZES.padding,
                      backgroundColor:COLORS.tansparent,
                      padding:SIZES.radius,
                      borderRadius:SIZES.radius,
                }}>
                    <Feather  name="search" color={COLORS.secondary} size={20}/>
                    <Text style={{width:"90%", color:COLORS.secondary}}>Search Here</Text>
                </View>
           </ImageBackground>
       )
   }
   const BottomContent = () =>{
       return (
         <View 
          style={{ 
              marginHorizontal:SIZES.padding,
              justifyContent:"space-between",
              alignItems:"center",
              flexDirection:"row",
              paddingVertical:SIZES.padding,

          }}
          >
              <Text style={{fontWeight:"bold", fontSize:SIZES.h3}}>Trending</Text>
             <TouchableOpacity >
                 <Text style={{ color:COLORS.secondary, textDecorationLine:"underline"}}>Show All</Text>
             </TouchableOpacity>
         </View>
       )
   }
   const renderProduct=({item})=>(
         <TouchableOpacity style={{
             marginRight:SIZES.radius,
             width:120,
             height:170,
             backgroundColor:"white",
             elevation:6,
             borderRadius:SIZES.radius,
         }}>
            <Image
             source={item.imageUrl}
             style={{
                 height:120,
                 width:120,
                 borderTopLeftRadius:SIZES.radius,
                 borderTopRightRadius:SIZES.radius,
             }}
              resizeMode="cover"
            />

            <View
            style={{
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
                paddingHorizontal:SIZES.radius,
                paddingVertical:SIZES.radius,
            }}
            >
              <Text style={{color:COLORS.secondary}}>{item.name}</Text>  
              <Text style={{fontSize:SIZES.h4}}>${item.price}</Text>
            </View>
         </TouchableOpacity>
    )


    const CategoriesOfFashion = () =>(
       <>
        <TouchableOpacity onPress={() => props.navigation.navigate("Women")} style={{
            marginHorizontal:SIZES.padding,
            elevation:11,
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            backgroundColor:"white",
            marginBottom:10,
            paddingVertical:SIZES.h4,
            paddingHorizontal:SIZES.radius
        }}>
           <View style={{flexDirection:"row",justifyContent:"space-between", width:"55%"}}>
              <SimpleLineIcons  name="user-female" color={COLORS.secondary} size={20}/>
              <Text>Women</Text>
              <Text style={{color:"gray"}}>(230 Items)</Text>
           </View>
           <Entypo  name="chevron-right" color={COLORS.secondary} size={20}/>           

        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("Men")} style={{
            marginHorizontal:SIZES.padding,
            elevation:11,
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            backgroundColor:"white",
            marginBottom:30,
            paddingVertical:SIZES.h4,
            paddingHorizontal:SIZES.radius
        }}>
           <View style={{flexDirection:"row",justifyContent:"space-between", width:"55%"}}>
              <SimpleLineIcons  name="user" color={COLORS.secondary} size={20}/>
              <Text>Men</Text>
              <Text style={{color:"gray"}}>(20 Items)</Text>
           </View>
           <Entypo  name="chevron-right" color={COLORS.secondary} size={20}/>         

        </TouchableOpacity>
       </>
    )
    return (
       
        <View style={{ flex: 1, backgroundColor:COLORS.grayish }}>
           <TopHaeder/>
           <BottomContent/>
           <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={renderProduct}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
                marginHorizontal:SIZES.padding
            }}
           />

           <CategoriesOfFashion/>
        </View>
    )
}
