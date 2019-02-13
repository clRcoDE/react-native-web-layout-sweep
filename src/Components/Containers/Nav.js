//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fontier from '../Fontier'
import NavHeader from '../NavHeader'
import NavElements from '../NavElements'
import NavProfile from '../NavProfile';
// create a component
class Nav extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavHeader />
                <NavElements />
                <NavProfile />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgreen'
    },
});

//make this component available to the app
export default Nav;
