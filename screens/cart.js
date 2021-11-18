import React from 'react'
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container from '../components/Container'
import Tab from '../components/BottomTab'
import CartItem from '../components/CartItem'


export default function Cart({navigation}){
    return (
        <Container>
            <View style={{marginTop: 30, marginBottom: 20, flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <View style={{marginHorizontal: 'auto'}}>
                    <Text style={{fontWeight: 700, fontSize: 20, color: 'red)'}}>Cart list</Text>
                    <Text style={{fontWeight: 600, fontSize: 15, color: 'red', textAlign: 'center'}}>(3 items)</Text>
                </View>
            </View>

            <View>
                <CartItem name={"AirMax"} type={"Nike originals"} price={"330.00"}/>
                <CartItem name={"Yeezy Boost"} type={"Adidas"} price={"540.69"}/>
                <CartItem name={"Balenciaga 1"} type={"Balenciaga"} price={"660.00"}/>
            </View>

            <View style={{display:'flex', alignItems:"left", backgroundColor:'gray', borderRadius:8, marginTop:30, padding:20}} >
                <Text  style={{paddingLeft:1,  fontSize:18,color: 'red'}} >Sub-Total:   <Text   style={{color: 'black', fontWeight: 500}} >GHS 550.00</Text>   </Text>
                <Text  style={{fontSize: 18, color: 'red'}} >Shipping Fee:  <Text   style={{color: 'black', fontWeight: 500}} >GHS 50.00</Text>   </Text>
                <Text  style={{fontSize: 18, color: 'red'}} >  <Text   style={{color: 'black', fontWeight: 500}} ></Text>   </Text>
               
                <Text  style={{fontSize:18, fontWeight:900, color: 'black'}} >Total:  <Text   style={{color: 'black', fontWeight: 500}} >GHS 600.00</Text>   </Text>

            </View>

            <TouchableOpacity style={{paddingVertical: 15, paddingHorizontal: 100, backgroundColor: 'orange', borderRadius: 5, width: 'min-content', marginHorizontal: 'auto' , marginTop: 90}}>
                <Text style={{fontSize: 18,fontWeight: 700, textAlign: 'center', color: 'white', whiteSpace: 'nowrap'}}>Continue to Checkout</Text>
            </TouchableOpacity>
            <Tab homeActive={false} />
        </Container>
    )
}
