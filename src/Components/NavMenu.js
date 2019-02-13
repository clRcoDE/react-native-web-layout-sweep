//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , TouchableHighlight ,Image} from 'react-native';
import ExpandableElement from  './ExpandableElement'

// create a component
class NavElements extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
<ExpandableElement selector={0} />
<ExpandableElement selector={1} />
<ExpandableElement selector={2} />
<ExpandableElement selector={3} />
              
            
            
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:8,
        backgroundColor:'orange'
    },
});

//make this component available to the app
export default NavElements;
