//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , TouchableHighlight ,Image} from 'react-native';
import Fontier from './Fontier'

// create a component
class NavElements extends Component {
    constructor(props){
        super(props);
        this.state={
            isOpened:[false,false,false,true]
        }
    }
    render() {
        return (
            <View style={styles.container}>

               <TouchableHighlight key={1} style={[styles.collapsableItem,{height:this.state.isOpened[0] ? 250 :50}]} onPress={()=>{}}><View><Image/><Text>111111</Text></View></TouchableHighlight>
               <TouchableHighlight key={2} style={[styles.collapsableItem,{height:this.state.isOpened[1] ? 250 :50}]} onPress={()=>{}}><View><Image/><Text>222222</Text></View></TouchableHighlight>
               <TouchableHighlight key={3} style={[styles.collapsableItem,{height:this.state.isOpened[2] ? 250 :50}]} onPress={()=>{}}><View><Image/><Text>333333</Text></View></TouchableHighlight>
               <TouchableHighlight key={4} style={[styles.collapsableItem,{height:this.state.isOpened[3] ? 250 :50}]} onPress={()=>{}}><View><Image/><Text>444444</Text></View></TouchableHighlight>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:8,
        backgroundColor:'orange'
    },
    collapsableItem:{
        paddingTop:16,
        marginLeft:25
    }
});

//make this component available to the app
export default NavElements;
