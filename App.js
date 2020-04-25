import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './LoginScreen';
import ListScreen from './ListScreen';
import ListItem from './Components/ListItem';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen/> */}
      <ListScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100
  },
});
