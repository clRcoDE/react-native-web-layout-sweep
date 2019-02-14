//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';


// create a component
class ProfileViewer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={() => { }}
                    style={styles.profileTouchableWrapper} >
                    <View style={styles.profileWrapper} >
                    
                        <Image
                            source={this.props.user.image}
                            style={styles.profilePhoto} />

                        <View style={styles.profileName}>
                            <Text>{this.props.user.username}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'brown',
    },
    profileTouchableWrapper: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'blue',
        // justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 12,
        borderRadius: 10

    },
    profileWrapper: {
        flexDirection: 'row',
    },
    profilePhoto: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    profileName: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    }

});

//make this component available to the app
export default ProfileViewer;
