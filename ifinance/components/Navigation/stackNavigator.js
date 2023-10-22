import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../loginPage';
import WelcomePage from '../welcomePage';
import HomeDashboard from '../dashboard/home';
import Registration from '../registrationPage';

const Stack=createStackNavigator();

const StackNavigator=()=>{
    return(
     <Stack.Navigator initialRouteName="Welcome">
       <Stack.Screen name="Welcome"
       options={{
        headerTitleStyle:{
          color:'#000000',
          backgroundColor:'#000000',
          width:'550%',
          height:'50px',
        }
       }}
        component={WelcomePage}/>
       <Stack.Screen name='login' options={{
        headerTitleStyle: {
          width:'550%',
          height:'50px',
          textAlign:'center',
          fontSize: 24,
          color: 'white',
          borderRadius: 10,
          padding: 5,
        },
      }} component={Login}/>
      <Stack.Screen name='registration'
      options={{
        headerTitleStyle: {
          width:'550%',
          height:'50px',
          textAlign:'center',
          fontSize: 24,
          color: 'white',
          borderRadius: 10,
          padding: 5,
        },
      }}
       component={Registration}/>
      <Stack.Screen name='dashboard' options={{
        headerTitleStyle: {
          width:'290%',
          height:'50px',
          textAlign:'center',
          fontSize: 24,
          color: 'white',
          borderRadius: 10,
          padding: 5,
        },
      }} component={HomeDashboard}/>
     </Stack.Navigator>   
    )
}

export default StackNavigator;