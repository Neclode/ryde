import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import SkyTrainRouteStyles from '../../styles/skytrains/SkyTrainRouteStyles';
import Fonts from '../../styles/FontsStyles';

//import db
import Stops from '../../skytraindb/Stops.json';
import StopTime from '../../skytraindb/Schedule.json';

export default function SkyTrainRoute() {

  const [trainRoute, setTrainRoute] = useState([]);
  const [ direction, setDirection] = useState("Eastbound");
  const [ destination, setDestination ] = useState("King George");
  const [ opDirection, setOpDirection ] = useState("Westbound");
  const [ opDestination, setOpDestination ] = useState("Waterfront");

  var TrainStop = Stops.Stops;
  var TrainStopTime = StopTime;
 async function GetTrainRoute() {
    const expo = TrainStop.filter(x => x.route_name === 'Expo Line' && x.direction_name === direction && x.expo_direction !== 'Production Way');
   await setTrainRoute(expo);
  }
//   async function ChangeDirection() {
//     if(direction === "Eastbound"){
//       setDirection("Westbound"), setDestination("Waterfront");
// GetTrainRoute();
//     } else ( setDirection("Eastbound"), setDestination("King George"));
// GetTrainRoute();
//   }
  // console.log(TrainStop.stop_id);

  function ChangeDirection() {
    if(direction === "Eastbound"){
      setDirection("Westbound"), setDestination("King George"), setOpDirection("Eastbound"), setOpDestination("Waterfront");
    } else ( setDirection("Eastbound"), setDestination("Waterfront"), setOpDirection("Westbound"), setOpDestination("King George"));
    // console.log(direction)
    GetTrainRoute();
  }
  useEffect(() => {
    GetTrainRoute();
    ChangeDirection();
  }, []);

  return (
    <SafeAreaView style={[SkyTrainRouteStyles.Container, {backgroundColor:'#235CA3'}]}>
      <View style={SkyTrainRouteStyles.Container}>

        <View style={[SkyTrainRouteStyles.TopView, {backgroundColor:'#235CA3'}]}>

          <View style={[SkyTrainRouteStyles.NavBar]}>

            <View style={SkyTrainRouteStyles.ArrowCont}>
              <TouchableOpacity onPress={() => Actions.pop('SkyTrain Schedules')}>
                <Image
                  style={SkyTrainRouteStyles.BackArrow}
                  source={require('../../assets/icons/backarrow.png')}
                />
              </TouchableOpacity>
            </View>

            <Text style={[Fonts.BusRoute, SkyTrainRouteStyles.NavTitle]}>Expo Line</Text>

          </View>


          <View style={SkyTrainRouteStyles.MidStyles}>
            <Image
              style={SkyTrainRouteStyles.WhiteTrain}
              source={require('../../assets/icons/whitetrain.png')}
            />

            <Text style={Fonts.Destination}>{opDestination} to {destination} Station</Text>
            <Text style={Fonts.BlueCont}>{opDirection}</Text>

            <TouchableOpacity
              onPress={() => ChangeDirection()}
            >
              <Image 
                style={{width:20, height:20}}
                source={require('../../assets/icons/switch.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={SkyTrainRouteStyles.ScrollView}>
          {
            trainRoute.map((obj, i) => {
              
              var time =[];
              for(var j=0; j< StopTime.length; j++){
                if(obj.stop_id === StopTime[j].stop_id){
                  time.push(StopTime[j].arrival_time);
                }
              }
              console.log(obj)
              // console.log(time);
              return (

                <View>
                  {/* Train Station */}
                  <TouchableOpacity onPress={() => Actions.FullSkyTrainSchedule(
                    {
                      ...obj,
                      trainstopname:obj.stop_name,
                      trainroutename:obj.route_name,
                      traindirection:destination,
                      time:time
                    }
                  )}>

                    <View style={SkyTrainRouteStyles.TrainView}>

                      <View style={SkyTrainRouteStyles.StationName}>
                        <View style={SkyTrainRouteStyles.TrainCont}>
                          <Image
                            style={SkyTrainRouteStyles.TrainIcon}
                            source={require('../../assets/icons/expotrain.png')}
                          />
                        </View>

                        <View style={SkyTrainRouteStyles.Address}>
                          <Text
                            numberOfLines={1}
                            style={Fonts.AddressText}>
                            {obj.stop_name}</Text>
                        </View>
                      </View>

                        </View>
                  </TouchableOpacity>
                  {/* End of Train Station */}
                </View>
              )

            })

          }
        </ScrollView>


      </View>
    </SafeAreaView>
  )
};