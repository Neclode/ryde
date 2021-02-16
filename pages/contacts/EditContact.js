import React,{useState,useEffect} from 'react';
import { Alert, View, Text, AsyncStorage, Button, TouchableOpacity, SafeAreaView, Image, TextInput } from 'react-native';
import {Actions} from 'react-native-router-flux';
import data from '../../storage';

// Components
import CamRoll from '../../comps/CameraRoll';
import ImagePicker from 'react-native-image-picker';
import Divider from '../../comps/Divider';

// Styles
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';
import EditContactStyles from '../../styles/contacts/EditContactStyles';

function EditContact({FName,LName,PNumber}) {

  const [showPic, SetShowPic] = useState(false);
  const [Photo,SetPhoto] = useState("");
  const [Contact, setContact] = useState([]);
  const [picText, SetPickText] = useState("Edit Profile Picture");
  const [FNameType,setFName] = useState('');
  const [LNameType,setLName] = useState('');
  const [PNumberType,setPNumber] = useState('');

 handleChoosePhoto = () => {
   const options = {
     noData: true,
     tintColor:'#1970bf'
   };

   ImagePicker.showImagePicker(options, response => {
     if (response) {
       SetPhoto(response);
       SetShowPic(true);
       SetPickText('Edit Profile Picture')
     }
     else {
       SetPickText('Add Profile Picture')
       SetShowPic(false);
       
     }
   });
 };
 useEffect(() => {
  GetContacts();
}, []);
 async function GetContacts() {
    var data = await AsyncStorage.getItem("storage")
    data = JSON.parse(data);
    console.log('Data = ', data);
    setContact(data.Contacts);

  } 
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

async function checkContact(){
  Alert.alert('Contact Deleted', "Taking you back to Contacts page")
          await DeleteContact();
          Actions.replace("Contacts");
}
  return (

    <SafeAreaView style={EditContactStyles.Container}>
      <View style={EditContactStyles.Container}>

        
        {/* Nav Bar */}

        <View style={EditContactStyles.TopBar}>

          {/* Contacts */}
          <View style={EditContactStyles.BackNav}>
          <TouchableOpacity style={EditContactStyles.flexRow}
          onPress={() => {Actions.replace("Contacts");}}>

            <Image 
            style={EditContactStyles.BackArrow}
            source={require('../../assets/icons/backarrow-blue.png')}
            />
        <Text style={[Fonts.NavLink, {marginTop: -3}]}>Contacts</Text>
        </TouchableOpacity>
        </View>


          {/* Title */}
          {/* <View style={EditContactStyles.TitleNav}>
          <Text style={Fonts.NavTitle}>Edit Contact</Text>
          </View> */}


          {/* Save */}

          <View style={EditContactStyles.EditNav}>
          <TouchableOpacity style={EditContactStyles.flexRow}>
          <Text style={[Fonts.NavLink, EditContactStyles.EditText]} onPress={ async () => {}}>Save</Text>
                  </TouchableOpacity>
          </View>


        </View>

        {/* End of Nav Bar */}



        {/* Profile Pic */}

        {/* Camera Component */}
        <View style={EditContactStyles.CamContainer}>
        {showPic ? <Image source={{ uri: Photo.uri}} style={EditContactStyles.ProfPic}/>:<Image source={source=require('../../assets/icons/imagefill.png')}style={EditContactStyles.ProfPic}  />}
        <Button title={picText} onPress={handleChoosePhoto}/>
        </View>


        <View style={EditContactStyles.NameCont}>

        {/*First Name Input */}
        <TextInput style={[Fonts.Inp, EditContactStyles.EditInp]} placeholder={FName} placeholderTextColor='black'
        onChangeText = {(Text)=> setFName(Text)} value={FNameType}
        />

        {/*Last Name Input */}
        <TextInput style={[Fonts.Inp, EditContactStyles.EditInp]} placeholder={LName} placeholderTextColor='black'
        onChangeText = {(Text)=> setLName(Text)} value={LNameType}
        />

        
        {/* Phone Number Input */}
        <TextInput style={[Fonts.Inp, EditContactStyles.EditInp]} keyboardType={'number-pad'} placeholder={PNumber} placeholderTextColor='black' maxLength={10}
        onChangeText = {(Text)=> setPNumber(Text)} value={PNumberType}
        />

      </View>

{/* 
      <View style={EditContactStyles.Spacer}></View> */}


      {/* Delete */}

      {/* <View style={EditContactStyles.FWDivider}></View> */}
      <View style={{alignItems: "center"}}>
     
      {/* <TouchableOpacity>
        <Text style={Fonts.Delete}>Delete Contact</Text>
      </TouchableOpacity> */}

        <TouchableOpacity style={Buttons.Delete} onPress= {()=>{
            Alert.alert(
              'Delete Contact',
              'Are you sure you want to delete this contact?',
              [
                {text: 'No', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
                {text: 'Yes', onPress: () =>{ console.warn('YES Pressed'), checkContact()}}
              ]
            
      )
      }}>
              <Text style={Buttons.TextAltColor}>Delete Contact</Text>
          </TouchableOpacity>

      </View>
      {/* <View style={EditContactStyles.FWDivider}></View> */}

  </View>
</SafeAreaView>
  )
}

export default EditContact;