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
                
                <Text style={styles.logoText}>Sweep</Text>
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
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText:{
        fontSize:30,
        fontWeight: '600',
        color:'rgba(255,255,255,0.9)'
    }
});

//make this component available to the app
export default Nav;
