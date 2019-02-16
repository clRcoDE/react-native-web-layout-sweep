import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View ,Dimensions} from "react-native";
import Body  from './Components/Body'
import Nav from './Components/Nav'
// const deviceWidth = Dimensions.get('window').width
// const deviceHeight = Dimensions.get('window').height
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.navWrapper}><Nav/></View>
       <View style={styles.bodyWrapper}><Body/></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor:'lightblue',
    flexDirection: 'row',
  },
  navWrapper:{
    flex:4
  },
  bodyWrapper:{
    flex:20
  }
});

export default App;
