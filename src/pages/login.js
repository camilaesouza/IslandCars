import React from 'react';
import { SafeAreaView, StyleSheet, Image, TextInput, StatusBar, Pressable, Text } from 'react-native';

export default function Login(props) {

  const [usernameValue, onChangeText] = React.useState('Teste')
  const [password, onChangePass] = React.useState('***')

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>

      <Image source={require('../../assets/images/islandLogo.png')}/>

      <TextInput style={styles.inputText}
        onChangeText={username => onChangeText(username)}
        value={usernameValue}
      />

      <TextInput style={styles.inputText}
        onChangeText={password => onChangePass(password)}
        value={password}
      />

    <Pressable style={styles.button} onPress={()=>{props.navigation.navigate('Island Cars')}}>
      <Image style={styles.imageLogin} source={require('../../assets/images/login.png')}/>
      <Text style={styles.text}>
        Login
      </Text>
    </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    inputText:{
      padding: 10,
      borderRadius: 6,
      height: 40,
      width: 250,
      borderWidth: 1,
      marginTop: 30,
    },

    button: {
      marginTop: 30,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },

    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },

    imageLogin: {
      width: 20,
      height: 20
    }
  });