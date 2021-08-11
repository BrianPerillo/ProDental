import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

import Colors from '../constants/Colors';
import EmailForm from '../components/SendEmail';
import Login from '../components/Login';

const Index = () => {

    const [getPass, setGetPass] = useState(false)

    return (
      
        <View>
          {
            getPass ?
              <Login/>
            :
              <EmailForm/>
          }
        </View>
      
    )
  }
  
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontFamily: 'open-sans-bold',
      marginBottom: 18,
      alignSelf:'center'
    },
    subtitle: {
        alignSelf:'center',
        marginBottom:30,
        marginTop: 20,
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    container: {
      width: '80%',
      maxWidth: 400,
      height: '50%',
      maxHeight: 400,
      padding: 12,
    },
    footer: {
      marginTop: 24,
    },
    button: {
      marginBottom: 8,
    },
  })

  export default Index;