import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';

import Colors from '../constants/Colors';

const EmailForm = () => {

    const [mailSent, setMailSent] = useState(false)

    const handleOnPress = () => {
        
        setMailSent(true);

    }

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
              <TextInput style={styles.input} placeholder="Email"/>
            </View>
            <View style={styles.footer}>
              <View style={styles.button}>
                <Button title="Solicitar Código" color={Colors.primary} onPress={handleOnPress} />
              </View>
            </View>
          </View>

          {
              mailSent ? 
                <Text>Mail Enviado</Text>
            : 
                <Text>Ocurrió un error, vuelva a intentar más tarde</Text>

          }

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

  export default EmailForm;