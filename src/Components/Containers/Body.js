//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fontier from '../Fontier'
import BodyHeader from '../BodyHeader'
import List from '../List'

// create a component
class Body extends Component {
    render() {
        return (
            <View style={styles.container}>
                <BodyHeader/>
               
                <List/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
    },
});

//make this component available to the app
export default Body;
