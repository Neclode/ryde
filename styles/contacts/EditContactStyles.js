import {StyleSheet} from 'react-native';

var EditContactStyles = StyleSheet.create({
  Container: {
    flex:1,
    padding:15,
    paddingTop: 10,
    backgroundColor:'#f4f4f4' 
  },
  TopBar: {
    flexDirection: 'row',
    height:30,
  },
  BackArrow:{
    height:20,
    width:20,
    resizeMode:'contain'
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%"
  },
  BackNav: {
    flexDirection: "row",
    flex: 1,
  },
  TitleNav: {
    flex: 1,
  },
  EditNav: {
    flex: 1,
    alignItems: "center"
  },
  EditText: {
    justifyContent: "center",
    marginTop: -2,
    marginRight: 10,
    textAlign: "right"
  },
  IconCont: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  IconBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "50%"
  },
  Image: {
    height: 30,
    width: 31
  },
  CamContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  ProfPic: {
    width: 120, 
    height: 120, 
    borderRadius:100,
  },
  NameCont: {
    marginTop: 10,
  },
  EditInp: {
    borderWidth: 0,
    marginBottom: 10,
    // backgroundColor: "#e9e9ee"
  },

  FWDivider: {
    backgroundColor:'rgba(0,0,0,0.1)',
    width:"120%",
    marginLeft: -20,
    height:1
  },

  Spacer: {
    // backgroundColor: "#e9e9ee",
    width: "120%",
    marginLeft: -20,
    height: 50
  },

  ButtonCont: {
    marginTop: 10
  }
  
  })
  
  export default EditContactStyles;