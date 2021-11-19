import React from 'react';
import { SafeAreaView, StyleSheet, Text, Linking, View, Image } from 'react-native';

import { ActionSheetProvider } from '@expo/react-native-action-sheet'

import Header from '../components/Header'


export default function About(props) {
  return (
    <ActionSheetProvider>
    <SafeAreaView style={styles.container}>
      <Header home={props}/>

    <View style={styles.view}>
        <Image style={styles.image} source={require('../../assets/images/islandLogo.png')}/>
        <Text>Versão 1.0</Text>
        
        <Text style={styles.developerText}>Desenvolvido por:</Text>
        
        <Text style={styles.Myname}>Camila Emanuele de Souza</Text>

        <Image style={styles.imageGithub} source={require('../../assets/images/github.jpg')}/>
        <Text style={styles.github}
        onPress={() => Linking.openURL('https://github.com/camilaesouza/IslandCars')}> 
          Acesse o projeto no github clicando aqui!
        </Text>
      </View>
    </SafeAreaView>
    
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    view: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    developerText: {
      fontSize: 25,
      marginTop: 30,
    },

    Myname: {
      fontSize: 20,
      fontWeight: "bold"
    },

    github: {
      fontSize: 15,
      color: 'blue',
      color: "red",
    },

    image: {
      width: 200,
      height: 200,
      marginTop: 20
    },

    imageGithub: {
      width: 100,
      height: 100,
      marginTop: 30
    },

  });