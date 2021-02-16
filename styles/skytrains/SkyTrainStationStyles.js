import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

var SkyTrainStationStyles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor: "#3971B3"
    },
    TopView:{
        flex:0.5,
        backgroundColor:"#3971B3",
        padding: 15,
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

    // Icon
    ImgStyles:{
    flexDirection:"row",
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


    // Content
    Bottom:{
        flex:1,
        backgroundColor: "#eee"
    },
    SectionCont:{
        justifyContent:"center",
        alignItems:"center",
    },


    // Schedules
    TimeCont:{
        backgroundColor:"#e5e5e5",
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        borderRadius:6,
        width:wp('90%'),
    },
    SchedView:{
        flexDirection: "row"
    },


    // First Train
    OtherCont:{
        marginTop:20,
        // backgroundColor: "pink",
        // width:wp('90%'),
    },
    ColumnView:{
        flexDirection:"row",
        width:wp('90%'),
    },
    FirstTrain:{
        backgroundColor:"#235CA3",
        justifyContent:"center",
        padding: 5,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
    },

    OtherDays:{
        backgroundColor:"#D2D2D2",
        flex:1,
        paddingBottom: 5,
        paddingLeft: 15,
        // alignItems: "center",
        borderBottomLeftRadius:3,
    },

    OtherTime:{
        backgroundColor:"#DCDCDC",
        flex:1,
        alignItems:"center",
        borderBottomRightRadius:3
    },

SecondTrainView:{
    backgroundColor:"#235CA3",
    justifyContent:"center",
    // height:"20%",
    borderTopLeftRadius:6,
    borderTopRightRadius:6,
},
OtherCont2:{
    width:wp('90%'),
},
});

export default SkyTrainStationStyles; //test