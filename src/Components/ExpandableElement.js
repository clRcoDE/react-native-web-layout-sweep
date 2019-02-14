//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';

// create a component
class ExpandableElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: [false, false, false, false]
            // isOpened:false
            // isSelected:-1
        }

    }


    collapseItem = i =>{

    //    this.setState( pervState => (  { isOpened: [true, true, true, true] } ))
    //    console.log(this.state.isOpened)
        // this.forceUpdate()
        this.setState(prev=>({isOpened:[...prev.isOpened.slice(0,i),!this.state.isOpened[i],...prev.isOpened.slice(i+1)]}))
    //    console.log(this.state.isOpened)
        
 }


// collapseItem =i =>{
//     console.log(`this is selector ${i}`)
//     this.setState(prev=>({isSelected:i}),()=>console.log(this.state.isSelected))
    
// }

// componentDidMount(){
//     console.log(this.props.selector,this.state.isSelected)
// }
// componentDidUpdate(){
//     // this.setState({isOpened:[false,false,false,false]})
// }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={[styles.collapsableItem, { height: this.state.isOpened[this.props.selector]  ? 300 : 60}]}
                    underlayColor={'rgba(200,200,200,0.3)'}
                    onPress={this.collapseItem.bind(this, this.props.selector)}>
                    
                    <View style={styles.elementWrapper}>
                        <View style={styles.elementParent}>
                            <Image source={this.props.Image} style={{ height: 16, width: 16 }} />
                            <Text style={styles.elementsTitleText}>{this.props.title}</Text>

                        </View>
                        <View style={styles.elementChilds}>
                            {this.props.child.map((item, index) =>
                                <View>
                                    {this.state.isOpened[this.props.selector] &&
                                        <TouchableHighlight onPress={() => { }} style={styles.childElementsStyle}>
                                            <View style={styles.childElementsWrapper}>
                                                <Image source={item.icon}
                                                    style={{ width: 16, height: 16 }} />
                                                <Text>{item.text}</Text>
                                            </View>
                                        </TouchableHighlight>
                                    }
                                </View>
                            )}
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
        backgroundColor: 'transparent',
        justifyContent: 'center',
        // borderWidth: 3,
        // alignItems: 'center',
        marginVertical: 10,
      
    },
    collapsableItem: {
        // borderWidth: 1,
        backgroundColor: 'rgba(225,225,225,0.2)',
        paddingTop: 16,
        paddingLeft:20,
        // justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    elementParent: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red',
        // paddingTop:15
        // justifyContent: 'center',
    },
    elementChilds: {
        backgroundColor: 'pink'
    },
    childElementsStyle: {
        borderWidth: 2
    },
    childElementsWrapper: {
        flexDirection: 'row',
    },
    elementsTitleText:{
        fontWeight:'600',
        fontSize:13,
        color:'#f5f5f5'
    }
});

//make this component available to the app
export default ExpandableElement;
