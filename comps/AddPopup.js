import React, {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';
import Modal from "react-native-modal";

//Styles
import AddPopupStyles from '../styles/comps/AddPopupStyles';


function AddPopup(props) {

    console.log(props.setAddCPopup)
 
  return (
    
      <Modal isVisible={props.AddCPopup} hideModalContentWhileAnimating={true} backdropTransitionOutTiming={0} 
             onBackdropPress={() => props.setAddCPopup(false)} onSwipeComplete={() => props.setAddCPopup(false)} swipeDirection="down"
             animationInTiming={550} animationOutTiming={850}>
        <View style={AddPopupStyles.Container}>  

          <View style={AddPopupStyles.ImgCont}>
            <Image style={AddPopupStyles.Img}source={require('../assets/icons/swipe.png')}/>
          </View>

          <Text style={AddPopupStyles.Heading}>Add Contact</Text>

          <TouchableOpacity style={AddPopupStyles.TextCont}
          onPress={ () => { props.setAddCPopup(false), Actions.AddContact() } }>
            <Text style={AddPopupStyles.Text}>Manually Add Contact</Text>
          </TouchableOpacity>

          <TouchableOpacity style={AddPopupStyles.TextCont} onPress={() => alert('This feature will be available in a future update')}>
            <Text style={AddPopupStyles.Text}>Import Contact From Phone</Text>
          </TouchableOpacity>

          <TouchableOpacity style={AddPopupStyles.TextCont} onPress={()=>{ props.setAddCPopup(false)}}>
            <Text style={[AddPopupStyles.Text, AddPopupStyles.CancelText]}>Cancel</Text>
          </TouchableOpacity>
        </View>
       </Modal>
  )
}

export default AddPopup;