import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../loginPage';
import WelcomePage from '../welcomePage';
import HomeDashboard from '../dashboard/home';

const Stack=createStackNavigator();

const StackNavigator=()=>{
    return(
     <Stack.Navigator initialRouteName="Welcome">
       <Stack.Screen name="Welcome" component={WelcomePage}/>
       <Stack.Screen name='login' options={{
        headerTitleStyle: {
          backgroundColor: '#7CB041',
          width:'550%',
          height:'50px',
          textAlign:'center',
          fontSize: 24,
          color: 'white',
          borderRadius: 10,
          padding: 5,
        },
      }} component={Login}/>
      <Stack.Screen name='dashboard' options={{
        headerTitleStyle: {
          backgroundColor: '#7CB041',
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