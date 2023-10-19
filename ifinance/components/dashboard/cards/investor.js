import React from "react";
import {View,Text,StyleSheet} from 'react-native'

const Investor=()=>{
    return (
        <View style={styles.card}>
        <Text>Card 2</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    card:{
        padding:20,
        margin:10,
        backgroundColor:'lightgreen',
        borderRadius:10,
    }
})

export default Investor;