//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , TouchableHighlight} from 'react-native';
import Fontier from './Fontier'

// create a component
class NavProfile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={()=>{}} style={styles.profileWrapper} ><View></View></TouchableHighlight>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'brown',
    },
    profileWrapper:{
        flex:1,
        backgroundColor:'blue',
        justifyContent: 'center',
        alignItems: 'center',
        margin:10
    }
});

//make this component available to the app
export default NavProfile;
