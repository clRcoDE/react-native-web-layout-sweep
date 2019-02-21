//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight, Image, ActivityIndicator } from 'react-native';
import ListItem from './ListItem'
// import ListHeader from './ListHeader';
import { ListData } from './ListData'
// create a component
import { filterCreator } from '../Services/Actions/action'
import { connect } from 'react-redux'
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {

            // flatlistToggler : true,
            //********************************* changing state of filters before Redux  **************************************** */
            // filter: {
            //   flights: true,
            //   hotels: true,
            //   rails: false

            // },


            // filteredData:ListData
            // filteredData: [],


            buttons : [
                {
                    id: 'hotels',
    
                },
                {
                    id: 'flights',
                },
                {
                    id: 'rails',
                }
            ],
            loading:false
        }



        


    }


   async  changeFilter (ID)  {


        //*********************** change filter from state - apporoche 1 : without destructuring  - no redux  ************************* */
        // if (x === 'hotels') {
        //   this.setState((prevState) => ({ ...prevState, filter: { ...prevState.filter, hotels: !prevState.filter.hotels } }))
        // } else if (x === 'flights') {
        //   this.setState((prevState) => ({ ...prevState, filter: { ...prevState.filter, flights: !prevState.filter.flights } }))
        // }
        // else if (x === 'rails') {
        //   this.setState((prevState) => ({ ...prevState, filter: { ...prevState.filter, rails: !prevState.filter.rails } }))
        // }

        //*********************** change filter from state - apporoche 2 :  destructuring  mode - no redux **************************** */

        // this.setState((prevState) => ({ ...prevState, filter: { ...prevState.filter, [inputer]: !prevState.filter[inputer] } }))
        // console.log(this.state.filter)


        //**************************************  change filter with dispatching action - REDUX -  **************************************** */
        // this.setState(prev=>({filteredData:[]}))
       await this.setState({loading:true})
       await this.props.filterCreator(ID)
        this.setState({loading:false})
        console.log(this.props)
        // this.setState(prev=>({flatlistToggler:false},()=>{setTimeout(()=>{this.setState({flatlistToggler:true})}, 1000 )}))
        // this.props.filter[item.tag] 




    }

    componentDidMount() {
        this.setState({ filteredData: ListData.filter(item => this.props.selectedItems.findIndex(p => item.tag === p) >= 0) })
        console.log(this.props)
    }


    // fadeIn=(index)=>{
    //   Animated.timing(this.state.fader,{toValue:1,duration:500,delay:index*500}).start()
    // }


    listHeaderGenerator = () => {
        return (
            <View style={styles.listHeader}>
                <TouchableHighlight
                    onPress={() => { }}
                    underlayColor={'rgba(225,225,225,0.4)'}
                    style={styles.recommendPanel}>
                    <View style={styles.recommendPanelWrapper} >
                        <View style={styles.recommendPanelCardImageWrapper}>
                            <Image style={styles.recommendPanelCardImage} resizeMode='center' source={require('../Assets/Images/credit-card.png')} />
                        </View>
                        <View style={styles.recommendPanelInfo}>
                            <View style={styles.recommendHeaderView}>
                                <Text style={{ fontSize: 20 }}>Available for your</Text>
                                <Text style={{ fontSize: 20 }}>smartphone</Text>
                            </View>
                            <View style={styles.recommendDesc}>
                                <TouchableHighlight underlayColor='rgba(0,0,0,0.25)' style={styles.recommendOsTouchable} onPress={() => { }}>
                                    <View style={styles.recommendOs} >
                                        <Image source={require('../Assets/Images/apple.png')} style={styles.iconStyle} />
                                        <Text numberOfLines={1} >for Iphone</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight underlayColor='rgba(0,0,0,0.25)' style={styles.recommendOsTouchable} onPress={() => { }}>
                                    <View style={styles.recommendOs} >
                                        <Image source={require('../Assets/Images/playstore.png')} style={styles.iconStyle} />
                                        <Text numberOfLines={1}>for Android</Text>
                                    </View>
                                </TouchableHighlight>

                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => { }}
                    underlayColor={'rgba(225,225,225,0.4)'}
                    style={styles.learnMorePanel}>
                    <View style={styles.learnMorePanelWrapper}>
                        <View style={styles.AbsoluteImageWrapper}>
                            <Image source={require('../Assets/Images/gift.png')} style={{ flex: 1 }} resizeMode='center' />
                        </View>
                        <View style={styles.learnMorePanelUpgrade}>
                            <View style={styles.getMoreOut}>
                                <Text style={styles.getMoreOutText} numberOfLines={2} >Get <b>more out</b></Text><Text style={styles.sweepText}>of Sweep</Text>
                            </View>
                            <View style={styles.upgradeWrapper}>
                                <TouchableHighlight onPress={() => { }} underlayColor='rgba(75, 85, 180,0.6)' style={styles.upgradeWrapperTouchable} >
                                    <Text style={styles.upgradeText} >Upgrade</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.filterBoxContainer}>
                    <View style={styles.filterCheckBoxesWrapper}>


                        <Text style={styles.lightText}>Show : </Text>



                        {this.state.buttons.map((item, index) => this.props.selectedItems.findIndex(p => p === item.id) >=0 
                            ? <TouchableHighlight underlayColor={'transparent'} key={index} onPress={this.changeFilter.bind(this, item.id)} style={styles.checkBox}>
                            <View style={styles.checkBoxWrapper} >
                                <View style={styles.emptyBox} >
                                    <Image source={require('../Assets/Images/checked.png')} style={{ height: 10, width: 10 }} />
                                </View>
                                <Text style={styles.filtersText} >{item.id}</Text>
                            </View>
                        </TouchableHighlight>
                           : <TouchableHighlight underlayColor={'transparent'}  key={index} onPress={this.changeFilter.bind(this, item.id)} style={styles.checkBox} >
                            <View style={styles.checkBoxWrapper} >
                                <View style={styles.emptyBox} >
                                </View>
                                <Text style={styles.filtersText} >{item.id}</Text>
                            </View>
                        </TouchableHighlight>
                        )}






                    </View>
                </View>
                <View style={styles.ListWrapper}>
                    {/*************************************************flatlist  for use state filters ************************************************* */}
                    {/* <FlatList
            data={ListData}
            extraData={this.state.filter}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={this.listHeaderGenerator}
            renderItem={({ item, index }) => <View>{this.state.filter[item.tag] && <ListItem bookingData={item} selected={this.state.filter} />}</View>
            } 
            /> */}

                    {/* ***************************************************flatlist for use Redux filters ******************************************************* */}


                    <FlatList
                        data={this.props.filteredData}
                        // style={{borderWidth:1}}
                        extraData={this.props.filteredData}
                        ListHeaderComponent={this.listHeaderGenerator}
                        ListEmptyComponent={() => <View style={styles.emptyWrapper}><Text style={styles.emptyListText}>NO TRIP TYPE SELECTED</Text></View>}
        renderItem={({ item, index }) => { return (<View >{ this.state.loading ? <ActivityIndicator size={'large'} animating={true} /> :<ListItem indexer={index} fadeStyle={this.state.fader} bookingData={item} selected={this.props.filter} />}</View>) }}

                    />






                </View>


            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({

    container: {
        flex: 36,
        backgroundColor: 'transparent'
    },
    filterBoxContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        // borderWidth:3,
        // borderColor:'orange'
    },
    checkBox: {
        flexDirection: 'row',
        // borderWidth:3,
        marginHorizontal: 8,
    },
    emptyWrapper: {
        flex: 1,
        height: 250,
        borderWidth: 3,
        borderColor: '#ddd',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    emptyListText: {
        fontSize: 24,
        color: '#bbb',
        fontWeight: '600'
    },
    filterCheckBoxesWrapper: {
        flexDirection: 'row',
        // borderWidth: 3,
        alignItems: 'center',
        paddingLeft:10
    },
    lightText:{
        fontWeight:'600',
        color:'#aaa'
    },
    emptyBox: {
        width: 26,
        height: 26,
        backgroundColor: '#f4f4f4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:4
    },
    filtersText:{
fontWeight:'600',
// fontFamily: 'Roboto,sans-serif',
color:'#222',
fontSize:13
    },
    checkBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 3,
        // justifyContent: 'center',
        alignItems: 'center',
        width:100,
        marginHorizontal:20
        // borderWidth:2,
        // borderColor:'red'

    },
    checkBoxWrapper:{
flex:1,
// borderWidth:2,
borderColor:'red',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    recommendHeaderView: {
        // backgroundColor:'green',
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 14
    },
    recommendDesc: {
        // backgroundColor:'yellow',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-evenly',
        marginHorizontal: 14,
        // flexWrap:'wrap'


    },
    recommendOs: {
        padding: 12,
        // maxWidth: 140,
        // minWidth: 130,
        borderRadius: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 55,
        // margin: 5,
        // marginRight:25,
        // backgroundColor:'purple',

    },
    recommendOsTouchable: {
        borderRadius: 50,
        // backgroundColor:'green',
        marginRight: 12,
        flex: 1,
        backgroundColor:'#fff',
        padding:3
        // backgroundColor:'red'


    },
    recommendPanelWrapper: {
        flex: 2,
        flexDirection: 'row',
        // backgroundColor:'red'
    },
    learnMorePanelWrapper: {
        flex: 2
    },
    checkBoxText: {
        fontWeight: '600'
    },
    selectableFilterImage: {
        width: 20,
        height: 20,
        borderRadius: 3,
        marginRight: 12
    },
    ListWrapper: {
        flex: 10,
        marginTop: 10,
        borderColor: 'lime',
        // borderWidth:3,
        // backgroundColor:'red'
    },
    listHeader: {
        // flex: 1,
        flexDirection: 'row',
        // alignItems: 'center',
        // backgroundColor: '#ccc',
        minHeight: 225,
        elevation: 5,

        margin: 10,
        borderRadius: 15,
        // borderWidth:3,
        borderColor: 'red'
    },
    recommendPanel: {
        flex: 10,
        backgroundColor: '#eee',
        borderRadius: 15,
        marginRight: 30
    },
    learnMorePanel: {
        flex: 5,
        backgroundColor: '#eee',
        borderRadius: 15
    },
    iconStyle: {
        width: 14,
        height: 14,
        marginRight: 10
    },
    recommendPanelInfo: {
        flex: 20,
        padding: 15
    },
    recommendPanelCardImageWrapper: {
        flex: 11,
        // backgroundColor:'red',
        padding: 20
    },
    recommendPanelCardImage: {
        flex: 1,
    },
    AbsoluteImageWrapper: {
        // borderWidth:3,
        borderRadius: 10,
        flex: 1,
        position: 'absolute',
        zIndex: -1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#5460C3',
        paddingLeft: 125

    },
    learnMorePanelUpgrade: {
        flex: 1,
        backgroundColor: 'transparent',
        zIndex: 1,
        padding: 15,
        paddingLeft: 30
    },
    getMoreOut: {
        // borderWidth:2,
        flex: 1
    },
    upgradeWrapper: {
        flex: 1,
        // borderWidth:1,
        justifyContent: 'center',
        // borderColor:'red',
        alignItems: 'flex-start',
    },
    upgradeWrapperTouchable: {
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.25)',
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 50
        // alignItems:'center'
        // alignItems:'baseline'
    },
    getMoreOutText: {
        fontSize: 23,
        color: '#fff',
        // fontFamily: 'Verdana, Geneva, sans-serif',
    },
    sweepText: {
        color: '#fff',
        fontSize: 23
    },
    upgradeText: {
        color: '#fff'
    }
});


const mapStateToProps = state => {
    return {
        selectedItems: state.selectedItems,
        filteredData: state.filteredData
    }
}

//make this component available to the app
export default connect(mapStateToProps, { filterCreator })(List);
