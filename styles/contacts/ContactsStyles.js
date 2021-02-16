import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';
import { red, white } from 'ansi-colors';


var ContactsStyles = StyleSheet.create({
Container: {
  backgroundColor:'#f4f4f4',
    padding: 15,
    marginTop: 20,
    height:100,
},
TitleCont: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  // marginBottom: 40,
  
},
TitleImg: {
  display: "flex",
  flex: 1,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "100%"
},

UserContainer: {
  flex:1,
  // marginTop: 5,
  // marginBottom: 5,
  display: "flex",
  alignItems:'center',
  flexDirection: "row",
  backgroundColor:'#f4f4f4' 
},

ImageCont: {
  display: "flex",
  flex: 1.5,
  paddingRight:15,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%"
},
ImageBox:
 {
   width: "100%",
   padding: 20,
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
 },
Image: {
  height: 25,
  width: 26
},

// Add Button Styles

AddContainer:{
  width:50, 
  height:40, 
  justifyContent:'center', 
  alignItems:'center', 
  marginRight:15,
},
Add: {
  width: 25,
  height: 25,
  // marginRight:15
  // resizeMode : 'stretch'
},


// Modal Styles

ModalContainer : {
  position:'absolute',
  bottom:0,
  width: wp('100%'),
  height:300,
  padding:30,
  margin:-20,
  backgroundColor:'white',
  alignItems:'flex-start'
},

CancelText:{
  color:'red'
},

ContContainer: {
  flex:1, 
  width:wp('100%'),
  height:50, 
  justifyContent:'center'

},

rightAction:{
  backgroundColor:'#cb1b1b',
  width:100,
  height:'100%',
  alignItems:'center',
  justifyContent:'center'

},
actionText:{
  textAlign:'center',
  fontFamily:'Assistant-Regular',
  fontSize:18,
  color:'white',
  textAlign:'center'
}

})

export default ContactsStyles;