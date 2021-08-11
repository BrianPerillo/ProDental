import {Colors} from '../constants/Colors'
import Credential from '../screens/Credential'
import Index from '../screens/Index'
import { Platform } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// import { Platform } from 'react-native' 

// screens

const Stack = createStackNavigator()

const AuthNavigator = () => {

    return(

        <Stack.Navigator>

            <Stack.Screen name={"Iniciar Sesión"} component={Index} />

        </Stack.Navigator>

    )
}
 
export default AuthNavigator;

