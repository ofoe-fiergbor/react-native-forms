import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './LoginScreen';
import ListScreen from './ListScreen';
import ListItem from './Components/ListItem';
import SignupScreen from './Components/SignupScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen/> */}
      <ListScreen/>
      {/* <SignupScreen/> */}
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
