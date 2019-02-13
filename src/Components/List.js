//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import ListItem from './ListItem'
import ListHeader from './ListHeader';
 
// create a component
class List extends Component {
    listHeaderGenerator=()=>{
        return(
            <View style={styles.listHeader}>
<View style={styles.recommendPanel}><Text>available for smart phone</Text></View>
<View style={styles.learnMorePanel}><Text>get more out of sweep</Text></View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
             <ListHeader/>
             <View style={styles.ListWrapper}>
             <FlatList  
             data={[1,2,3,4,5,6]}
             ListHeaderComponent={this.listHeaderGenerator} 
             renderItem={({item,index})=><ListItem  timespan={item.timespan} destination={item.destination}  beginning={item.beginning} />}
              />
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
    },
    listHeader:{
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ccc',
        height:150,
        elevation:5,
        margin:10,
        borderRadius:15
    },
    recommendPanel:{
        flex:2
    },
    learnMorePanel:{
        flex:1
    }
});

//make this component available to the app
export default List;
