//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , TouchableHighlight ,Image,FlatList} from 'react-native';
import ExpandableElement from  './ExpandableElement'
import {ListData} from './listdata'
// create a component
class NavElements extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>

<FlatList 
data={ListData}
renderItem={({item,index})=><ExpandableElement selector={index} title={item.title}  Image={item.image} child={item.childs} />}
/>

{/* <ExpandableElement selector={0} title={'Expanses'} ImageSrc={} childImages={[require('../Assets/Images/foreward.png'),require('../Assets/Images/backward.png'),require('../Assets/Images/search.png')]} childTexts={['Upcomming Trips','Past Trips','Recent Searches']} />
<ExpandableElement selector={1} title={'Reports'} ImageSrc={require('../Assets/Images/reports.png')} childImages={[require('../Assets/Images/foreward.png'),require('../Assets/Images/backward.png'),require('../Assets/Images/search.png')]} childTexts={['Upcomming Trips','Past Trips','Recent Searches']} />
<ExpandableElement selector={2} title={'Bookings'} ImageSrc={require('../Assets/Images/bookings.png')} childImages={[require('../Assets/Images/foreward.png'),require('../Assets/Images/backward.png'),require('../Assets/Images/search.png')]} childTexts={['Upcomming Trips','Past Trips','Recent Searches']} />
<ExpandableElement selector={3} title={'Administration'} ImageSrc={require('../Assets/Images/settings.png')} childImages={[require('../Assets/Images/foreward.png'),require('../Assets/Images/backward.png'),require('../Assets/Images/search.png')]} childTexts={['Upcomming Trips','Past Trips','Recent Searches']} /> */}
              
            
            
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:8,
        backgroundColor:'transparent',
        marginLeft:25
    },
});

//make this component available to the app
export default NavElements;
