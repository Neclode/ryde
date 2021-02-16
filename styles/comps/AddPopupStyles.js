import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';

var AddPopupStyles = StyleSheet.create({

Container : {
  position:'absolute',
  bottom:0,
  width: wp('100%'),
  height:300,
  paddingHorizontal:30,
  margin:-20,
  backgroundColor:'white',

  borderRadius: 15,
  borderColor: '#fff'
},

ImgCont:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    marginBottom:20,
},

Img:{
    width:35,
    resizeMode:'contain',
},

Heading:{
fontSize:25,
  fontFamily:"Assistant-Bold",
  marginBottom:10,
},

TextCont:{
    width:'100%',
    height:50,
    justifyContent:'center',
},

Text:{
  fontFamily:"Assistant-Regular",
  color:'black',
  fontSize:18,
},

CancelText:{
  fontFamily:"Assistant-SemiBold",
  color:'#e14b4b',
},


})

export default AddPopupStyles;