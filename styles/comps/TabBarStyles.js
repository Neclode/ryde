import {StyleSheet} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';


var TabBarStyles = StyleSheet.create({
    Container: {
        width: wp('100%'),
        height:70,
        backgroundColor:'#ffffff',
        flexDirection:'row',

        shadowColor:'#000000',
        shadowOpacity:0.5,
        shadowRadius:1.75,
        shadowOffset: {
            height:1,
            weight:1
        }
    },

    Button:{
        flex:1,
     
        justifyContent:'center',
        alignItems:"center"
    },

    Img: {
       
        height: 30,
        width: 30
    },
    
    Text: {
        marginTop:5,
        fontSize:8.5,
    }

})

export default TabBarStyles;