import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View } from 'react-native';
// import HomeScreen from './src/components/screens/HomeScreen';
import CoinDetailedScreens from './src/components/screens/CoinDetailedScreens';


export default function App() {
  return (
    <View style={styles.container}>
   {/*  <HomeScreen /> */}
    <CoinDetailedScreens/>
      <StatusBar style="light" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop:50,
  
  },
});
