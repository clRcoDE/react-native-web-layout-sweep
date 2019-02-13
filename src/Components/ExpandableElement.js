//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableHighlight,Image } from 'react-native';

// create a component
class ExpandableElement extends Component {
    constructor(props){
        super(props);
        this.state={
            isOpened:[false,false,false,true]
        }
    
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={[styles.collapsableItem,{height:this.state.isOpened[this.props.selector] ? 250 :50}]} onPress={()=>{}}><View><Image/><Text>444444</Text></View></TouchableHighlight>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ExpandableElement;
