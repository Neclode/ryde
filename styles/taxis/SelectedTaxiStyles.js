import {StyleSheet} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen';


var SelectedTaxiStyles = StyleSheet.create({
    Container: {
        flex:1,
        width: wp('100%'),
        backgroundColor: "#f4f4f4"

        // backgroundColor:'lightgreen'
    },

    FullPageContainer: {
        width: wp('100%'),
        height:hp('89%'),
        // backgroundColor:'lightgreen'
    },

    BackButton:{
        position:'absolute',
        zIndex:1,
        left:20,
        top:30
    },

    BackIcon:{
        height:35,
        width:35
    },

    TaxiImageContainer: {
        flex:1.25,
        backgroundColor:'gray',
    },

    TaxiInformationContainer: {
        flex:1.5,
        paddingHorizontal:15,
    },

    TaxiImg:{
        width:'100%',
        height:'100%',
    },

    TitleContainer: {
        paddingVertical: 30,
        flexDirection:'row'
    },

    InfoContainer: {
        marginBottom: 15
    },

    FavoriteIcon:{
        height:32,
        width:32
    },

    TaxiName:{
        flex:7,
        alignSelf:'flex-start',
        
    },

    TaxiFavorite:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    }
})

export default SelectedTaxiStyles;