import React from 'react';
import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

var SkyTrainRouteStyles=StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor: "#3971B3"
    },
    TopView:{
        flex:0.4,
        backgroundColor:"#3971B3",
        padding:15
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
        width:"100%",
    },
    MidStyles:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        height:"85%"
    },
    WhiteTrain:{
        height:60,
        width:60,
        margin:10 
    },
    BotStyles:{
        flexDirection:"row",
        justifyContent:"space-between",
    },


     // Doesn't do anything when you change the value of flex
    ScrollView:{
        flex:1,   
        backgroundColor: "#EEEEEE"
    },
    TrainView:{
        height: hp('10%'),
        backgroundColor:"#EEEEEE",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "rgba(0, 0, 0, 0.1)",
        borderBottomWidth: 1,
    },
    StationName: {
        flexDirection: "row",
        flex:4
    },
    TrainCont: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    TrainIcon: {
        width: 30,
        height: 35
    },
    Address: {
        flex: 3,
        paddingRight: 20,
        justifyContent: "center"
    },
    TimeCont: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginBottom: 10
    }

});

export default SkyTrainRouteStyles; //test
