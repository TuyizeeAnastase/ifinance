import React,{useState} from "react";
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Registration=()=>{

  const [surname, setSurname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [dob, setDOB] = useState('');
  const [idNo, setIdNo] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    // Implement your registration logic here, including validation checks.
    if (idNo.length !== 16) {
      // Handle ID No validation error
    }
    if (!/^0\d{9}$/.test(mobileNo)) {
      // Handle mobile number validation error
    }
  };

    return (
         <View style={styles.container}>
         <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.titelSpan}>Surname</Text>
          <TextInput style={styles.input} onChangeText={text=>setSurname(text)} value={surname}/>
          <Text style={styles.titelSpan}>Firstname</Text>
          <TextInput style={styles.input} onChangeText={text=>setFirstname(text)} value={firstname}/>
          <Text style={styles.titelSpan}>Date of Birth</Text>
          <TextInput  style={styles.input} onChangeText={text=>setDOB(text)} value={dob} />
          <Text style={styles.titelSpan}>ID No</Text>
         <TextInput style={styles.input} onChangeText={text => setIdNo(text)} value={idNo}/>
          <Text style={styles.titelSpan}>Mobile No</Text>
          <TextInput style={styles.input} onChangeText={text=>setMobileNo(text)} value={mobileNo} />
          <Text style={styles.titelSpan}>Email Address</Text>
          <TextInput style={styles.input} onChangeText={text=>setEmail(text)} value={email} />
          <Text style={styles.titelSpan}>Current Address</Text>
          <TextInput style={styles.input} onChangeText={text=>setAddress(text)} value={address} />
          <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
          <Text  style={styles.buttonText}>Register</Text>
         </TouchableOpacity>
         <TouchableOpacity>
         <Text style={styles.registerLink} onPress={() => navigation.navigate('login')}>Already registered? "Login here"</Text>
         </TouchableOpacity>
         </View> 
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      borderRadius: 10,
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color:'#7CB041',
        borderBottomWidth: 2,
        marginBottom:50
    },
    titelSpan:{
        color:'#3C5074',
        fontFamily: 'System',
        fontSize:20
    },
    loginButton: {
        width: '100%',
        height: 40,
        backgroundColor: '#3C5074',
        borderRadius: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 40,
      },
      registerLink:{
        marginTop:20,
        color:'blue',
        fontSize:15
    },
  });


  export default Registration