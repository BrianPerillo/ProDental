import { StyleSheet, Text, TextInput, View } from 'react-native'

import React from 'react'

const Credential = () => {


    return ( 

        <View style={styles.screen}>

            <Text style={styles.title}></Text>

            <View style={styles.credentialArea}>
                
                <View style={styles.credentialContainer}>

                    <Text style={styles.credentialHeader}>Pro Dental</Text>
                
                    <Text style={styles.text}>Nombre: Brian Emiliano</Text>
                    <Text style={styles.text}>Apellido: Perillo</Text>
                    <Text style={styles.text}>DNI: 38789025</Text>

                    <View style={styles.codeArea}>
                        <Text style={styles.textCode}>Código de Seguridad </Text>
                        <Text style={styles.textCode}>XXXXXXXXXXXXXXXX</Text>
                        {/* <View style={styles.textCode}>XXXXXXXXXXXXXXXX</View> */}
                    </View>

                </View>
                
            </View>
            
        </View>
    );

}
 
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    title: {
      fontSize: 18,
      fontFamily: 'open-sans-bold',
      marginBottom: 18,
      marginTop: 50,
      alignSelf:'center'
    },
    credentialHeader: {
        color: 'white',
        marginBottom:15,
        paddingRight:20,
        paddingTop:5,
        alignSelf:'flex-end',
        fontSize:18,
    },
    credentialArea: {
        flex: 1,
        marginTop: 150,
        alignSelf:'center',
        width: '95%',
    },
    credentialContainer:{
        padding: 20,
        backgroundColor:'black',
        borderRadius:15,
        height: 290,
    },
    text: {
        color: 'white',
        margin: 10,
        fontSize: 15,
    },
    codeArea:{

        //VERSIÓN 1:
        marginTop: 10,
        height: 60,
        alignContent: 'space-around',
        justifyContent:'space-around',
        
        //VERSIÓN 2:
        
    },
    textCode:{

        //VERSIÓN 1:
        color: 'white',
        fontSize: 17,
        alignSelf:'center',

        //VERSIÓN 2:
        // color: 'white',
        // alignSelf:'flex-end'
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
  
export default Credential;