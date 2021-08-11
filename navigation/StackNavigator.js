import {Colors} from '../constants/Colors'
import Credential from '../screens/Credential'
import { Platform } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// import { Platform } from 'react-native' 

// screens

const Stack = createStackNavigator()

const StackNavigator = () => {

    return(
    
        <Stack.Navigator>

                <Stack.Screen name={"Mi Credencial"} component={Credential} />

        </Stack.Navigator>

    )

}
 
export default StackNavigator;

