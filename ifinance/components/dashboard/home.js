import React,{useState} from "react";
import {View,Text,FlatList,ScrollView,StyleSheet,Button,TouchableOpacity} from 'react-native'
import Loan from "./cards/loan";
import Investor from "./cards/investor";

const data=[
    {
        id:1,
        title:'loan 1',
        amount:145
    },
    {
        id:2,
        title:'loan 2',
        amount:245
    },
    {
        id:3,
        title:'loan 3',
        amount:345
    },
    {
        id:4,
        title:'loan 4',
        amount:445
    },
    {
        id:5,
        title:'loan 5',
        amount:545
    },{
        id:6,
        title:'loan 6',
        amount:645
    },
    {
        id:7,
        title:'loan 7',
        amount:745
    },
    {
        id:8,
        title:'loan 8',
        amount:845
    },
]


const HomeDashboard=()=>{
    return(
        <View style={styles.container}>
      {/* Cards */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text>Card 1</Text>
        </View>
        <View style={styles.card}>
          <Text>Card 2</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Borrow</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Invest</Text>
      </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollview} horizontal={true}>
        <View>
          <View style={styles.headerRow}>
            <Text style={styles.headerCell}>Column 1</Text>
            <Text style={styles.headerCell}>Column 2</Text>
            <Text style={styles.headerCell}>Column 3</Text>
          </View>
          <ScrollView>
            <View>
              <View style={styles.row}>
                <Text style={styles.cell}>Row 1, Cell 1</Text>
                <Text style={styles.cell}>Row 1, Cell 2</Text>
                <Text style={styles.cell}>Row 1, Cell 3</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>Row 2, Cell 1</Text>
                <Text style={styles.cell}>Row 2, Cell 2</Text>
                <Text style={styles.cell}>Row 2, Cell 3</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>Row 2, Cell 1</Text>
                <Text style={styles.cell}>Row 2, Cell 2</Text>
                <Text style={styles.cell}>Row 2, Cell 3</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>Row 2, Cell 1</Text>
                <Text style={styles.cell}>Row 2, Cell 2</Text>
                <Text style={styles.cell}>Row 2, Cell 3</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>Row 2, Cell 1</Text>
                <Text style={styles.cell}>Row 2, Cell 2</Text>
                <Text style={styles.cell}>Row 2, Cell 3</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>Row 2, Cell 1</Text>
                <Text style={styles.cell}>Row 2, Cell 2</Text>
                <Text style={styles.cell}>Row 2, Cell 3</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>Row 2, Cell 1</Text>
                <Text style={styles.cell}>Row 2, Cell 2</Text>
                <Text style={styles.cell}>Row 2, Cell 3</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>Row 2, Cell 1</Text>
                <Text style={styles.cell}>Row 2, Cell 2</Text>
                <Text style={styles.cell}>Row 2, Cell 3</Text>
              </View>
              <View style={styles.row}>
              <Text style={styles.cell}>Row 2, Cell 1</Text>
              <Text style={styles.cell}>Row 2, Cell 2</Text>
              <Text style={styles.cell}>Row 2, Cell 3</Text>
            </View>
            <View style={styles.row}>
            <Text style={styles.cell}>Row 2, Cell 1</Text>
            <Text style={styles.cell}>Row 2, Cell 2</Text>
            <Text style={styles.cell}>Row 2, Cell 3</Text>
          </View>
          <View style={styles.row}>
              <Text style={styles.cell}>Row 2, Cell 1</Text>
              <Text style={styles.cell}>Row 2, Cell 2</Text>
              <Text style={styles.cell}>Row 2, Cell 3</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cell}>Row 2, Cell 1</Text>
              <Text style={styles.cell}>Row 2, Cell 2</Text>
              <Text style={styles.cell}>Row 2, Cell 3</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cell}>Row 2, Cell 1</Text>
              <Text style={styles.cell}>Row 2, Cell 2</Text>
              <Text style={styles.cell}>Row 2, Cell 3</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cell}>Row 2, Cell 1</Text>
              <Text style={styles.cell}>Row 2, Cell 2</Text>
              <Text style={styles.cell}>Row 2, Cell 3</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cell}>Row 2, Cell 1</Text>
              <Text style={styles.cell}>Row 2, Cell 2</Text>
              <Text style={styles.cell}>Row 2, Cell 3</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cell}>Row 2, Cell 1</Text>
              <Text style={styles.cell}>Row 2, Cell 2</Text>
              <Text style={styles.cell}>Row 2, Cell 3</Text>
            </View>
              {/* Add more rows as needed */}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color:'#7CB041',
    },
    cardContainer: {
      flexDirection: 'row',
      width:'85%',
    },
    card: {
      width: 150,
      height: 100,
      backgroundColor: '#fff',
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:20,
      borderWidth: 1,
      borderColor: "#7CB041",
      borderRadius: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      padding: 16,
      backgroundColor: '#f0f0f0',
      width:320,
      borderRadius:5
    },
    button:{
        width: 100,
        height: 40,
        backgroundColor: '#7CB041',
        borderRadius: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      lineHeight: 40,
    },
    scrollview:{
      width:320,
      marginTop:10,
      padding:4
    },
    headerRow: {
      flexDirection: 'row',
      backgroundColor: '#f0f0f0',
    },
    headerCell: {
      flex: 1,
      padding: 10,
      fontWeight: 'bold',
    },
    row: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    cell: {
      flex: 1,
      padding: 10,
    },
  });

export default HomeDashboard