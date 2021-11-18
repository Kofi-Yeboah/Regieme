import React from 'react'
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import AirMax from '../assets/AirMax.png'


export default function({name, price, type}) {
    return (
        <View style={{flexDirection: 'row', gap: 10, marginVertical: 20}}>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray', width: 80, height: 80, borderRadius: 10}}>
                <Image source={AirMax} style={{width: '80%', height: '50%'}}/>
            </View>

            <View style={{ flexGrow: 1}}>
                <View style={{flexDirection: 'row', flexGrow: 1, justifyContent: 'space-between',}}>
                    <Text style={{fontWeight: 500, fontSize: 17, color: 'orange'}}>{name} Bike</Text>
                    <View style={{justifyContent: 'center', alignItems: 'center', width: 30, height: 30, borderRadius: '50%', border: '1px solid pink'}}>
                    <FontAwesome5 name="trash-alt" size={18} color="orange" />
                    </View>
                </View>

                <View>
                    <Text style={{fontSize: 12, color: 'red'}}>{type} Bike</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', flexGrow: 1}}>
                    <Text style={{fontWeight: 700, color: 'orange', fontSize: 15}}>$ <Text style={{fontSize: 20, color: 'orange'}}>{price}</Text></Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{justifyContent: 'center', alignItems: 'center', width: 30, height: 30, borderRadius: '50%', backgroundColor: 'orange'}}>
                        <Feather name="minus" size={18} color="white" />
                        </View>
                        <Text style={{paddingHorizontal: 10, fontSize: 20, fontWeight: 600}}>1</Text>
                        <View style={{justifyContent: 'center', alignItems: 'center', width: 30, height: 30, borderRadius: '50%', backgroundColor: 'orange'}}>
                        <Feather name="plus" size={18} color="white" />
                        </View>
                    </View>
                </View>

            </View>
        </View>
    )
}