import React from 'react'
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AirMax  from '../assets/AirMax.png';


const Card = ({name, price, wishlist}) => {
    return (
    <View style={styles.card}>
        <View style={styles.wishlist}>
            <AntDesign name="heart" size={20} color={wishlist ? "orange" : "#a3a3a3"} style={{position: 'absolute', top: '50%', left:'50%', transform: [{translate: '-50%, -50%'}]}}/>
        </View>
        <Image source={AirMax} style={{width: 150, height: 100, marginTop: 30, marginBottom: 10}}/>
        <Text style={{color: 'red', fontWeight: 500, textAlign: 'center', fontSize: 17}}>{name} Bike</Text>
        <Text style={{color: 'orange', fontWeight: 700, fontSize: 17, textAlign: 'center'}}>$<Text style={{color: 'red', fontSize: 20}}>{price}</Text></Text>
    </View>
    )
}

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        backgroundColor: 'gray',
        borderRadius: 10,
        width: 'fit-content',
        paddingHorizontal:  5,
        paddingVertical: 15

    },
    
    wishlist: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'white',
        borderRadius: '50%',
        width: 35,
        height: 35,
    }
})
export default Card;