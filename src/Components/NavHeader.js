//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fontier from './Fontier'

// create a component
class NavHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                <Fontier text={'Sweep'} size={40} color={'rgba(255,255,255,1.0)'} italic={'italic'} />
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:2,
        backgroundColor:'purple',
    },
    wrapper:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

//make this component available to the app
export default NavHeader;
