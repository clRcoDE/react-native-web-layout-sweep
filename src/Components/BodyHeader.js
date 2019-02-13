//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fontier from './Fontier'

// create a component
class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
              
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:4,
        backgroundColor:'orange'
    },
});

//make this component available to the app
export default Header;
