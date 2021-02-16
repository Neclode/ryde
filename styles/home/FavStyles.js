import {StyleSheet} from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

var FavStyles = StyleSheet.create({
  CompBox:{
    paddingLeft: 25,
    paddingRight: 25,
    alignItems:"flex-start", 
    justifyContent:'flex-start'
  },

  FavCont: {
    width: "100%",
  },
  FavPieceCont: {
    backgroundColor: "#fff",
    flexDirection: "row",
    marginBottom: 7,
    borderRadius: 15
  },

  // For buses
  StopName: {
    flexDirection: "row",
    flex: 4,
    padding: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  BusIcon: {
    width: 30,
    height: 35
  },
  Address: {
    flex: 3,
    paddingLeft: 20,
    paddingRight: -10,
  },
  BusName: {
    color: "#3971B3",
    fontSize: 20,
    fontFamily: "Assistant-SemiBold",
  },
  RouteName: {
    color: "#3971B3",
    fontSize: 14,
    fontFamily: "Assistant-Regular",
    width: "90%",
  },

  RightRouteTime: {
    color: "#3971B3",
    fontSize: 14,
    fontFamily: "Assistant-Regular",
    width: "90%",
    textAlign:'center'
  },

  TimeCont: {
    // backgroundColor:'green',
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10
    // backgroundColor: "pink"
  },


  // For Taxis
  TaxiIcon: {
    width: 35,
    height: 30
  },
  PhoneIcon: {
    width: 25,
    height: 25,
    resizeMode:'contain',
    marginBottom: 5
  },
  TaxiCall: {
    color: "#3971B3",
    fontSize: 12,
    fontFamily: "Assistant-SemiBold",
  },
  CallCont: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
});


export default FavStyles;