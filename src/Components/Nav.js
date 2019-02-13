//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import NavMenu from './NavMenu'
import ProfileViewer from './ProfileViewer';
// create a component
class Nav extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                
                
                </View>
                <NavMenu />
                <ProfileViewer />
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
    logoContainer:{
        flex:2
    }
});

//make this component available to the app
export default Nav;
