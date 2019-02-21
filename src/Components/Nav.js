//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';

import NavMenu from './NavMenu'
import ProfileViewer from './ProfileViewer';
// create a component
class Nav extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                <Image source={require('../Assets/Images/logo.png')} style={styles.logoImage} />
                <Text style={styles.logoText}>Sweep</Text>
                </View>
                <NavMenu />
                <ProfileViewer user={{image:require('../Assets/Images/profile.png'),username:'Adam'}} />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0082FF',
        // borderWidth:1,
        // justifyContent: 'center',
    },
    logoContainer:{
        flex:4,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor:'yellow',
        marginLeft: 25,
    },
    logoText:{
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        fontSize:30,
        fontWeight: '600',
        color:'rgba(255,255,255,0.9)'
    },
    logoImage:{
        width:42,
        height:42
    }
});

//make this component available to the app
export default Nav;
