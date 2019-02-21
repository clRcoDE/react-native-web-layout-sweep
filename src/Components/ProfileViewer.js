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
                    underlayColor='rgba(225,225,225,0.2)'
                    style={styles.profileTouchableWrapper} >
                    <View style={styles.profileWrapper} >
                    <View style={styles.profileImageNameWrapper}>
                        <View style={styles.profileImage}>
                            <Image
                                source={this.props.user.image}
                                style={styles.profilePhoto} />
                        </View>
                        <View style={styles.profileName}>
                            <Text style={styles.profileNameText} numberOfLines={1} >{this.props.user.username}</Text>
                        </View>
                        </View>
                        <View style={styles.profileDropDown} >
                            <Image source={require('../Assets/Images/uparrow.png')} style={{width: 14, height: 14 }} />
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
        flex: 4,
        backgroundColor: 'transparent',
        // backgroundColor:'red'
    },
    profileTouchableWrapper: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.25)',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginHorizontal: 15,
        marginVertical:18,
        // padding: 12,
        borderRadius: 15,
        // borderWidth: 2,

    },
    profileWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // borderWidth: 2,
        // borderColor: 'blue',
        // padding:10

    },
    profilePhoto: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    profileName: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        // backgroundColor:'yellow'
    },
    profileImage:{
        // backgroundColor:'red'
    },
    profileImageNameWrapper:{
        // backgroundColor:'green',
        flexDirection: 'row',
        marginLeft:-12
    },
    profileDropDown:{
        // flex:1,
        // flexDirection: 'row',
        // backgroundColor:'purple',
        // alignSelf:'flex-start'
        alignItems: 'center',
    },
    profileNameText:{
        fontWeight:'400',
        color:'#fff'
    }

});

//make this component available to the app
export default ProfileViewer;
