import React from 'react'
import { View, Text, Image, StyleSheet,TouchableWithoutFeedback } from 'react-native'
import { Icon } from 'react-native-elements'
import { color } from 'react-native-elements/dist/helpers';
import DetailMeet from './DetailMeet';


export default class LigneMeet extends React.Component {

  constructor(props){
    super(props);
    this.navigation = this.props.navigation
  }

  handleOnclick = () => {
    this.navigation.navigate("DetailMeet", {
    id: this.props.meet_id
    })
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={(this.handleOnclick)}>
      <View style={styles.row}>
        <Image style={styles.picture} source={{ uri:'https://i.pravatar.cc/200' }} /> 
        <View style={{width: 250}} > 
          <Text style={styles.reunionText}>
          {this.props.sujet} {("-")} {this.props.heure} {("-")} {this.props.lieu}
          </Text>
          <Text style={styles.courrierText} numberOfLines={1}>
          {this.props.courrier}
          </Text>


        </View>
        <View style={styles.icon}>
          <Icon 
            name='delete'
            type='material'
            color='blue'/>
        </View>
        
      </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  row: { 
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 12 ,
    borderBottomWidth:1,
    borderBottomColor:'grey'  
  },

  picture: { 
    flex: 1,
    width: 100, 
    height: 100, 
    marginRight: 18,
    color: 'blue'
  },

  reunionText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  courrierText: { 
    color: 'grey' ,
  
  },

  icon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  vue1:
  {
    flex: 1,
    flexDirection: 'row',
  }
});