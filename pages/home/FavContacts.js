import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, AsyncStorage, TouchableOpacity,Image } from 'react-native';
import Communications from 'react-native-communications';

//STYLES IMPORT
import HomePageStyles from '../../styles/home/HomePageStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';
import AContactStyles from '../../styles/contacts/AddContactStyles';

//COMPS IMPORT
import ContactPopup from '../../comps/ContactPopup';
import data from '../../storage';
import AddPopup from '../../comps/AddPopup';
import AddPopupStyles from '../../styles/comps/AddPopupStyles';

function FavContacts(){

  // Set Popup 
  const [ Popup, setPopup ] = useState(false);
  const [ AddCPopup, setAddCPopup ] = useState(false);

  // Favorite Contact List Async
  const [ favContact, setFavContact ] = useState([]);
  const [ curObj, setCurObj] = useState({});
  
  async function GetFavContacts() {
    var data = await AsyncStorage.getItem("storage");
    var parseContactName = JSON.parse(data);
    // console.log("imagenew",parseContactName.Contacts[0].firstname[0]);
    setFavContact(parseContactName.Contacts);
  }
  useEffect(() => {
    GetFavContacts();
  },[]);

  var showIcon = null;

  return(
      <View style={HomePageStyles.ContactBox}>

      {
        favContact.map((obj,i)=>{

          
          if (obj.image === undefined) {
            showIcon = (
              <View style={HomePageStyles.ContactIconBox}>
                <Text style={Fonts.ContactIconFont}> {obj.firstname[0].toUpperCase()} </Text>
              </View>
            ) } else {
              showIcon = (
                <View style={HomePageStyles.ContactIconBox}>
                <Image  source={{uri:obj.image}}style={HomePageStyles.ProfPic} />
                </View>
              )
            }
          
          return (
            <View style={[HomePageStyles.ContactList, {width:95}]}>

            {/* CONTACT  */}
            <TouchableOpacity onPress={() => {
              setCurObj(obj);
              setPopup(true)} }>
              
                {/* CONTACT ICON */}
                { showIcon }
                
                {/* CONTACT NAME */}
                <Text numberOfLines={1} style={[Fonts.ContactNameFonts, {textAlign:'center', fontSize:11, paddingHorizontal:15}]}>{obj.firstname}</Text>
            </TouchableOpacity>
            {/* END OF CONTACT */}
            </View>
                )
              })
            }

        {/* CONTACT CALL/MESSAGE POPUP */}
      <ContactPopup Popup={Popup} setPopup={setPopup} {...curObj} />
      <AddPopup AddCPopup={AddCPopup} setAddCPopup={setAddCPopup} />
      <TouchableOpacity style={[HomePageStyles.ContactList, {width:100, flexDirection:'column', justifyContent:'center', alignItems:'center'}]} onPress={()=>{setAddCPopup(true)}}>

          
          {/* CONTACT ICON */}
          <View style={[HomePageStyles.AddContactBox]}>
             <Text style={[Fonts.AddContactText]}> + </Text>
          </View>
          
          {/* CONTACT NAME */}
          <Text numberOfLines={1} style={[Fonts.ContactNameFonts, {fontFamily:'Assistant-Bold', textAlign:'center', fontSize:11, paddingHorizontal:15}]}>Add Contact</Text>
      </TouchableOpacity>

    </View>


  )
};

export default FavContacts;