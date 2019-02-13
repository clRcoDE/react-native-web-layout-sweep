//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight ,Image } from 'react-native';


// create a component
class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                <View style={styles.headerTextWrapper}><Text style={styles.headerText}>Upcomming Trips</Text></View>
                    <TouchableHighlight style={styles.newTripTouchable} onPress={() => { }}>
                    <View style={styles.newTripTouchableWrapper}>
                    <Text>Book New Trips</Text>
                    <Image/>
                    </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: 'orange',
        justifyContent: 'center',
    },
    wrapper:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    newTripTouchable:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText:{
        fontSize:30,
        fontFamily: 'sans-serif',
    }
});

//make this component available to the app
export default Header;
