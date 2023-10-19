//WelcomePage
import React,{useEffect} from "react";
import {View,Text,Image, StyleSheet} from 'react-native'
import { useNavigation } from "@react-navigation/native";

const WelcomePage=()=>{
    const navigation=useNavigation()
    useEffect(()=>{
        const timer=setTimeout(()=>{
            navigation.navigate('login')
        },3000);
        return ()=>clearTimeout(timer);
    },[]);

    return (
        <View style={styles.container}>
        <Image source={require('.././assets/logo.jpeg')} style={styles.logo} />
      <Text style={styles.content}>
        Borrow when you  & lend when you have.
      </Text>
      <Text style={styles.title}>Proudly Rwandan.</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
    },
    logo: {
      width: 350,
      height: 150,
      marginBottom: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop:200,
      color:'#84A15E'
    },
    content: {
      fontSize: 16,
      textAlign: 'center',
      paddingHorizontal: 20,
      color:'#fff'
    },
  });

export default WelcomePage;