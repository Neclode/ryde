import React,{ useState} from 'react';
import { View , Button, Image, AsyncStorage} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import CamRoll from '../styles/comps/CameraRollStyles';


export default function Cam() {
  const [showPic, SetShowPic] = useState(false);
   const [Photo,SetPhoto] = useState("");
   const [picText, SetPickText] = useState("Add Profile Picture")

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
  return (
    <View style={CamRoll.Container}>
    {showPic ? <Image source={{ uri: Photo.uri}} style={CamRoll.ProfPic}/>:<Image source={source=require('../assets/icons/imagefill.png')}style={CamRoll.ProfPic}  />}
      <Button title={picText} onPress={handleChoosePhoto}/>
    </View>
  );
}