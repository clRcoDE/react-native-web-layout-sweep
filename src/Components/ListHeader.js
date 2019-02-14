import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native'


export default class ListHeader extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isSelected: [true, false, false]
    }
  }
  render() {
    return (
      <View style={styles.filterBoxContainer}>
        <View style={styles.filterCheckBoxesWrapper}>
          <Text style={styles.showableText}>Show :</Text>


          <TouchableHighlight onPress={() => { }} style={styles.checkBox}>
            <View style={styles.checkBoxWrapper}>
              {this.state.isSelected[0] ? <Image source={require('../Assets/Images/selected.png')} style={styles.selectableFilterImage}/> : <Image source={require('../Assets/Images/square.png')} style={styles.selectableFilterImage}/>}
              <Text style={styles.checkBoxText}>Flights</Text>
            </View>

          </TouchableHighlight>


          <TouchableHighlight onPress={() => { }} style={styles.checkBox}>
            <View style={styles.checkBoxWrapper}>
              {this.state.isSelected[1] ? <Image source={require('../Assets/Images/selected.png')} style={styles.selectableFilterImage}/> : <Image source={require('../Assets/Images/square.png')} style={styles.selectableFilterImage}/>}
              <Text style={styles.checkBoxText}>Hotels</Text>
            </View>

          </TouchableHighlight>

          <TouchableHighlight onPress={() => { }} style={styles.checkBox}>
            <View style={styles.checkBoxWrapper}>
              {this.state.isSelected[2] ? <Image source={require('../Assets/Images/selected.png')} style={styles.selectableFilterImage}/> : <Image source={require('../Assets/Images/square.png')} style={styles.selectableFilterImage}/>}
              <Text style={styles.checkBoxText}>Rails</Text>
            </View>

          </TouchableHighlight>



        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
    hieght:20,
    borderRadius:3
  }
});

