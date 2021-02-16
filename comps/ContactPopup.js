import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Geolocation from '@react-native-community/geolocation';

import Modal from 'react-native-modal';
import Communications from 'react-native-communications';

//styles
import AddPopupStyles from '../styles/comps/AddPopupStyles';

export default function ContactPopup(props){

  console.log(props.firstname);
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

  return(
    
    <Modal isVisible={props.Popup} hideModalContentWhileAnimating={true}
    backdropTransitionOutTiming={0}
    onBackdropPress={() => props.setPopup(false)}
    onSwipeComplete={() => props.setPopup(false)}
    swipeDirection="down"
    animationInTiming={550} animationOutTiming={850}>

      <View style={AddPopupStyles.Container}>

        <View style={AddPopupStyles.ImgCont}>

          <Image style={AddPopupStyles.Img}source={require('../assets/icons/swipe.png')}/>

        </View>

        <Text style={AddPopupStyles.Heading}>{props.firstname} {props.lastname}</Text>

          <TouchableOpacity style={AddPopupStyles.TextCont}
                            onPress={()  => Communications.text( props.phone, 'Hey ' + props.firstname + ', im in need of a Ryde. Are you able to pick me up? This is my current location: ' + location )}
          >
            <Text style={AddPopupStyles.Text}>Message {props.firstname}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={AddPopupStyles.TextCont}
                            onPress = {() => Communications.phonecall( props.phone , true)}        
          >
            <Text style={AddPopupStyles.Text}>Call {props.firstname}</Text>
          </TouchableOpacity>


          <TouchableOpacity style={AddPopupStyles.TextCont}
            onPress={() => {props.setPopup(false)}}
          >
            <Text style={[AddPopupStyles.Text, AddPopupStyles.CancelText]}>
              Cancel
            </Text>
          </TouchableOpacity>

      </View>

    </Modal>

  )

}
