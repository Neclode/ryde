import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, Button, AsyncStorage, ScrollView, Animated } from 'react-native';
import Communications from 'react-native-communications';
import Geolocation from '@react-native-community/geolocation';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Actions } from 'react-native-router-flux';
import * as Animatable from "react-native-animatable";



//Components
import AddButton from '../../comps/AddButton';
import AddPopup from '../../comps/AddPopup';
import EmptyContacts from './EmptyContacts';

//Styles
import ContactsStyles from '../../styles/contacts/ContactsStyles';
import Fonts from '../../styles/FontsStyles';
import Divider from '../../comps/Divider';

function Contacts(props) {

  // USE STATES
  const [AddCPopup, setAddCPopup] = useState(false);
  const [Contact, setContact] = useState([]);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });



  // USE EFFECT TO GET USER'S CURRENT LOCATION
  useEffect(()=>{
    // Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition(
      pos => {
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        });
      }
    );
  },[]); 

  
  // SETTING THE GOOGLE MAPS LINK TO INCLUDE USER'S LOCATION 
  latitude = position.latitude;
  longitude = position.longitude;
  var location = 'https://www.google.com/maps/place/' + latitude + '+' + longitude + '/?entry=im'


  // GETTING CONTACTS USING ASYNC
  async function GetContacts() {
    var data = await AsyncStorage.getItem("storage")
    data = JSON.parse(data);
    console.log('Data = ', data);
    setContact(data.Contacts);

  }  


    // DELETE CONTACT FUNCTION

    async function DeleteContact(index){
      var c = Contact;
      console.log("this ", c);
      c.splice(index, 1);
      var data = await AsyncStorage.getItem("storage");
      parsedelete = JSON.parse(data);
      parsedelete.Contacts = c;
      await AsyncStorage.setItem("storage", JSON.stringify(parsedelete));
      GetContacts();
      console.log(Contact);
    }
    
  useEffect(() => {
    GetContacts();
  }, [props.navigation.state.params]);
  //console.log("refresh", props.navigation.state.params);

  

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#f4f4f4' }}>
      <View style={ContactsStyles.Container}>

        {/* Add Popup Component */}
        <AddPopup AddCPopup={AddCPopup} setAddCPopup={setAddCPopup} />

        {/* Title */}
        <View style={ContactsStyles.TitleCont}>

          <Text style={[Fonts.Title, { flex: 10 }]}>Contacts</Text>
          <View style={ContactsStyles.TitleImg}>

            {/* Add Button Component */}
            <AddButton setAddCPopup={setAddCPopup} />
          </View>
        </View>

        </View>


        <ScrollView>

          { Contact.length === 0 ? <EmptyContacts /> : null }


          {
            Contact.map((obj, i) => {

              // DELETE CONTACT SWIPE POPUP

              var sref= React.createRef();
   
              const RightActions = (progress, dragX) => {
                return (
                  <TouchableOpacity onPress={()=>{

                    setTimeout(()=>{
                      DeleteContact(i);
                    },300);   
                    
                    sref.current.close();

                    console.log(sref.current)
                    }}>
                  <View style={[ContactsStyles.rightAction]}>
                     <Text style={ContactsStyles.actionText}>Delete</Text>
                  </View>
                  </TouchableOpacity>
                )
              }

              // END OF DELETE CONTACT SWIPE POPUP


              return (
                
                <Animatable.View animation='fadeInDown' duration={400}>

                  <TouchableOpacity
                  onPress={() => Actions.EditContact(
                    {
                      FName:obj.firstname,
                      LName:obj.lastname,
                      PNumber:obj.phone
  
                  }
                  )}
                  >
                  
                  <Swipeable renderRightActions={RightActions} ref={sref}>
                    <View style={ContactsStyles.UserContainer}>

                           <Text numberOfLines={1} style={[Fonts.Name]}> {obj.firstname} {obj.lastname} </Text>


                      {/* Message/Call Container */}
                      <View style={ContactsStyles.ImageCont}>
                        {/* Message */}
                        <TouchableOpacity onPress={()  => Communications.text(obj.phone, "Hey " + obj.firstname + ", I'm in need of a Ryde. Are you able to pick me up? This is my current location: " + location)}
                              >
                          <View style={ContactsStyles.ImageBox}>
                            <Image style={ContactsStyles.Image} source={require('../../assets/icons/message.png')} />
                          </View>
                        </TouchableOpacity>

                        {/* Call */}
                        <TouchableOpacity onPress = {() => Communications.phonecall( obj.phone , true)}>
                          <View style={ContactsStyles.ImageBox}>
                            <Image style={ContactsStyles.Image} source={require('../../assets/icons/phone.png')} />
                          </View>
                        </TouchableOpacity>
                      </View>
                      {/* End of Message/Call Container */}
                    </View>
                    </Swipeable>
                    </TouchableOpacity>
                  <Divider />
                  </Animatable.View>
              )
            })
          }


        </ScrollView>

    </SafeAreaView>
  )
}

export default Contacts;