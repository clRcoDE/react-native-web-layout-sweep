//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


// create a component
class Fontier extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <View style={styles.container}>
                <Text style={[styles.textStyles, { fontFamily: '"Trebuchet MS", Helvetica, sans-serif', color: this.props.color, fontSize: this.props.size , fontStyle:this.props.italic }]}>
                {this.props.text}</Text>
            </View>
        );
    }
}

// define  styles
const styles = StyleSheet.create({
    container: {
    },
    textStyles: {

    }
});

//make this component available to the app
export default Fontier;
