import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, TextInput, Dimensions, View, TouchableOpacity, FlatList } from 'react-native';
import Select from 'react-select';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddMeet from './AddMeet'
import ListMeet from './ListMeet'
import DetailMeet from './DetailMeet'


const Stack = createStackNavigator()

var width = Dimensions.get('window').width; //full width
export default class App extends React.Component {

  render() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="ListeReunion">
      <Stack.Screen name="Ma Réunion" component={ListMeet} />
      <Stack.Screen name="DetailReunion" component={DetailMeet} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
}