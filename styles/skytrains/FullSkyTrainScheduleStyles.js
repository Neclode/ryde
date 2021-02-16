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
        flex:0.45,
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
        width: "100%"
    },
    MidStyles:{
      marginLeft: 15,
      marginTop: 10
    },


    // Content
    Bottom:{
      flex:2,
      backgroundColor: "#eee",
      alignItems:"center",
      paddingTop: 20
    },

    ScheduleCont:{
        backgroundColor:"#DCDCDC",
        padding: 20,
        borderRadius:6,
        width:wp('90%'),

    },

    TimeCont:{
      height: 45,
      // justifyContent: 'center',
      flexDirection: "row",
      alignItems: "center",
      // backgroundColor: "pink"

    },  


});

export default FullBusStyles; //test