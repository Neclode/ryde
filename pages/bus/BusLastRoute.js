import React,{useState,useEffect} from 'react';
import {View,Text, Image,SafeAreaView, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { StatusBar } from 'react-native'


import BusLastStyles from '../../styles/bus/BusLastRouteStyles';
import BusRouteStyles from '../../styles/bus/BusRouteStyles';
import Fonts from '../../styles/FontsStyles';
import { ScrollView } from 'react-native-gesture-handler';
export default function BusLastRoute(props){

  //This is for Looping info
  const [BusStopNum,setBusStopNum] = useState([]);

  //This is for displaying the user input bus stop number
  const [StopNumber, setStopNumber] = useState("");
   async function SetValue(){
     var getvalue =  props.navigation.state.params
    console.log("this is what i get", getvalue.newdata);
    setBusStopNum(getvalue.newdata);
    setStopNumber(getvalue.StopNumberInput);
    }
     useEffect(() => {
  SetValue()
    },[]);
    StatusBar.setBarStyle('light-content', true)

    return(
      <SafeAreaView style={BusLastStyles.Container}>
      <View style={BusLastStyles.Container}>
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

  <Text style={[Fonts.BusRoute, BusRouteStyles.NavTitle]}>{StopNumber}</Text>

  </View>
  
  <View style={BusRouteStyles.MidStyles}>
    <Image
      style={BusRouteStyles.WhiteBus}
      source={require('../../assets/icons/whitebus.png')}
    />
  </View>
      <View style={BusRouteStyles.BotStyles}>
        <Text style={Fonts.BlueCont}>Bus Name</Text>
        <Text style={Fonts.BlueCont}>Bus Number</Text>
      </View>
  </View>
  <ScrollView style={[BusLastStyles.ScrollView]}>
       {
                        BusStopNum.map((obj,i)=>{ 
                             return ( 
        <TouchableOpacity onPress={() => Actions.FullBusSchedule(
          // window.location.reload(true),
          {
            ...obj,
            StopNumber:StopNumber
          }
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
                                      {obj.RouteName}
                                    </Text>
                                    
                                  </View>
                                  </View>
                  
                                  <View style={BusRouteStyles.StopNum}>
                                    <Text style={Fonts.AddressText}>{obj.RouteNo}</Text>
                                    
                                  </View>
                  
                                </View>
                                </TouchableOpacity>
                                   
                          )
        }) } 
        </ScrollView>
                    
          {/* Schedule */}
          {/* <View style={BusLastStyles.Bottom}>
            <Text style={Fonts.ScheduleTitle}>Schedule</Text>
            <View style={BusLastStyles.TimeWrap}>
              <View style={BusLastStyles.TimeCont}>
                <Text style={Fonts.TimeText}>3 min</Text>
                <DividerLine />
                <Text style={Fonts.TimeText2}>5 min</Text>
                <DividerLine />
                <Text style={Fonts.TimeText2}>8 min</Text> */}
                {/* <DividerLine /> */}

                {/* <View style={Buttons.SchedCont}>
                  <TouchableOpacity style ={Buttons.TouchWrap} onPress={() => Actions.FullBusSchedule()}>
                  <Image
                    style={Buttons.time}
                    source={require('../../assets/icons/time.png')}
                  />
                  <Text style={Buttons.TouchText}>See Full Schedule</Text>
                    <Image
                      style={Buttons.next}
                      source={require('../../assets/icons/next.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
           </View> */}
          
          {/* <DarkBlueTouchable /> */}
        {/* </View> */}
      </View>
      </SafeAreaView>
    )
}

//test