import {StyleSheet} from 'react-native';

var AContactStyles = StyleSheet.create({
Container: {
  flex:1,
  padding:15,
  paddingTop: 10,
  backgroundColor:'#f4f4f4' 
},
TopBar: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    height:30,
    width:'100%'
},
CamContainer: {
    alignItems: 'center', justifyContent: 'center',
    marginTop:20,
  },

  ProfPic: {
    width: 120, height: 120, borderRadius:100,
  }


})

export default AContactStyles;