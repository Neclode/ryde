import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, AsyncStorage, TouchableOpacity,Image, SafeAreaView } from 'react-native';
import Communications from 'react-native-communications';
import {Actions} from 'react-native-router-flux';
import * as Animatable from "react-native-animatable";

// styles
import FavStyles from '../../styles/home/FavStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';


export default function FavTaxi(){
  const [ favTaxi, setFavTaxi ] = useState([]);
  
    // GETTING CONTACTS USING ASYNC
    async function GetFavTaxi() {
      var datanew = await AsyncStorage.getItem("storage")
      var parseFavTaxi = JSON.parse(datanew);
    // console.log(parseFavTaxi.FavTaxi[0].favtaxiphone);
      setFavTaxi(parseFavTaxi.FavTaxi);
    }


    useEffect(() => {

      GetFavTaxi();

    },[]);
    var FavoriteTaxi = null;

    if(favTaxi.length === 0){

      FavoriteTaxi = (
        <View style={FavStyles.CompBox}>
          <Text style={Fonts.Body}>
          Start by adding your favourite taxis for quick access. You can add, or remove favorites anytime.
          </Text>
        </View>
      )
    } else {

      FavoriteTaxi = (
        <View style={FavStyles.CompBox}>
        {

          favTaxi.map((obj, i) => {

            return(
              <Animatable.View animation='fadeInDown' duration={400}  style={FavStyles.FavCont}>


              <View style={[FavStyles.FavPieceCont,]}>
                <TouchableOpacity style={{flex:5.5}} onPress={()=>{ Actions.SelectedTaxi({ taxiname:obj.favtaxiname, phone:obj.favtaxiphone, img: obj.favtaxiimg, address:obj.favtaxiaddress,website:obj.favtaxiwebsite })} }>
                        <View style={FavStyles.StopName}>

                            {/* Image */}
                            <View>
                              <Image style={FavStyles.TaxiIcon} source={require('../../assets/icons/taxi-active.png')} />
                            </View>
              
                            {/* Address */}
                            <View style={FavStyles.Address}>
                              <Text numberOfLines={1} style={FavStyles.BusName}>{obj.favtaxiname}</Text> 
                              <Text numberOfLines={1} style={FavStyles.RouteName}>{obj.favtaxicity}, BC</Text> 
                            </View>
                        </View>

                </TouchableOpacity>
              
      
                {/* Call Now */}


                <TouchableOpacity style={[FavStyles.CallCont]} onPress={()=>{ Communications.phonecall( obj.favtaxiphone , true)} }  >
                     <Image style={FavStyles.PhoneIcon} source={require('../../assets/icons/phone.png')} />   
                     <Text style={FavStyles.TaxiCall}>CALL NOW</Text>
                 </TouchableOpacity>

      
              </View>

            </Animatable.View>
            )
  
          })
  
        }
      </View>
      )

    }


  return(

    <View>
      { FavoriteTaxi }
    </View>
  )
};