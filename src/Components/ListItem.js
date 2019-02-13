//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class ListItem extends Component {
    render() {
        return (
            <View style={styles.ListItemContainer}>
                <Text>ListItem</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    ListItemContainer: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ccc',
        height:150,
        elevation:5,
        margin:10,
        borderRadius:15
    },
});

//make this component available to the app
export default ListItem;
