import React, {useState} from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';

import TabBarStyles from '../styles/comps/TabBarStyles';

function TabBar(){
    // Different Text Colors
    var ActiveTextColor = '#2c70bf';
    var TextColor = '#333333';

    // useState initial for each section of nav bar
    const [NavHomeImg, setNavHomeImg] = useState(require('../assets/icons/home-active.png'));
    const [NavHomeTxt, setNavHomeTxt] = useState(ActiveTextColor);

    const [NavBusImg, setNavBusImg] = useState(require('../assets/icons/bus.png'));
    const [NavBusTxt, setNavBusTxt] = useState(TextColor);

    const [NavSkyTrainsImg, setNavSkyTrainsImg] = useState(require('../assets/icons/skytrain.png'));
    const [NavSkyTrainsTxt, setNavSkyTrainsTxt] = useState(TextColor);

    const [NavTaxiImg, setNavTaxiImg] = useState(require('../assets/icons/taxi.png'));
    const [NavTaxiTxt, setNavTaxiTxt] = useState(TextColor);

    const [NavContactsImg, setNavContactsImg] = useState(require('../assets/icons/contact.png'));
    const [NavContactsTxt, setNavContactsTxt] = useState(TextColor);

  return(

      <View style={TabBarStyles.Container}>

            <TouchableOpacity activeOpacity={1} style={TabBarStyles.Button} onPress={() => {Actions.reset('HomePage'); 
                              setNavHomeImg(require('../assets/icons/home-active.png')); setNavHomeTxt(ActiveTextColor);
                              setNavContactsTxt(TextColor); setNavBusTxt(TextColor); setNavSkyTrainsTxt(TextColor); setNavTaxiTxt(TextColor);
                              setNavContactsImg(require('../assets/icons/contact.png')); setNavBusImg(require('../assets/icons/bus.png')); setNavSkyTrainsImg(require('../assets/icons/skytrain.png')); setNavTaxiImg(require('../assets/icons/taxi.png')); ;
                              }}>
            <Image resizeMode='contain' style={TabBarStyles.Img}
              source={NavHomeImg}
            />
            <Text style={[TabBarStyles.Text, {color:NavHomeTxt}]}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} style={TabBarStyles.Button} onPress={() => { Actions.reset('BusSchedules'); 
                              setNavBusImg(require('../assets/icons/bus-active.png')); setNavBusTxt(ActiveTextColor);
                              setNavHomeTxt(TextColor); setNavSkyTrainsTxt(TextColor); setNavTaxiTxt(TextColor); setNavContactsTxt(TextColor);
                              setNavHomeImg(require('../assets/icons/home.png')); setNavSkyTrainsImg(require('../assets/icons/skytrain.png')); setNavTaxiImg(require('../assets/icons/taxi.png')); setNavContactsImg(require('../assets/icons/contact.png')); ;
                              }}>
            <Image resizeMode='contain' style={TabBarStyles.Img}
              source={NavBusImg}
            />
            <Text style={[TabBarStyles.Text, {color:NavBusTxt}]}>Buses</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} style={TabBarStyles.Button} onPress={() => { Actions.reset('SkyTrainSchedules'); 
                              setNavSkyTrainsImg(require('../assets/icons/skytrain-active.png')); setNavSkyTrainsTxt(ActiveTextColor);
                              setNavHomeTxt(TextColor); setNavBusTxt(TextColor); setNavTaxiTxt(TextColor); setNavContactsTxt(TextColor);
                              setNavHomeImg(require('../assets/icons/home.png')); setNavBusImg(require('../assets/icons/bus.png')); setNavTaxiImg(require('../assets/icons/taxi.png')); setNavContactsImg(require('../assets/icons/contact.png')); ;
                              }}>
            <Image resizeMode='contain' style={TabBarStyles.Img}
              source={NavSkyTrainsImg}
            />
            <Text style={[TabBarStyles.Text, {color:NavSkyTrainsTxt}]}>SkyTrains</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} style={TabBarStyles.Button} onPress={() => { Actions.reset('Taxis'); 
                              setNavTaxiImg(require('../assets/icons/taxi-active.png')); setNavTaxiTxt(ActiveTextColor);
                              setNavHomeTxt(TextColor); setNavBusTxt(TextColor); setNavSkyTrainsTxt(TextColor); setNavContactsTxt(TextColor);
                              setNavHomeImg(require('../assets/icons/home.png')); setNavBusImg(require('../assets/icons/bus.png')); setNavSkyTrainsImg(require('../assets/icons/skytrain.png')); setNavContactsImg(require('../assets/icons/contact.png')); ;
                              }}>
            <Image resizeMode='contain' style={TabBarStyles.Img}
              source={NavTaxiImg}
            />
            <Text style={[TabBarStyles.Text, {color:NavTaxiTxt}]}>Taxis</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={1} style={TabBarStyles.Button} onPress={() => { Actions.replace('Contacts'); 
                              setNavContactsImg(require('../assets/icons/contact-active.png')); setNavContactsTxt(ActiveTextColor);
                              setNavHomeTxt(TextColor); setNavBusTxt(TextColor); setNavSkyTrainsTxt(TextColor); setNavTaxiTxt(TextColor);
                              setNavHomeImg(require('../assets/icons/home.png')); setNavBusImg(require('../assets/icons/bus.png')); setNavSkyTrainsImg(require('../assets/icons/skytrain.png')); setNavTaxiImg(require('../assets/icons/taxi.png')); ;
                              }}>
            <Image resizeMode='contain' style={TabBarStyles.Img}
              source={NavContactsImg}
            />
            <Text style={[TabBarStyles.Text, {color:NavContactsTxt}]}>Contacts</Text>
            </TouchableOpacity>



      </View>
  )
};

export default TabBar;