import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Navigation from "./navigation/navigation"
import Header from "./components/header"
import Searchbox from './components/searchbox';
import Cards from"./components/cards"
import Dummydata from './components/masonry';
import Masonary from "./components/masonry"

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Searchbox/>
      <Masonary/>
   
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
