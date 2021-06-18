import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';


export default class DetailMeet extends React.Component {

  constructor(props){
    super(props);
    this.navigation = this.props.navigation
    this.articleId = this.props.route.params.id
  }

  render() {
    return (
        <WebView 
        source={{ uri: "http://demo4882142.mockable.io/MaReunion"}}
        style={{marginTop: 20, flex: 1, width:450, height:100}} >
           
            <Text>Id de ma réunion: {this.articleId}</Text>
            <Text>{this.props.sujet}</Text>
  
        </WebView>
        
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

});