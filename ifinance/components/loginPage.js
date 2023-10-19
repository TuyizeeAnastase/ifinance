// Login.js
import React,{useState} from 'react';
import {  Text,View,TextInput,Button,TouchableOpacity,StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login=()=>{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const navigation = useNavigation();
    const handleLogin=()=>{
        //loginFunction
        navigation.navigate('dashboard');
    }
    return (
        <View style={styles.container}>
        <Text style={styles.title}>SignIn <Text style={styles.titleSpan}>IFinance</Text></Text>
          <TextInput style={styles.input} placeholder='Mobile Number' keyboardType='phone-pad' onChange={text=>setUsername(text)} value={username} />
          <TextInput style={styles.input} placeholder='5-digit PIN' keyboardType='numeric' secureTextEntry onChangeText={text=>setPassword(text)} />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text  style={styles.buttonText}>Login</Text>
         </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.registerLink}>Don't have an account? Register now</Text>
          </TouchableOpacity>
        </View>
      );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:50
    },
    titleSpan:{
    color:'#84A15E',
    fontFamily: 'System',
    },
    input:{
        width:'80%',
        height:40,
        borderColor:'gray',
        borderWidth:1,
        marginBottom:10,
        paddingLeft:10,
        borderRadius: 10,
    },
    registerLink:{
        marginTop:20,
        color:'blue'
    },
    loginButton: {
        width: '80%',
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
})

export default Login;