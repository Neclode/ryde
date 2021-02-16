import React,{useEffect,useState} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image,ScrollView, SafeAreaView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import BusRouteStyles from '../../styles/bus/BusRouteStyles';
import Fonts from '../../styles/FontsStyles';
import { StatusBar } from 'react-native'

export default function BusRoute(props){
  const [BusRouteNum,setBusRouteNum] = useState([]);
  
async function setvalue(){
   getvalue = await props.navigation.state.params
  setBusRouteNum(getvalue.NewRouteData);
    console.log("it works",getvalue.NewRouteData);
  }
  // function filter(){
  //   if(obj.Destination==="NORTH"){
  //  North = BusRouteNum.filter((obj,i)=>{

  //   });
  //   }
  
  

   useEffect(() => {
setvalue()
  },[]);
  
  return(
    <SafeAreaView style={BusRouteStyles.Container}>
      <View style={BusRouteStyles.Container}>
        
          <View style={BusRouteStyles.TopView}>

          <View style={BusRouteStyles.NavBar}>

            <View style={BusRouteStyles.ArrowCont}>
            <TouchableOpacity onPress={() => Actions.pop("BusSchedules")}>
            <Image
            style={BusRouteStyles.BackArrow}
            source={require('../../assets/icons/backarrow.png')}
            />
            </TouchableOpacity>
            </View>

            <Text style={[Fonts.BusRoute, BusRouteStyles.NavTitle]}>Bus Route</Text>

            </View>
            
            <View style={BusRouteStyles.MidStyles}>
              <Image
                style={BusRouteStyles.WhiteBus}
                source={require('../../assets/icons/whitebus.png')}
              />
                {/* <Text style={Fonts.Destination}>{BusRouteNum.Name}</Text> */}
                <Text style={Fonts.BlueCont}>EAST</Text>
            </View>
                <View style={BusRouteStyles.BotStyles}>
                  <Text style={Fonts.BlueCont}>Stop Name</Text>
                  <Text style={Fonts.BlueCont}>Stop Number</Text>
                </View>
            </View>
            <ScrollView style={BusRouteStyles.ScrollView}>
            {/* {
            
            BusRouteNum.map((obj,i)=>{
                return ( */}
                  <TouchableOpacity onPress={() => Actions.BusLastRoute(
                    )}>
                    <View style={BusRouteStyles.BusView}>
            
                      <View style={BusRouteStyles.StopName}>
                      <View style={BusRouteStyles.BusCont}>
                        <Image
                          style={BusRouteStyles.BusIcon}
                           source={require('../../assets/icons/bus-active.png')}
                           /> 
                      </View>
            
                      <View style={BusRouteStyles.Address}>
                        <Text 
                        numberOfLines={1}
                        style={Fonts.AddressText}>
                        hi </Text>
                      </View>
                      </View>
            
                      <View style={BusRouteStyles.StopNum}>
                        <Text style={Fonts.AddressText}>60212</Text>
                      </View>
            
                    </View>
                    </TouchableOpacity>
                            {/* )
                        }) */}
                    {/* } */}

              {/* Bus Stop */}
              
            {/* End of Bus Stop */}
            {/* End of Bus Stop */}

            </ScrollView>
        </View>
        </SafeAreaView>
  )
};

//test