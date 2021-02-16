import {StyleSheet} from 'react-native';

var HomePageStyles = StyleSheet.create({

  Container:{
    flex:1,
    padding:15,
    paddingTop: 10,
    backgroundColor:'#f4f4f4' 
  },

  FavContainer:{
    flexDirection:"row",
    marginLeft:-10,
  }, 

  FavBox:{
    // backgroundColor:"#f4f4f4",    
    width: '100%',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:15,
  },

  CompContainer: {
    width: '120%',
    left: '-10%',
    backgroundColor:"#efefef",    
    height: 350
  },

  ContactContainer:{
    width: "120%",
    left: '-4%',
    marginTop: 15,
    // backgroundColor: "lightyellow"
  },

  ContactHeader:{
   marginTop: 20,
  //  backgroundColor: "purple"
  },

  ContactContent:{
    // paddingLeft: 10
  },

  // Component

  ContactBox:{
    flexDirection:'row',
    width: "100%",
    marginRight: 50,
    alignItems: "center"
  },

  ContactIconBox:{    
    backgroundColor:"#235CA3", 
    height:70,
    width:70,
    borderRadius:150,
    alignItems:'center',
    justifyContent:'center',
    margin: 10,
  },
  AddContactBox:{    
    backgroundColor:"#a5a5a5",
    height:70,
    width:70,
    borderRadius:150,
    alignItems:'center',
    justifyContent:'center',
    margin: 10,
  },

  ProfPic: {
    width:'100%',
    height:'100%',
    borderRadius:150,
    
  },

  ContactList:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },

  CompTextBox:{
    minHeight: 100
  }

});

export default HomePageStyles;