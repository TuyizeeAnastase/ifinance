import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Loan=()=>{
    return (
        <View style={styles.card}>
          <Text>Card 1</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    card:{
        padding:20,
        margin:10,
        backgroundColor:'lightblue',
        borderRadius:10
    }
})

export default Loan;