import {StyleSheet} from 'react-native';

var StartPageStyles = StyleSheet.create({

  Container:{
    flex:1,
    padding:15,
    backgroundColor:'#f4f4f4',
    justifyContent:'center'

  },

  Logo: {
    alignItems: "center",
    marginTop: "5%",
    marginBottom:20
  },
  Title: {
    alignItems: "center",
    marginTop: 0
  },
  Body: {
    textAlign: "left",
    marginTop: 0
    // alignItems: "center"
  },

  Inp: {
    textAlign:'center',
    marginTop: 15,
    height:45,
    width:'80%',
    padding:10,
    color:'black',
    fontSize:18,
    borderBottomColor: "#D6D6D6",
    borderBottomWidth:3
  },

  Button: {
    marginTop: 20,
    marginBottom: 20,
    width:'90%',
    height:55,
    textAlign:'center',
    justifyContent:'center',
    backgroundColor:"#3971b3",
    borderRadius: 15,
    alignItems: "center"
  },
});

export default StartPageStyles;