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
      <View style={styles.container}>
        <View style={styles.filterCheckBoxesWrapper}>
          <Text style={styles.showableText}>Show :</Text>


          <TouchableHighlight onPress={() => { }} style={styles.checkBox}>
            <View style={styles.checkBoxWrapper}>
              {this.state.isSelected[0] ? <Image /> : <Image />}
              <Text style={styles.checkBoxText}>Flights</Text>
            </View>

          </TouchableHighlight>

          <TouchableHighlight onPress={() => { }} style={styles.checkBox}>
            <View style={styles.checkBoxWrapper}>
              {this.state.isSelected[0] ? <Image /> : <Image />}
              <Text style={styles.checkBoxText}>Hotels</Text>
            </View>

          </TouchableHighlight>

          <TouchableHighlight onPress={() => { }} style={styles.checkBox}>
            <View style={styles.checkBoxWrapper}>
              {this.state.isSelected[0] ? <Image /> : <Image />}
              <Text style={styles.checkBoxText}>Rails</Text>
            </View>

          </TouchableHighlight>



        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lime'
  },
  checkBox: {
    flexDirection: 'row',
  },
  filterCheckBoxesWrapper: {
    flexDirection: 'row',
  }
});

