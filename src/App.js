import React, { Component } from "react";
import {  StyleSheet,  View} from "react-native";
import Body  from './Components/Body'
import Nav from './Components/Nav'
// const deviceWidth = Dimensions.get('window').width
// const deviceHeight = Dimensions.get('window').height
import {rootReducer} from '../src/Services/Reducers/rootReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'


export const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider  store={store} >
      <View style={styles.container} >
       <View style={styles.navWrapper}><Nav/></View>
       <View style={styles.bodyWrapper}><Body/></View>
       </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor:'lightblue',
    flexDirection: 'row',
    // borderWidth: 10,
  },
  navWrapper:{
    flex:8
  },
  bodyWrapper:{
    flex:40
  }
});

export default App;
