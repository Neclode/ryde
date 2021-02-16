import {StyleSheet} from 'react-native';

var Buttons = StyleSheet.create({
  
  // General Buttons
  Main: {
    marginTop: 20,
    marginBottom: 20,
    height:53,
    textAlign:'center',
    justifyContent:'center',
    backgroundColor:"#3971b3",
    borderRadius: 20,
    alignItems: "center"
  },
  MainText: {
    color:"white",
    fontFamily:"Assistant-SemiBold",
    fontSize:17
  },
  Alt: {
    marginTop: 20,
    marginBottom: 20,
    height:53,
    textAlign:'center',
    justifyContent:'center',
    backgroundColor:"#0774AA",
    borderRadius: 20,
    alignItems: "center"
  },
  TextAltColor: {
    color: "#b73b3b"
  },
  Delete: {
    marginTop: 20,
    marginBottom: 20,
    height:40,
    width: "50%",
    textAlign:'center',
    alignItems: "center",
    justifyContent:'center',
    backgroundColor:"#fff",
    // borderWidth:1,
    borderColor: "#b73b3b",
    borderRadius: 20
  },

  // Taxis
  Taxi: {
    marginTop:10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:75,
    backgroundColor:"#ffffff",
    borderRadius: 6
  },
  TaxiText: {
    textAlign:"left",
    color:"#141414",
    fontFamily:"Assistant-Semibold",
    fontSize:20
  },

  IconCont: {
   flex:1,
    justifyContent:'center',
    alignItems:'center',
    height: "100%"
  },
  TextCont: {
    flex:4.5,
    justifyContent:'center',
    height: "100%"
  },
Img: {
    width:22,
    height:22
  },
  ArrowImg: {
    width:12,
    height:12,
  },  

  CallBut: {
    marginTop: 25,
    height:65,
    textAlign:'center',
    justifyContent:'center',
    backgroundColor:"#2c6fb2",
    borderRadius: 20
  },

  CallButText: {
    textAlign:"center",
    color:"white",
    fontFamily:"Assistant-SemiBold",
    fontSize:25
  },

  // Skytrains
  SkyTrain: {
    marginTop:10,
    // marginBottom:10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:75,
    backgroundColor:"#235CA3",
    borderRadius: 8,
  },

  // HomePage
  HomePageButton: {
    padding: 15,    
    position:'relative',
  },

  // Schedules
  SchedCont: {
    marginRight: -20,
    marginLeft: -20
  },
  TouchWrap:{
    alignItems:"center",
    backgroundColor:"#3794DA",
    height:50,
    justifyContent:"space-around",
    borderBottomRightRadius:6,
    borderBottomLeftRadius:6,
    flexDirection:"row",
    
},
TouchText:{
    textAlign:"center",
    color:"white",
    fontFamily:"Assistant-SemiBold",
    fontSize:20,
    marginRight:50
},
time:{
    height:35,
    width:35
},
next:{
    height:30,
    width:30
},
})

export default Buttons; //test