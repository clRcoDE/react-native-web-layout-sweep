//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fontier from './Fontier'
import ListHeader from './ListHeader';
 
// create a component
class List extends Component {
    render() {
        return (
            <View style={styles.container}>
             <ListHeader/>
             <View style={styles.ListWrapper}>
             </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:18,
        backgroundColor:'purple'
    },
    ListWrapper:{
        flex:10,
        backgroundColor:'red'
    }
});

//make this component available to the app
export default List;
