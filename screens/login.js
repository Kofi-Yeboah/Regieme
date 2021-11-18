import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import shoe from "../assets/shoe.png";

export default function Login({navigation}) {
  return (

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>

      <Image source={shoe} style={{ width: 170, height: 170, borderRadius: 15, marginBottom: 60 }} />

      <Text style={{fontSize: 20, fontWeight: 550, color: 'black'}}>Welcome to</Text>
      <Text style={{fontSize: 24, fontWeight: 750}}>  ShoeHub</Text>

      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 70, marginTop: 20,  backgroundColor: '#e3e3e3', borderRadius: 5 }} 
      onPress={()=> navigation.navigate('Home')}>
        
        <AntDesign name="google" size={24} color="red" />
        <Text style={{fontSize: 15, fontWeight: 500, paddingLeft: 10}}>Login with Gmail</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 70, marginVertical: 10, backgroundColor: 'black', borderRadius: 5 }}
      onPress={()=> navigation.navigate('Cart')}>
        <MaterialCommunityIcons name="apple" size={24} color="white" />
          <Text style={{fontSize: 15, color: 'white', fontWeight: 500, paddingLeft: 10}}>Login with Apple</Text>
      </TouchableOpacity>

      <Text style={{color: 'gray', fontWeight: 500}}>Don't have an account? <Text style={{color: 'red', fontWeight: 700}}>Sign up</Text></Text>

    </View>
  );
}
