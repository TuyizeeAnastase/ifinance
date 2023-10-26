import React, { useState } from 'react';
import { View, Text, Modal, TextInput,TouchableOpacity, Button, StyleSheet } from 'react-native';

const BorrowPopup = ({ isVisible, onCancel }) => {
  const [inputValue, setInputValue] = useState('');
  const [showInfo,setShowInfo]=useState(false)

  const handleBorrow = () => {
    // setInputValue('');
    setShowInfo(true)
  };

  return (
    <Modal style={styles.modalContent} visible={isVisible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Enter the quantity:</Text>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={setInputValue}
            placeholder="Quantity"
            keyboardType="numeric"
            // editable={false} // Disabled input
          />
          {showInfo && 
          <View style={styles.info_container}>
           <View style={styles.section}>
        <Text style={styles.sectionTitle}>Request Summary</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Borrowed:</Text>
        <Text style={styles.value}>{inputValue}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Received Amount:</Text>
        <Text style={styles.value}>$678</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Fees/Commissions:</Text>
        <Text style={styles.value}>5%</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Reimbursement Amount:</Text>
        <Text style={styles.value}>$67</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Capital:</Text>
        <Text style={styles.value}>$56</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Interest Rate:</Text>
        <Text style={styles.value}>5%</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Next Payment Date:</Text>
        <Text style={styles.value}>12/20/2025</Text>
      </View>
          </View>
          }
          <View style={styles.buttonContainer}>
            <TouchableOpacity  onPress={()=>handleBorrow()} style={styles.button} >
            <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>onCancel()} style={styles.button} >
            <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent:{
    position:'absolute',
    zIndex:1000
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
      justifyContent: 'space-evenly',
      padding:16,
      width:100,
      borderRadius:5,
      marginLeft:33
    },
    button:{
      width: 100,
      height: 40,
      backgroundColor: '#3C5074',
      borderRadius: 10,
      marginLeft:5
  },
    buttonText: {
      color: 'white',
      fontSize: 18,
      textAlign: 'center',
      lineHeight: 40,
      backgroundColor:'37517E',
    },
    info_container: {
      margin: 10,
    },
    section: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    label: {
      flex: 1,
      fontSize: 16,
      fontWeight: 'bold',
    },
    value: {
      flex: 1,
      fontSize: 16,
    },
  });


export default BorrowPopup;