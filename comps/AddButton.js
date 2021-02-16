import React, {useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';

import ContactsStyles from '../styles/contacts/ContactsStyles';


function AddButton(props) {
    return (
        <TouchableOpacity onPress={()=>{props.setAddCPopup(true)}}>
        <View style={ContactsStyles.AddContainer}> 
          <Image 
          style={ContactsStyles.Add}
          source={require('../assets/icons/add.png')}
          />
        </View>
        </TouchableOpacity>
    )

}

export default AddButton;