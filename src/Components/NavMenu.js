import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableHighlight, Image, LayoutAnimation, UIManager, Animated } from 'react-native'
import { NavData } from './NavData'
export default class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: null,
            selectedHeight: new Animated.Value(50),
            normalHight: new Animated.Value(50),
            selectedOpacity: new Animated.Value(0)
        }


    }


    collapseItem = index => {



        if (this.state.selectedId === index) {



            // if user clicks on same button // 


            if (this.state.selectedHeight._value === 50) {

                /*************************  if it was closed   ******************* */



                Animated.parallel([
                    Animated.timing(this.state.selectedHeight, {
                        toValue: 195,
                        duration: 150
                    }),
                    // Animated.timing(this.state.selectedOpacity, {
                    //     toValue: 1,
                    //     duration: 300
                    // })
                ]).start()
                this.setState({ selectedId: index, })

                // Animated.timing(this.state.selectedHeight, { 
                //     toValue: 180,
                //      duration: 1500 
                //     }).start()
                // this.setState({ selectedId: index, })


            } else if (this.state.selectedHeight._value === 195) {


                /*************************  if it was opened   ********************/

                Animated.parallel([
                    Animated.timing(this.state.selectedHeight, {
                        toValue: 50,
                        duration: 200
                    }),
                    // Animated.timing(this.state.selectedOpacity, {
                    //     toValue: 0,
                    //     duration: 150
                    // }),

                ]).start(() => { this.setState({ selectedId: -1, }) })


                // Animated.timing(this.state.selectedHeight, { 
                //     toValue: 50,
                //      duration: 300 
                //     }).start(() => {this.setState({ selectedId: -1, })  })

            }

        } else if (this.state.selectedId !== index) {

            /*************************  if user click on new Button  ********************/


            Animated.parallel([
                Animated.timing(this.state.selectedHeight, {
                    toValue: 50,
                    duration: 100
                }),
                // Animated.timing(this.state.selectedOpacity, {
                //     toValue: 1,
                //     duration: 150
                // }),
            ]).start(() => {
                this.setState({ selectedId: index }, () => Animated.parallel([
                    Animated.timing(this.state.selectedHeight, {
                        toValue: 195,
                        duration: 150
                    }),
                    // Animated.timing(this.state.selectedOpacity, {
                    //     toValue: 1,
                    //     duration: 300
                    // })

                ]).start())
            })





            // Animated.timing(this.state.selectedHeight, {
            //     toValue: 50,
            //     duration: 100
            // }).start(() => {
            //     this.setState({ selectedId: index }, () => Animated.timing(this.state.selectedHeight, {
            //         toValue: 180,
            //         duration: 150
            //     }).start());
            // })



        }
    }




    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={NavData}
                    extraData={this.state.selectedId}
                    renderItem={({ item, index }) => {
                        return (
                            // <View style={>
                            <Animated.View
                                style={this.state.selectedId === index ? [styles.expandedStyle, { height: this.state.selectedHeight }] : [styles.collapsedStyle, { height: 50 }]}
                            >
                                <TouchableHighlight
                                    underlayColor='transparent'
                                    onPress={this.collapseItem.bind(this, index)}
                                    style={[styles.touchableStyles,]}
                                >

                                    <View style={styles.elementParent}>
                                        <View style={styles.elementHeaderWrapper}>
                                            <Image source={item.image} style={{ height: 12, width: 12 }} />
                                            <Text style={styles.elementsTitleText}>{item.title}</Text>
                                        </View>
                                        <View>

                                        </View>
                                        {this.state.selectedId === index && <View style={[styles.elementChildsWrapper]}>
                                            {item.childs.map((item, indx) =>
                                                <TouchableHighlight onPress={() => { }} underlayColor='rgba(0, 100, 190,0.5)' style={styles.childElement}>
                                                    <View style={styles.childElementWrapper} >
                                                        <Image source={item.icon} style={styles.iconStyles} />
                                                        <Text style={styles.childElementText}>{item.text}</Text>
                                                    </View>
                                                </TouchableHighlight>
                                            )}
                                        </View>}
                                    </View>
                                </TouchableHighlight>
                            </Animated.View>

                            // </View>

                        )
                    }
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 19,
        // backgroundColor: 'green',
        marginLeft: 18,
        justifyContent: 'center',
    },
    expandedStyle: {
        flex: 1,
        backgroundColor: 'rgba(100,100,100,0.25)',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        marginVertical: 10,
    },
    collapsedStyle: {
        // backgroundColor: 'rgba(200,200,200,0.05)',

        flex: 1,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        marginVertical: 10,

    },
    elementHeaderWrapper: {
        // borderWidth:3,
        // justifyContent: 'center',
        // backgroundColor:'red',
        alignItems: 'center',
        flexDirection: 'row',
        // marginLeft:2
    },

    touchableStyles: {
         flex: 1,
          borderTopLeftRadius: 50,
           borderBottomLeftRadius: 50,
            paddingTop: 20, 
            paddingLeft: 20, 
        },
    elementParent: {
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderWidth: 3,
    },
    elementsTitleText: {
        color: 'rgba(255,255,255,1.0)',
        fontWeight: '400',
        marginLeft: 20,
        fontSize: 13
    },
    navElement: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderBottomLeftRadius: 35,
        borderTopLeftRadius: 35,
        marginVertical: 10,
        // justifyContent: 'center',
        // alignItems: 'center',

    },
    elementChildsWrapper: {
        // backgroundColor:'yellowgreen',
        marginVertical: 16
    },
    childElement: {
        height: 45,
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor:'blue',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        marginLeft:-14,
        paddingLeft:14

    },
    iconStyles: {
        width: 12,
        height: 12,
    },
    childElementWrapper: {
        flexDirection: 'row',
        // paddingLeft:15
    },
    childElementText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 12,
        marginLeft: 12
    }
    // navElement: {
    //     flexDirection: 'row',
    // },
    // imageStyles: {
    //     height: 20,
    //     width: 20
    // }

})
