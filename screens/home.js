import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card'
import Tab from '../components/BottomTab'
import Container from '../components/Container'

export default function Home(){
    return (
        <Container>
            <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 10}}>
                <Ionicons name="menu-outline" size={24} color="black" />
                <Ionicons name="shopping-bag" size={24} color="black" style={{marginHorizontal: 'auto'}}/>
                <Ionicons name="search-outline" size={24} color="black" style={{marginHorizontal: 5}}/>
            </View>

            <Text style={{marginVertical: 10, fontSize: 18, fontWeight: 500, color: 'black'}}>Quality and Affordable Sneakers for everyone</Text>
            <Text style={{fontSize: 18, fontWeight: 700, color: 'Orange'}}>Categories</Text>

            {/* <ScrollView horizontal={true}> */}
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text style={[styles.categoryItem, styles.categoryItemActive]}>All</Text>
                    <Text style={styles.categoryItem}>Nike</Text>
                    <Text style={styles.categoryItem}>Balenciaga</Text>
                    <Text style={styles.categoryItem}>Adidas</Text>
                    <Text style={styles.categoryItem}>Vans</Text>
                </View>
            {/* </ScrollView> */}

            <View style={{marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', rowGap: 20, columnGap: 20, width: '92%', marginHorizontal: 'auto'}}> {/* width is hacky*/}
                <Card name={"AirMax"} price={"330.00"} wishlist={true}/>
                <Card name={"Yeezy Boost"} price={"540.69"} wishlist={false} />
                <Card name={"Balenciaga 1"} price={"660.00"} wishlist={false}/>
                <Card name={"AirForce"} price={"270.00"} wishlist={false}/>
                <Card name={"Air"} price={"800.00"} wishlist={false}/>
                <Card name={"Nike Mag"} price={"750.00"} wishlist={false}/>
                <Card name={"Vans"} price={"260.00"} wishlist={false}/>
                <Card name={"AllStars"} price={"200.00"} wishlist={false}/>
            </View>

            {/* <Tab leftIcon={<Foundation name="home" size={24} color="#f17827" />} rightIcon={<SimpleLineIcons name="handbag" size={24} color="rgba(0,0,0,.6)" />}/> */}
            <Tab homeActive={true}/>
        </Container>
    )
}



const styles = StyleSheet.create({
    categoryItem: {
        color: 'red',
        backgroundColor: 'white',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: '1rem',
        marginHorizontal: 7,
        fontWeight: 500
    },
    categoryItemActive: {
        color: 'blue',
    },
})
