import AuthNavigator from './AuthNavigator';
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import StackNavigator from './StackNavigator';
import { render } from 'react-dom';
import { useSelector } from 'react-redux';

const MainNavigator = () => {

    const login = true;

    return(

        <NavigationContainer>

            {
                login ? 
                    <StackNavigator/>
                : 
                    <AuthNavigator/>
            }

        </NavigationContainer>
        
    )
}
 
export default MainNavigator;
