import React from 'react';
import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

var BusRouteStyles=StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor: "#3971B3"
    },
    TopView:{
        flex:0.5,
        backgroundColor:"#3971B3",
        padding: 15
    },

    // Blue part
    NavBar:{
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
    },

    NavTitle: {
        flex: 4,
        textAlign: "center",
    },

    ArrowCont: {
        flex: 0.5,
        justifyContent: "center"
    },
    
    BackArrow:{
        height:20,
        width:20,
        resizeMode:'contain'
    },


    ImgStyles:{
        flexDirection:"row",
        width:"100%"
    },
    MidStyles:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        height:"80%"
    },
    WhiteBus:{
        height:60,
        width:60,
        margin:10 
    },
    BotStyles:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    
//test
    // Doesn't do anything when you change the value of flex
    ScrollView:{
        flex:1,
        backgroundColor: "#EEEEEE"
    },
    BusView:{
        height: hp('10%'),
        backgroundColor:"#EEEEEE",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "rgba(0, 0, 0, 0.1)",
        borderBottomWidth: 1,
    },
    StopName: {
        flexDirection: "row",
        flex:4
    },
    BusCont: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    BusIcon: {
        width: 30,
        height: 35
    },
    Address: {
        justifyContent: "center",
        flex: 3,
        paddingRight: 20,
    },
    StopNum: {
        flex: 1,
        marginLeft: 10,
        height: 35
    }
});

export default BusRouteStyles;
