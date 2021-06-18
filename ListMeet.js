import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import LigneMeet from './LigneMeet'
 

const actions = [
    {
      text: "Ajouter une nouvelle reunion",
      icon: require("./assets/ic_white.png"),
      name: "btn_add",
      position: 1
    }
  ];

export default class ListeMeet extends React.Component {
 
 constructor(props){
     
     super(props);
     this.navigation = props.navigation
     this.state ={
         reunions: [],
     }
    
 }
 
 componentDidMount(){
 
 fetch("http://demo5954962.mockable.io/MaReunion")
 .then(response => response.json())
 .then((responseJson)=> {
 this.setState({
 reunions: responseJson
 })

 })
 .catch(error => console.log(error)) //to catch the errors if any
 }
 
 render() {
 return (
 <View style={styles.container}>
 
 <FlatList
 data={this.state.reunions}
 style={styles.listStyle}
 renderItem={
 ({item}) => <LigneMeet sujet={item.sujet} heure ={item.heure} lieu={item.lieu} courrier={item.courrier} navigation={this.navigation} meet_id={item.id}/>
 }>
 </FlatList>
 
 <StatusBar style="auto" />
 </View>
 );
 }
 
}
 
const styles = StyleSheet.create({
 
 container: {
 flex: 1,
 backgroundColor: '#fff',
 alignItems: 'center',
 justifyContent: 'center',
 },
 
 listStyle: {
 
 }
 
});