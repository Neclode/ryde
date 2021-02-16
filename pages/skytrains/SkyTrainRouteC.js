import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import SkyTrainRouteStyles from '../../styles/skytrains/SkyTrainRouteStyles';
import Fonts from '../../styles/FontsStyles';

//import db
import Stops from '../../skytraindb/Stops.json';
import StopTime from '../../skytraindb/Schedule.json';

export default function SkyTrainRoute() {

  const [ direction, setDirection ] = useState("Southbound");
  const [ destination, setDestination ] = useState("Richmond Brighouse");
  const [ opDirection, setOpDirection ] = useState("Northbound");
  const [ opDestination, setOpDestination ] = useState("Waterfront");

  const [trainRoute, setTrainRoute] = useState([]);

  var TrainStop = Stops.Stops;
  var TrainStopTime = StopTime;
  function GetTrainRoute() {
    const expo = TrainStop.filter(x => x.route_name === 'Canada Line' && x.direction_name === direction && x.canada_direction !== 'YVR');
    setTrainRoute(expo);
  }
  // console.log(TrainStop.stop_id);

  function ChangeDirection() {
    if(direction === "Southbound"){
      setDirection("Northbound"), setDestination("Richmond Brighouse"), setOpDirection("Southbound"), setOpDestination("Waterfront");
    } else ( setDirection("Southbound"), setDestination("Waterfront"), setOpDirection("Northbound"), setOpDestination("Richmond Brighouse"));
    // console.log(direction)
    GetTrainRoute();
  }
  useEffect(() => {
    GetTrainRoute();
    ChangeDirection();
  }, []);

  return (
    <SafeAreaView style={[SkyTrainRouteStyles.Container, {backgroundColor: "#4298C2"}]}>
      <View style={SkyTrainRouteStyles.Container}>

        <View style={[SkyTrainRouteStyles.TopView, {backgroundColor: "#4298C2"}]}>

          <View style={SkyTrainRouteStyles.NavBar}>

            <View style={SkyTrainRouteStyles.ArrowCont}>
              <TouchableOpacity onPress={() => Actions.pop('SkyTrain Schedules')}>
                <Image
                  style={SkyTrainRouteStyles.BackArrow}
                  source={require('../../assets/icons/backarrow.png')}
                />
              </TouchableOpacity>
            </View>

            <Text style={[Fonts.BusRoute, SkyTrainRouteStyles.NavTitle]}>Canada Line</Text>

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
              // console.log(time);
              return (

                <View>
                  {/* Train Station */}
                  <TouchableOpacity onPress={() => Actions.FullSkyTrainScheduleC(
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
                            source={require('../../assets/icons/canadatrain.png')}
                          />
                        </View>

                        <View style={SkyTrainRouteStyles.Address}>
                          <Text
                            numberOfLines={1}
                            style={[Fonts.AddressText, {color:'#4298C2'}]}>
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