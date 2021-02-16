import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

var FullBusStyles =StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor: "#3971B3"
        
    },
    TopView:{
        flex:0.55,
        backgroundColor:"#3971B3",
        padding: 15,
    },

    // Blue part
    NavBar:{
        display: "flex",
        flex:1,
        flexDirection: "row",
        justifyContent:"center",
        // backgroundColor:'green'
    },

    NavTitle: {
        textAlign: "center",
    },

    BusRoute:{
      color:"white",
      fontFamily:"Assistant-Bold",
      fontSize:22,
    },

    ArrowCont: {
        flex: 1,
        justifyContent: "center",
        // backgroundColor:'yellow'
    },
    
    BackArrow:{
      height:20,
      width:20,
      resizeMode:'contain'
  },

    // Icon
    ImgStyles:{
        flexDirection:"row",
        width: "100%"
    },
    MidStyles:{
      marginLeft: 15,
      marginTop: 10
    },
    BusStopInfo:{
      flexDirection: "row",
      alignItems: "baseline",
    },


    // Content
    Bottom:{
      flex:2,
      backgroundColor: "#DCDCDC",
      alignItems:"center",
      paddingTop: 20
    },

    ScheduleCont:{
        backgroundColor:"#efefef",
        padding: 20,
        borderRadius:6,
        width:wp('90%'),

    },

    TimeCont:{
      height: 45,
      justifyContent: 'center',
    },  
    TimeOuterCont:{
      flexDirection:'row',
      justifyContent:"space-between",
      alignItems:'center',
      // backgroundColor:'green',
      height:40
    },
    TimeInnerCont:{
      flexDirection:'row',
      justifyContent:"center",
      alignItems:'center'
    },


});

//test
export default FullBusStyles;