import React,{useState} from "react";
import {View,Text,FlatList,ScrollView,StyleSheet,Button,TouchableOpacity,TextInput} from 'react-native'
import Loan from "./cards/loan";
import Investor from "./cards/investor";
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-modal';
import BorrowPopup from "./models/Borrow";
import InvestPopup from "./models/Invest";

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
  const [isIvestVisible, setModalVisible] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [borrowedValue, setBorrowedValue] = useState('');

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalVisible(false)
  };

  
  const handleBorrow = (value) => {
    setBorrowedValue(value);
    setPopupVisible(false);
  };

  const handleCancel = () => {
    setPopupVisible(false);
    setModalVisible(false)
  };

    return(
      <View>
        <View style={styles.container}>
        <View style={styles.userContainer}>
        <View style={styles.row}>
        <Icon name="dashboard" size={50} color="#3C5074" style={styles.icon} />
        <View style={styles.userInfo}>
          <Text style={styles.text1}>Anastase</Text>
          <Text style={styles.text2}>0787499115</Text>
        </View>
      </View>
        </View>
      {/* Cards */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
        <Text style={styles.titleText}>Current Loans</Text>
        <Text style={styles.amountText}>$1,000,000</Text>
        <View style={styles.iconContainer}>
        <Icon name="money" size={30} color="#3C5074" />
        </View>
        </View>
        <View style={styles.card}>
        <Text style={styles.titleText}>Current Investors</Text>
        <Text style={styles.amountText}>1,000</Text>
        <View style={styles.iconContainer}>
        <Icon name="user" size={30} color="#3C5074" />
        </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => setPopupVisible(true)} style={styles.button}>
      <Text style={styles.buttonText}>Borrow</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={openModal}>
      <Text style={styles.buttonText}>Invest</Text>
      </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollview}  horizontal={true}>
        <View style={styles.table}>
          <View style={styles.headerRow}>
            <Text style={styles.headerCell}>Loans</Text>
            <Text style={styles.headerCell}>Amount</Text>
          </View>
          <ScrollView>
            <View>
              <View style={styles.row}>
                <Text style={styles.cell}>loan 1</Text>
                <Text style={styles.cell}>344 RWf</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>loan 1</Text>
                <Text style={styles.cell}>344 RWf</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>loan 1</Text>
                <Text style={styles.cell}>344 RWf</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>loan 1</Text>
                <Text style={styles.cell}>344 RWf</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>loan 1</Text>
                <Text style={styles.cell}>344 RWf</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>loan 1</Text>
                <Text style={styles.cell}>344 RWf</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>loan 1</Text>
                <Text style={styles.cell}>344 RWf</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>loan 1</Text>
                <Text style={styles.cell}>344 RWf</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.cell}>loan 1</Text>
                <Text style={styles.cell}>344 RWf</Text>
              </View>
            </View>
            <View style={styles.row}>
                <Text style={styles.cell}>loan 1</Text>
                <Text style={styles.cell}>344 RWf</Text>
              </View>
          </ScrollView>
        </View>
      </ScrollView>
      
    </View>
    <View style={styles.centeredPopup}>
    <BorrowPopup
      isVisible={isPopupVisible}
      onCancel={handleCancel}
    />
    <InvestPopup 
    isVisible={isIvestVisible}
    onCancel={handleCancel}
     />
    </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    userContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      width:100,
      padding:4
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      marginRight: 10, // Add spacing between icon and text
    },
    text1: {
      fontSize: 20,
      fontWeight: 'bold',
      color:'#7CB041',
      textTransform: 'uppercase', 
    },
    text2: {
      fontSize: 16,  
    },
    userInfo: {
      flexDirection: 'column',
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      color:'#7CB041'
    },
    centeredPopup: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color:'white',
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
      borderColor: "#3C5074",
      borderRadius: 20,
      color:'white'
    },
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    amountText: {
      fontSize: 16,
      marginTop: 5,
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      padding: 16,
      backgroundColor: '#f0f0f0',
      width:330,
      borderRadius:5
    },
    button:{
        width: 100,
        height: 40,
        backgroundColor: '#3C5074',
        borderRadius: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      textAlign: 'center',
      lineHeight: 40,
      marginLeft:4
    },
    scrollview: {
      width: '100%',
      margin: 50,
    },
    table: {
      width: 325, 
      alignSelf: 'center',
      borderWidth: 1,
      borderColor: '#7CB041',
      marginLeft:30,
      borderRadius:5
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#3C5074', 
      padding: 10,
    },
    headerCell: {
      flex: 1,
      fontSize: 18,
      color: '#fff',
      textAlign: 'center', 
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#7CB041',
      padding: 5
    },
    cell: {
      padding: 13,
      flex: 1,
      textAlign: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
    },
    modalText: {
      fontSize: 18,
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      marginBottom: 10,
    },
    modalButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      margin: 5,
    },
    
  });

export default HomeDashboard