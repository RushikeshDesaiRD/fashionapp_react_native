import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { SIZES, COLORS } from "../constants"
import Entypo from "react-native-vector-icons/Entypo"//flow-parallel//heart-outlined
import MainBg from "../images/9.jpg"
import Share from "react-native-share"
export default function Detail({route, navigation}) {
    const {imageUrl, name, size, color, price} = route.params;
    
    const shareButton = async()=>{
        const shareOptions = {
            message: "Share Now"
        }
         try {
              const shareResponse = await Share.open(shareOptions);
               console.log(shareResponse);
         } catch (error) {
             console.log(error)
         }
       
        }
  
    return (
        <View style={{flex:1, backgroundColor: COLORS.grayish}}>
            <View style={{marginHorizontal:SIZES.padding, flexDirection:"row", justifyContent: "space-between", marginTop:SIZES.padding}}>
               <TouchableOpacity onPress={() =>navigation.navigate("Home")}> 
                <Entypo name="cross" size={SIZES.h1}/>
              </TouchableOpacity>
                <Entypo name="flow-parallel" size={SIZES.h1}/>
            </View>
             <Image
                   source={imageUrl}
                   resizeMode="cover"
                   style={{
                       width:"80%",
                       height:"60%",
                       marginHorizontal:"10%",
                       borderRadius:SIZES.padding,
                       marginTop:SIZES.padding,
                   }}
             />

             <View style={{marginTop:SIZES.padding, marginHorizontal:SIZES.padding, flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                <View>
                <Text style={{fontSize:SIZES.h1, color:COLORS.secondary}}>{name}</Text>
                 <Text style={{fontSize:SIZES.h4, color:"gray"}}>$ {price}.00</Text>
                </View>
                 <TouchableOpacity onPress={() => shareButton()} >
                <Entypo color={COLORS.primary} size={30} name="share"/>
             </TouchableOpacity>
             </View>


             <View style={{  marginTop:SIZES.padding, flexDirection: "row",justifyContent:"space-between", alignItems:"center",  marginHorizontal:SIZES.padding,}}>
             <View style={{
                  flexDirection: "row",
                  width:140,
                  justifyContent:"center",
                  alignItems:"center",
                  elevation:8,
                  backgroundColor:COLORS.white,
                  height:40,
                  paddingHorizontal:SIZES.padding,
                  borderRadius:SIZES.h3
                  }}>
                   <Text>{color}</Text>    
                
                 
             </View>
            
             <TouchableOpacity style={{  paddingVertical:SIZES.h3,borderRadius:SIZES.h3 ,width:140, elevation:8,  height:40,backgroundColor:COLORS.secondary, justifyContent:"center", alignItems:"center"}}>
                 <Text style={{color:"white", fontSize:SIZES.padding}}>BUY NOW</Text>
             </TouchableOpacity>
             </View>
        </View>
    )
}
