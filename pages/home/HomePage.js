import React, {useState,useEffect} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

//STYLE IMPORTS
import HomePageStyles from '../../styles/home/HomePageStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

// FAV BOX IMPORTS
import FavBus from './FavBus';
import FavTrain from './FavTrain';
import FavTaxi from './FavTaxi';
import FavContacts from './FavContacts';

export default function HomePage(){

  // FAVORITE BOX CONTAINER USE STATE
  var comp = null;
  const [favPage, setFavPage] = useState("FavBus");

  // USER NAME DISPLAY USE STATE
  const [ Name, SetUserName ] = useState(null);

  // SET THE USERNAME
    async function GetUserName(){
      var getUsername = await AsyncStorage.getItem("user");
      var parseUsername = JSON.parse(getUsername);
      username = parseUsername.UserName;
      SetUserName(username);
      console.log('username: ', username)
    }
    useEffect(() => {
     GetUserName();
    //  AsyncStorage.clear();
  },[]);

  // FAVORITES TAB BUTTONS PRESSED

  active = '#063C5C';
  notActive = 'rgba(0,0,0,0.2)';
  const [lineColor, setLineColor] = useState(notActive)

  var favBus = ( 
    <View>
      <Text style={Fonts.FavButtonText}>Bus Stops</Text>
      <View style={{backgroundColor: notActive, width:"100%", height:3}}></View>
    </View>
    );
  var favTrain = ( 
    <View>
      <Text style={Fonts.FavButtonText}>SkyTrain Stations</Text>
      <View style={{backgroundColor: notActive, width:"100%", height:3}}></View>
  </View>
  );
  var favTaxi = ( 
    <View>
      <Text style={Fonts.FavButtonText}>Taxis</Text>
      <View style={{backgroundColor: notActive, width:"100%", height:3}}></View>
  </View>
  );

  if(favPage === "FavBus"){
    comp = (
      <View style={HomePageStyles.FavBox}>
        <ScrollView> 
          <FavBus /> 
        </ScrollView>
      </View>
    ),
    favBus = (
      <View>
      <Text style={Fonts.FavButtonTextPressed}>Bus Stops</Text>
      <View style={{backgroundColor: active, width:"100%", height:3}}></View>
      </View>
    )
  }

  if(favPage === "FavTrain"){
    comp = (
      <View style={[HomePageStyles.FavBox]}>
        <FavTrain />

      </View>
    ),
    favTrain = (
      <View>
      <Text style={Fonts.FavButtonTextPressed}>SkyTrain Stations</Text>  
      <View style={{backgroundColor: active, width:"100%", height:3}}></View> 
      </View>   
    )
  }

  if(favPage === "FavTaxi"){
    comp = (
      <View style={HomePageStyles.FavBox}> 
        <ScrollView> 
          <FavTaxi /> 
        </ScrollView>
      </View>
    ),
    favTaxi = (
      <View>
      <Text style={Fonts.FavButtonTextPressed}>Taxis</Text>
      <View style={{backgroundColor: active, width:"100%", height:3}}></View>
      </View>
    )
  }

  return(

    <SafeAreaView style={HomePageStyles.Container}>
      
      <View style={HomePageStyles.Container}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={Fonts.Title}>Hi {Name},</Text>
            {/* <TouchableOpacity   onPress={()=>{ AsyncStorage.clear() }}>
            <Text style={[Fonts.Title, {fontSize:18, color:"#f4f4f4"}]}>Log Out</Text>
            </TouchableOpacity> */}
            </View>


            {/* FAVORITES SECTION */}

            <Text style={Fonts.Heading}> Your Favorites </Text>

              <View style={[HomePageStyles.FavContainer,]}>          

                  <TouchableOpacity style={Buttons.HomePageButton}
                  
                    onPress={()=>{ setFavPage("FavBus"); }} >
                  {favBus}
                  
                  </TouchableOpacity>

                  <TouchableOpacity style={Buttons.HomePageButton}
                    onPress={()=>{ setFavPage("FavTrain"); }} >
                  {favTrain}
                  </TouchableOpacity>

                  <TouchableOpacity style={Buttons.HomePageButton}
                    onPress={()=>{ setFavPage("FavTaxi"); }}   >
                  {favTaxi}
                  </TouchableOpacity>

                </View>


                {/* SHOWING FAVORITES BOX BASED ON SELECTION */}
                
                <View style={HomePageStyles.CompContainer}>
                      {comp}
              </View> 

            {/* END OF FAVORITES SECTION */}


            {/* CONTACTS SECTION */}

            <View style={HomePageStyles.ContactHeader}>
              <Text style={[Fonts.Heading]}>Contacts</Text>    
            </View>

              <View style={HomePageStyles.ContactContainer}>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={HomePageStyles.ContactContent}>
                    <FavContacts />
                  </View>
                </ScrollView>

              </View> 

            {/* END OF CONTACTS SECTION */}

            </View>
    </SafeAreaView>

  )
};