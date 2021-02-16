import React,{Component,useState,useEffect} from 'react';
import { View, Alert, Text, Linking, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';
import data from '../../storage.json';
import Communications from 'react-native-communications';
import * as Animatable from "react-native-animatable";



import SelectedTaxiStyles from '../../styles/taxis/SelectedTaxiStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

 export default function SelectedTaxi({taxiname,address,phone,website,img,city}){
    // console.log(city);

    var stringPhone = JSON.stringify(phone);
    var goToWebsite = null;
    var stringWebsite = JSON.stringify(website);

    console.log(stringWebsite)


    var notFavorited =  <Animatable.Image style={SelectedTaxiStyles.FavoriteIcon} source={require('../../assets/icons/favorite2.png')} delay={250} animation='bounceIn'/>;
    var taxiFavorited =  <Animatable.Image style={SelectedTaxiStyles.FavoriteIcon} source={require('../../assets/icons/favorite.png')} delay={250} animation='bounceIn' />;

    // const [ FavedNum, SetFavedNum ] = useState(1);
    const [ Faved, SetFaved ] = useState(false);
    const [FavArr,SetFavArr] = useState ([]);
    const [ favTaxiImg, setFavTaxiImg ] = useState(notFavorited);
    async function UpdateFavTaxi(){
        var datanew = await AsyncStorage.getItem("storage");
        if(!datanew){
            datanew = data;
        } else {
            datanew = JSON.parse(datanew)
        }
                if (Faved === false){
                    datanew.FavTaxi.push({
                        favtaxiname:taxiname,
                        favtaxiphone:phone,
                        favtaxicity:city,

                        favtaxiaddress:address,
                        favtaxiphone:phone,
                        favtaxiimg:img,
                        favtaxiwebsite:website
                    })
                    SetFavArr(datanew.FavTaxi);
                    SetFaved(true);
                    setFavTaxiImg(taxiFavorited);
            }else {
                DeleteFav()
            }
        console.log("test",datanew.FavTaxi);
        AsyncStorage.setItem("storage",JSON.stringify(datanew));
    };

    async function DeleteFav(){
        var data = await AsyncStorage.getItem("storage");
        parsedelete = JSON.parse(data);
        var favFilter = parsedelete.FavTaxi.filter((o,i)=>{
            return o.favtaxiname !== taxiname;
        });
        parsedelete.FavTaxi = favFilter;
        await AsyncStorage.setItem("storage", JSON.stringify(parsedelete));
        SetFaved(false);
        setFavTaxiImg(notFavorited);
        console.log(favFilter);
    }
    async function CheckColor(){
        var datanew = await AsyncStorage.getItem("storage");
        if (!datanew){
            setFavTaxiImg(notFavorited)
            console.log("hi");
        }
        else {
            datanew = JSON.parse(datanew)
        }
        var favFilter = datanew.FavTaxi.filter((o,i)=>{
            return o.favtaxiname === taxiname;
        });
        if(favFilter.length>0){
            setFavTaxiImg(taxiFavorited)
            SetFaved(true);
        } else {
            //its not in favourites.
            setFavTaxiImg(notFavorited)
            SetFaved(false);
        }
        console.log("filter",favFilter)
 
    }
    
    useEffect(()=>{

        CheckColor();
    },[]);

    // console.log(faved);

    function Website(){
        if (website === 'No Website Available'){  
            goToWebsite = Alert.alert('No Website Available', "This Taxi Company does not have a Website");
            
        } else {
            goToWebsite = Communications.web('https://' + website)
        }
    }

    return (
        
  
      <View style={SelectedTaxiStyles.Container}>
  
  <StatusBar hidden={true} />  
  
      <View style={SelectedTaxiStyles.Container}>
  
      <View style={SelectedTaxiStyles.BackButton}>
  
          <TouchableOpacity onPress={() => Actions.pop('Taxis')}>
          <Image
              style={SelectedTaxiStyles.BackIcon}
              source={require('../../assets/icons/back2.png')}
          />
          </TouchableOpacity>
  </View>
   
      <View style={SelectedTaxiStyles.TaxiImageContainer}>
          <Image
                  style={SelectedTaxiStyles.TaxiImg}
                  source={{uri:img}}
              />
      </View>
  <View style={SelectedTaxiStyles.TaxiInformationContainer}>
  
       <View style={SelectedTaxiStyles.TitleContainer}>
  
      <View style={SelectedTaxiStyles.TaxiName}>    
          <Text style={Fonts.TaxiTitle}>{taxiname}</Text>
      </View>

      <TouchableOpacity style={SelectedTaxiStyles.TaxiFavorite}
                        onPress={ async () => {

               UpdateFavTaxi();
                        }
                    }
      >

         {favTaxiImg}
      </TouchableOpacity>
  
      </View>
  
  
      <View style={SelectedTaxiStyles.InfoContainer}>
      <Text style={Fonts.TaxiHeading}>Address</Text>
      <Text style={Fonts.Body}>{address}</Text>
      </View>
  
      <View style={SelectedTaxiStyles.InfoContainer}>
      <Text style={Fonts.TaxiHeading}>Website</Text>
      <TouchableOpacity onPress = {() => Website()}>
      <Text style={[Fonts.Body, {textDecorationLine: 'underline' }]}>{website}</Text>
      </TouchableOpacity>
      </View>
  
      <View style={SelectedTaxiStyles.InfoContainer}>
      <Text style={Fonts.TaxiHeading}>Phone Number</Text>
      <TouchableOpacity onPress = {() => Communications.phonecall( phone , true)}>
      <Text style={Fonts.Body}>{phone}</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity  style={Buttons.CallBut} onPress = {() => Communications.phonecall( phone , true)}>
      <Text style={Buttons.CallButText}>Call Taxi</Text>
      </TouchableOpacity>
  </View>       
        </View>

        </View>
        
    )
}