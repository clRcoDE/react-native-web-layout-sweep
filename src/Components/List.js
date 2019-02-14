//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList ,TouchableHighlight ,Image} from 'react-native';
import ListItem from './ListItem'
import ListHeader from './ListHeader';
 
// create a component
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
          isSelected: [true, false, false]
        }
      }
    listHeaderGenerator=()=>{
        return(
            <View style={styles.listHeader}>
<TouchableHighlight onPress={()=>{}}  underlayColor={'rgba(225,225,225,0.8)'} style={styles.recommendPanel}><Text>available for smart phone</Text></TouchableHighlight>
<TouchableHighlight onPress={()=>{}}  underlayColor={'rgba(225,225,225,0.8)'} style={styles.learnMorePanel}><Text>get more out of sweep</Text></TouchableHighlight>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
             <View style={styles.filterBoxContainer}>
        <View style={styles.filterCheckBoxesWrapper}>
          <Text style={styles.showableText}>Show : </Text>


          <TouchableHighlight onPress={() => { }} style={styles.checkBox}>
            <View style={styles.checkBoxWrapper}>
              {this.state.isSelected[0] ? <Image source={require('../Assets/Images/selected.png')} style={styles.selectableFilterImage}/> : <Image source={require('../Assets/Images/square.png')} style={styles.selectableFilterImage}/>}
              <Text style={styles.checkBoxText}> Flights </Text>
            </View>

          </TouchableHighlight>


          <TouchableHighlight onPress={() => { }} style={styles.checkBox}>
            <View style={styles.checkBoxWrapper}>
              {this.state.isSelected[1] ? <Image source={require('../Assets/Images/selected.png')} style={styles.selectableFilterImage}/> : <Image source={require('../Assets/Images/square.png')} style={styles.selectableFilterImage}/>}
              <Text style={styles.checkBoxText}> Hotels </Text>
            </View>

          </TouchableHighlight>

          <TouchableHighlight onPress={() => { }} style={styles.checkBox}>
            <View style={styles.checkBoxWrapper}>
              {this.state.isSelected[2] ? <Image source={require('../Assets/Images/selected.png')} style={styles.selectableFilterImage}/> : <Image source={require('../Assets/Images/square.png')} style={styles.selectableFilterImage}/>}
              <Text style={styles.checkBoxText}> Rails </Text>
            </View>

          </TouchableHighlight>



        </View>
      </View>
             <View style={styles.ListWrapper}>
             <FlatList  
             data={[1,2,3,4,5,6]}
             showsVerticalScrollIndicator={false}
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
    filterBoxContainer: {
        flex: 1,
        backgroundColor: 'lime',
        justifyContent: 'center',
      },
      checkBox: {
        flexDirection: 'row',
      },
      filterCheckBoxesWrapper: {
        flexDirection: 'row',
      },
      checkBoxWrapper:{
    flexDirection: 'row',
    
      },
      selectableFilterImage:{
        width:20,
        heigth:20,
        borderRadius:3
      },
    ListWrapper:{
        flex:10,
        backgroundColor:'red'
    },
    listHeader:{
        // flex: 1,
        flexDirection: 'row',
        // alignItems: 'center',
        backgroundColor: '#ccc',
        height:200,
        elevation:5,
        margin:10,
        borderRadius:15
    },
    recommendPanel:{
        flex:2,
        backgroundColor:'#eee',
        borderRadius:15,
        marginRight:30
    },
    learnMorePanel:{
        flex:1,
        backgroundColor:'#eee',
        borderRadius:15
    }
});

//make this component available to the app
export default List;
