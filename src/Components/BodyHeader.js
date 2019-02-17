//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';


// create a component
class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.headerTextWrapper}><Text style={styles.headerText}>Upcomming Trips</Text></View>
                    <TouchableHighlight style={styles.newTripTouchable} onPress={() => {}} underlayColor='#0099FF' >
                        <View style={styles.newTripTouchableWrapper}>
                            <Text style={styles.tapMoreText} >Book New Trips</Text>
                            <View style={styles.tapMoreImageWrapper}>
                                <Image source={require('../Assets/Images/add.png')} style={styles.tapMoreImage} />
                            </View>
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
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    newTripTouchable: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50
    },
    headerText: {
        fontSize: 30,
        fontFamily: 'sans-serif',
    },
    tapMoreImageWrapper: {
        padding: 14,
        borderRadius: 50,
        // borderWidth:2
        backgroundColor: 'rgba(255,255,255,0.3)'
    },
    tapMoreImage: {
        width: 10,
        height: 10,
    },
    newTripTouchableWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0084FF',
        // paddingHorizontal:25,
        // paddingVertical: 4,
        padding: 4,
        borderRadius: 50,
        elevation: 30,
        // shadowOffset: 25,
    },
    tapMoreText: {
        paddingHorizontal: 22,
        fontSize: 14,
        color: '#fff'
    }
});

//make this component available to the app
export default Header;
