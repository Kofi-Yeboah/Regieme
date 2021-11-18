import React from 'react'
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { Entypo, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export  default  function({homeActive}){
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#e6e6e6", position: 'fixed', bottom: 0, left: 0, right: 0, paddingVertical: 20, paddingHorizontal: '15%'}}>
            <Entypo name="home" size={24} color={homeActive ? 'blue' : 'gray'} />
            <View style={{position: 'absolute', justifyContent: 'center', alignItems: 'center', top: '-50%', left: '50%', transform: [{translate: '-50%'}], backgroundColor: 'black', borderRadius: '50%', width: 65, height: 65}}>
                {/* <MaterialCommunityIcons name="microphone-outline" size={24} color="white"/> */}
            </View>
            {/* <TouchableOpacity onPress={()=> navigation.navigate('Cart')}><SimpleLineIcons name="handbag" size={24} color="black"  /></TouchableOpacity> */}
            <SimpleLineIcons name="handbag" size={24} color="black"  />

        </View>
    )
}