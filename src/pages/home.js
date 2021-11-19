import React from 'react';
import { SafeAreaView, SectionList, StyleSheet, Text, View, Button } from 'react-native';
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { connectActionSheet } from '@expo/react-native-action-sheet'

import Header from '../components/Header'
import data from '../services/data'

const Item = ({item}) =>(
  <View style = {styles.item}>
    <Text>Modelo: {item.model}</Text>
    <Text>Ano: {item.year}</Text>
  </View>
)

function helper(dataToFormat) {
  const dataFormatted = dataToFormat.reduce((accum, current)=> {
    let dateGroup = accum.find(x => x.brand === current.brand);
    if(!dateGroup) {
      dateGroup = { brand: current.brand, data: [] }
      accum.push(dateGroup);
    }
    dateGroup.data.push(current);
    return accum;
  }, []);

  return dataFormatted;
}

function Home(props) {
  const dataCars = helper(data);

  return (
    <ActionSheetProvider>
      <SafeAreaView style={styles.container}>
        <Header home={props}/>

        <SectionList
          sections={dataCars}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item item={item} />}
          renderSectionHeader={({ section: { brand } }) => (
            <Text style={styles.header}>{brand}</Text>
          )}
        />

      </SafeAreaView> 
    </ActionSheetProvider>
  );
}

const ConnectedApp = connectActionSheet(Home)

export default ConnectedApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  item: {
    margin: 7,
    padding: 8,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor : "#0000"
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});