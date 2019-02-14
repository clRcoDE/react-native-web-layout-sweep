//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,TouchableHighlight} from 'react-native';

// create a component
class ListItem extends Component {
    render() {
        return (
            <TouchableHighlight onPress={()=>{}} style={styles.ListItemContainer}>
                <Text>ListItem</Text>
            </TouchableHighlight>
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
