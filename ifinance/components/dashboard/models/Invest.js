import React, { useState } from 'react';
import { View, Text, Modal, TextInput,TouchableOpacity, Button, StyleSheet,Linking } from 'react-native';

const InvestPopup=({isVisible,onCancel})=>{
    const [investAmount, setInvestAmount] = useState('');
    const code=`*182*7*1*34567*${investAmount}#`
    const handleInvest = () => {
        // Handle the investment logic here
        // For example, you can send the investAmount to a server.
        // console.log('Investing:', investAmount);
        // onCancel();
        Linking.openURL(`tel:${code}`)
      }
    return(
        <Modal style={styles.modal_Content}  visible={isVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Enter Investment Amount:</Text>
            <TextInput
              style={styles.input}
              placeholder="Amount"
              value={investAmount}
              onChangeText={(text) => setInvestAmount(text)}
            />
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleInvest}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    modal_Content:{
        position:'absolute',
        zIndex:1
      },
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width:300
        },
        modalContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        modalContent: {
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
            width:300
          },
          title: {
            fontSize: 18,
            marginBottom: 10,
          },
          input: {
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            marginBottom: 10,
            borderRadius:5
          },
          buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding:16,
            width:100,
            borderRadius:5,
          },
          button:{
            width: 100,
            height: 40,
            backgroundColor: '#3C5074',
            borderRadius: 10,
            marginLeft:5
        },
        buttonText:{
            color:'white',
            fontSize:18,
            textAlign:'center',
            lineHeight:40,
            backgroundColor:'37517E'
        }
})

export default InvestPopup;