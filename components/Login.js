import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';

import Colors from '../constants/Colors';
import React from 'react';

const Login = () => {

    return (
      
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={50}
            style={styles.screen}
        >
            
          <View style={styles.container}>
            <Text style={styles.title}>Pro Dental</Text>
            <Text style={styles.subtitle}>Log In</Text>
            <View>
              <TextInput style={styles.input} placeholder="DNI"/>
              <TextInput style={styles.input} placeholder="Pass"/>
            </View>
            <View style={styles.footer}>
              <View style={styles.button}>
                <Button title="ACCEDER" color={Colors.primary} />
              </View>
              <View style={styles.button}>
                <Button title="REGISTRARSE" color={Colors.accent} /> 
              </View>
            </View>
          </View>

      </KeyboardAvoidingView>

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

  export default Login;