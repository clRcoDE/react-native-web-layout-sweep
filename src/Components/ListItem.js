//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image , Animated} from 'react-native';

// create a component
class ListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSelected: false,
            fader:new Animated.Value(0),
            tag:this.props.bookingData.tag,
            transformer:new Animated.Value(-50),
            
        }
    }

    collapseItem = i => {
        this.setState(prev => ({ isSelected: !prev.isSelected } ))
    }
    componentDidMount(){
        console.log(this.props.indexer)
        Animated.parallel([
            Animated.timing((this.state.fader),{toValue:1,duration:600,delay:(this.props.indexer+1)*350}),
            Animated.timing((this.state.transformer),{toValue:25,duration:600,delay:(this.props.indexer+1)*350})
        ],{useNativeDriver:true}).start()
        
    }
    componentDidUpdate(){
        console.log(this.props.indexer)
        Animated.parallel([
            Animated.timing((this.state.fader),{toValue:1,duration:600,delay:(this.props.indexer+1)*350}),
            Animated.timing((this.state.transformer),{toValue:25,duration:600,delay:(this.props.indexer+1)*350}),
          
        ],{useNativeDriver:true}).start()
       

    }



    render() {
        

    
        // console.log(this.props.selected[this.props.bookingData.tag])
        return (

            <Animated.View style={[styles.ListItemContainer,{opacity:this.state.fader,transform:([{translateX:this.state.transformer}])}]}>
                 <View style={styles.itemWrapper}>
                  <TouchableHighlight onPress={this.collapseItem.bind(this)} underlayColor='rgba(225, 225, 225,0.35)' style={styles.itemHeader}>
                        <View style={styles.itemHeaderWrapper} >

                            <View style={styles.itemDateWrapper}>
                                <Text style={styles.timeSpanText} >{this.props.bookingData.startTime}</Text>
                                {this.props.bookingData.endTime  && <Text style={styles.timeSpanText} >—</Text> }
                                <Text style={styles.timeSpanText} >{this.props.bookingData.endTime}</Text>
                            </View>
                            <View style={styles.itemFromToWrapper}>
                                <Text style={[styles.semiText,styles.itemFromToStyles]} >{this.props.bookingData.fromCity},{this.props.bookingData.fromCountry}</Text>
                                <Text style={[styles.semiText,styles.itemFromToStyles]} >{this.props.bookingData.toCity},{this.props.bookingData.toCountry}</Text>
                            </View>
                            <View style={styles.itemChangeBookingStatus}>
                                <TouchableHighlight underlayColor='rgba(255, 255, 255,0.1)' onPress={() => { }} style={styles.changeStatusText} >
                                    <Text style={[styles.lightText]} >cancel Booking</Text>
                                </TouchableHighlight>
                                <TouchableHighlight underlayColor='rgba(255, 255, 255,0.1)' onPress={() => { }} style={styles.changeStatusText} >
                                    <Text style={[{color:'#0082FF'}]} >Change</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.itemCollapsableImage}></View>
                        </View>
                    </TouchableHighlight>
                    {  this.state.isSelected &&  <View style={[styles.itemDesc]}>
                        <View style={styles.datesWrapper} >
                        <Text style={styles.lightText} >{this.props.bookingData.startTime}</Text>
                        
                        </View>
                        <View style={styles.airplaneSeparator} >
                        <Image source={require('../Assets/Images/plane.png') } style={styles.notifIcon}/>
                        <Image source={require('../Assets/Images/dotted-line.png')} style={{height:125,width:2}}/>
                        
                        </View>
                        <View style={styles.bookingDetails} >
                            <View style={styles.mainDetails}>
                                <View style={styles.timeDetails}>
                                    <View style={styles.startEndTimeWrapper} >
                                        <View style={styles.startTime} >
                                        <Text style={styles.hoursText}>{this.props.bookingData.TakeOff}</Text>
                                        
                                        </View>
                                        <View style={styles.midArrow} >
                                        <Text style={styles.hoursText}>⟶</Text>
                                        
                                        </View>
                                        <View style={styles.endTime} >
                                        <Text style={styles.hoursText}>{this.props.bookingData.Landing}</Text></View>
                                    </View>
                                    <View style={styles.startEndCity} >
                                        <View style={styles.startCity}>
                                            <View style={[styles.startCityText]}><Text style={[styles.semiText,{ textTransform: 'uppercase'}]} >{this.props.bookingData.StartCityAbbreviation}</Text></View>
                                            <View style={styles.startCountryText}><Text style={styles.lightText}>{this.props.bookingData.fromCountry}</Text></View>
                                        </View>
                                        <View style={styles.endCity}>
                                            <View style={[styles.endCityText]}><Text style={[styles.semiText,{ textTransform: 'uppercase'}]} >{this.props.bookingData.DestinationCityAbbreviation}</Text></View>
                                            <View style={styles.endCountryText}><Text style={styles.lightText}>{this.props.bookingData.toCountry}</Text></View>
                                        </View>

                                    </View>

                                </View>
                                <View style={styles.airways}>
                                    <Image source={this.props.bookingData.Airline.icon} style={styles.airlineIcon} />
                                </View>

                            </View>
                            <View style={styles.sideDetails}>
                            <View style={styles.subDetailsIcon} ><Image source={require('../Assets/Images/notif.png')} style={styles.notifIcon} /></View>
                            <View style={[styles.subDetails,{paddingLeft:10}]} ><Text style={[styles.subDetailsText,styles.lightText]} >Seat :{this.props.bookingData.Seat}</Text></View>
                            <View style={styles.subDetails} ><Text style={[styles.subDetailsText,styles.lightText]} >Class :{this.props.bookingData.class}</Text></View>
                            <View style={[styles.subDetails,{flex:6}]} ><Text style={[styles.subDetailsText,styles.lightText]} >Meal plan :{this.props.bookingData.MealPlan}</Text></View>
                            <View style={styles.subDetailsEmpty}></View>
                            
                            </View>
                        </View>

                    </View>}
                </View>
            </Animated.View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    ListItemContainer: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth:1,

        // backgroundColor: 'yellow',
        // height: 50,
        // elevation: 5,
        // margin: 10,
        // borderRadius: 15,
        
        // padding: 10,
        backgroundColor:'#F5F5F5',
        marginVertical:14,
        borderTopLeftRadius:15,
        borderTopRightRadius:15
    },
    itemWrapper: {
        flex: 1,
        // borderWidth: 3,
        borderColor: 'purple',
        borderRadius: 15,
        // backgroundColor:'purple',

    },
    itemHeader: {
        // flex: 1,

        height: 100,
        elevation:10,
        shadowColor: 'rgba(0,0,0,1.0)',
        shadowOffset:{width:0,height:6},
        shadowOpacity: 0.2,
        shadowRadius: 13,
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        // backgroundColor: 'lime'
        // borderWidth:2
    },
    itemDesc: {
        // flex: 1,

        height: 200,
        // backgroundColor: 'royalblue',
        flexDirection: 'row',
    },
    itemHeaderWrapper: {
        flexDirection: 'row',
        flex: 1,
        // borderWidth: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    itemDateWrapper: {
        flexDirection: 'row',
        flex: 3,
        // borderWidth: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 12

    },
    timeSpanText:{
        fontWeight:'600',
        marginRight:5
    },
    itemFromToWrapper: {
        flexDirection: 'row',
        flex: 5,
        // borderWidth: 1,
        // justifyContent: 'center',
        paddingLeft: 12,
        alignItems: 'center',

    },
    itemChangeBookingStatus: {
        flex: 3,
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    changeStatusText:{
marginRight:25

    },
    itemCollapsableImage: {
        flexDirection: 'row',
        flex: 1,
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    datesWrapper: {
        flex: 13,
        // borderWidth: 1
        alignItems:'center',
        paddingTop:35
    },
    airplaneSeparator: {
        // borderWidth: 1,
        // width:15,
        flex: 3,
        // paddingTop:35,
        // borderStyle:'dashed'
        justifyContent: 'space-evenly',
            alignItems: 'center',
            // backgroundColor:'#F5F5F5'

},
    bookingDetails: {
        flex: 48,
        // borderWidth: 1,
        margin:15,
        borderRadius:15,
        paddingLeft:14
    },
    mainDetails: {
        flex: 24,
        // backgroundColor: 'skyblue',
        // margin: 12,
        // marginTop: 18,
        // borderRadius: 15,
        flexDirection: 'row',
        // borderTopLeftRadius:15,
        // borderTopRightRadius:15
    },
    airways: {
        flex: 3,
        // borderWidth: 2,

    },
    timeDetails: {
        flex: 18,
        // borderWidth: 2,
        // paddingLeft:10
    },
    sideDetails: {
        flex: 9,
        // backgroundColor: 'lightgreen',
        flexDirection:'row',
        
        // borderBottomLeftRadius:15,
        // borderBottomRightRadius:15
    },
    airlineIcon: {
        // Maxwidth:20,
        height: 20,
        marginVertical: 16,
        marginHorizontal: 8,
    },
    startEndCity: {
        flexDirection: 'row',
        // backgroundColor:'red',
        flex:1
    },
    startCity:{
        // borderWidth:1,
        marginRight:75,
        marginLeft:8
    },
    endCity:{
        // borderWidth:1,
        marginRight:75,
        marginLeft:8
    },
    semiText:{
        fontWeight:'600',
        //  textTransform: 'uppercase'
        color:'rgba(0,0,0,0.75)'
    
    },
    itemFromToStyles:{
        marginRight:20
    },
    startEndTimeWrapper:{
        flexDirection: 'row',
        // backgroundColor:'yellow',
        flex:1,
        alignItems: 'center',
    },
     midArrow:{

        // backgroundColor:'red',
        marginRight:25
    },
     endTime:{

        // backgroundColor:'red',
        marginRight:25
    },
    startTime:{

        // backgroundColor:'red',
        marginRight:25
    },
    notifIcon:{
        width:14,
        height:14
    },
    subDetailsIcon:{
        flex:1,
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    subDetails:{
        flex:5,
        justifyContent: 'center',
        // paddingLeft:8,
        // alignItems: 'center',
        // backgroundColor:'blue',
        // borderWidth:2,

    },
    subDetailsEmpty:{
        flex:4,
        // backgroundColor:'red'
    },    
    hoursText:{
        fontSize:18,


    },
    lightText:{
        fontSize:14,
        color:'rgba(0,0,0,0.5)'
    },
});

//make this component available to the app
export default ListItem;
