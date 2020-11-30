import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { COLORS, SIZES } from '../constants'
import Entypo from "react-native-vector-icons/Entypo";//shopping-cart
import Feather from "react-native-vector-icons/Feather";//search//arrow-left
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
const DATA=[ 
    {
        id:1,
        name:"Peace Skull Shirt",
        price:23.50,
        color:"Black",
        imageUrl:require("../images/ijiljljk.jpg"),
        size:"L"
    },
    {
        id:2,
        name:"Beach Sweater",
        price:21.50,
        color:"Purple",
        imageUrl:require("../images/3.jpg"),
        size:"M"
    },
    {
        id:3,
        name:"Ewya Hoodie",
        price:12.90,
        color:"Pink",
        imageUrl:require("../images/9.jpg"),
        size:"M"
    },
    {
        id:1,
        name:"T Shirt",
        price:23.50,
        color:"Yellow",
        imageUrl:require("../images/jkjjkjkl.jpg"),
        size:"L"
    }
]
const TopHeader = ({cartCount, navigation})=>{
    return (
        <View
        style={{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            marginTop:SIZES.padding,
            paddingHorizontal:SIZES.padding,
        }}
        >
            <TouchableOpacity onPress={()=>navigation.navigate("Home")}><Feather name="arrow-left" size={25} color={COLORS.secondary}/></TouchableOpacity>
            <Text style={{fontSize:SIZES.h3,fontWeight:"bold", color:COLORS.secondary}}>WOMEN</Text>
           <TouchableOpacity>
           <Entypo
             name="shopping-cart"
              size={25} 
              style={{
                  padding:SIZES.h5,
                  borderRadius:SIZES.h2,
                  backgroundColor:"white"
              }}
              color={COLORS.secondary}/>
              <Text style={{
                  position:"absolute",
                   top:-3, right:0,
                    fontWeight:"bold",
                   color:COLORS.secondary,
                   fontSize:SIZES.h4
                     }}>{cartCount}</Text>
           </TouchableOpacity>
        </View>
    )
}

export default function Women({navigation}) {

    const [data, SETDATA]=React.useState(DATA);
    const [cartCount, setCartCount]=React.useState(0)
    const renderItem = ({item}) =>{
        
       
        return (
            <TouchableOpacity 
             onPress={()=>navigation.navigate("Detail", {price:item.price,imageUrl:item.imageUrl, name:item.name, size:item.size, color:item.color})}
            style={{
                flexDirection:"row",
                padding:SIZES.radius,
                borderRadius:SIZES.radius,
                justifyContent:"space-between",
                marginTop:SIZES.radius,
            }}
            >
                <Image
                 source={item.imageUrl}
                resizeMode="cover"
                style={{
                    borderRadius:SIZES.radius,
                  //  borderBottomLeftRadius:SIZES.radius,
                    height:120,
                    width:"35%",
                }}
                />
                <View
                 style={{
                     flexDirection:"column",
                    width:"60%",
                    marginLeft:"5%",
                    justifyContent:"center",
                    
                 }}
                >
                    <Text style={{fontSize:SIZES.h3, fontWeight:"bold"}}>{item.name}</Text>
                    <Text style={{ color:"gray", }}>{item.size} 
                    <Text style={{fontSize:SIZES.h3, fontWeight:"bold"}}>.</Text> 
                    {item.color}</Text>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems:"center", marginTop:SIZES.radius}}>
                        <Text style={{fontSize:SIZES.h4, fontWeight:"bold"}}>${item.price}</Text>
                        <TouchableOpacity
                        
                         style={{
                             
                             flexDirection: "row", 
                             width:70,
                             paddingVertical:SIZES.h6,
                             paddingHorizontal:SIZES.radius,
                             backgroundColor:COLORS.secondary,
                            justifyContent: "space-between", 
                            borderRadius:SIZES.h6
                            }}>
                        <Text style={{color:"white", fontWeight:"bold"}}>ADD</Text>    
                        <Entypo
                            name="shopping-cart"
                            size={20} 
                            color="white"
                            />
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View 
        style={{
            flex:1,
            background:COLORS.grayish
        }}
        >
           <TopHeader navigation={navigation} cartCount={cartCount}/>
           <FlatList
           data={data}
           renderItem={renderItem}
           keyExtractor={item => item.id}
          
           style={{

           }}
           />
        </View>
    )
}
