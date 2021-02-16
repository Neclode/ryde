
import React, { useState, useEffect } from 'react';
import {View,Text, Image,SafeAreaView, TouchableOpacity, AsyncStorage} from 'react-native';

import {Actions} from 'react-native-router-flux';
import data from '../../storage.json';
import Communications from 'react-native-communications';
import { StatusBar } from 'react-native'

import FullBusStyles from '../../styles/bus/FullBusScheduleStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

import Divider from '../../comps/Divider';

function FullBusSchedule({RouteNo,RouteName,Schedules,StopNumber}) {
// console.log(Schedules[0])
const [, forceUpdate] = useState();
let Min;


  var notFavorited = require('../../assets/icons/favorite2.png');
  var busFavorited = require('../../assets/icons/favorite.png');

  const [ favBus, setFavBus ] = useState([]);
  const [ BusFaved, SetBusFaved ] = useState(false);
  const [ FavArr, SetFavArr ] = useState([]);
  const [ favBusImg, setFavBusImg ] = useState(notFavorited);

  async function UpdateFavBus(){

    var datanew = await AsyncStorage.getItem("storage");
    if(!datanew){
      datanew = data;
    } else {
      datanew = JSON.parse(datanew)
    }
      if (BusFaved === false){
        datanew.FavBus.push({
          favbusrouteno: RouteNo,
          favbusstopno: StopNumber,
          favbusroutename: RouteName,
          favbusschedule: Schedules[0].ExpectedCountdown,
          favbusschedule2: Schedules[0].ExpectedLeaveTime,
        })
        SetFavArr(datanew.FavBus);
        SetBusFaved(true);
        setFavBusImg(busFavorited);
      } else {
        DeleteBusFav()
      }
      console.log("test",datanew);
      AsyncStorage.setItem("storage",JSON.stringify(datanew));
  };

  async function DeleteBusFav(){
    var newdata = await AsyncStorage.getItem("storage");
    parsedelete = await JSON.parse(newdata);
    console.log("hi",parsedelete);
    var favBusFilter = parsedelete.FavBus.filter((o,i)=>{
      return o.favbusrouteno !== RouteNo
    });
    parsedelete.FavBus = favBusFilter;
    await AsyncStorage.setItem("storage", JSON.stringify(parsedelete));
    SetBusFaved(false);
    setFavBusImg(notFavorited);

  }
  
  async function CheckBusColor(){
    var datanew = await AsyncStorage.getItem("storage");
    if (!datanew){
      setFavBusImg(notFavorited);
    } else {
      datanew = await JSON.parse(datanew)
    }
    var favBusFilter = datanew.FavBus.filter((o,i)=>{
      return o.favbusrouteno === RouteNo
    });
    if(favBusFilter.length>0){
      setFavBusImg(busFavorited)
      SetBusFaved(true);
    } else {
      setFavBusImg(notFavorited)
      SetBusFaved(false);
    }
  }

  useEffect(() => {
    CheckBusColor();
  }, []);


let hour;
let extramin;
useEffect(() => {
  setTimeout(forceUpdate, 2000);
}, []);

StatusBar.setBarStyle('light-content', true)
  return (
    <SafeAreaView style={FullBusStyles.Container}>
      <View style={FullBusStyles.Container}> 

      <View style={FullBusStyles.TopView}>

          {/* Nav Bar (Blue Section) */}
          <View style={FullBusStyles.NavBar}>

            {/* Arrow */}
            <View style={FullBusStyles.ArrowCont}>
            <TouchableOpacity onPress={() => Actions.pop('Bus Last Route')}>
              <Image
              style={FullBusStyles.BackArrow}
              source={require('../../assets/icons/backarrow.png')}
              />
              </TouchableOpacity>
              </View>

              {/* Stop Number */}
               <Text style={[FullBusStyles.BusRoute, FullBusStyles.NavTitle]}>{StopNumber}</Text>
               <TouchableOpacity style={{justifyContent:'flex-end', flexDirection:'row', alignItems:'center', flex:1}}
               onPress={ async() => {
                UpdateFavBus();
                console.log(favBus);
                }}>
                <Image style={{height:30, width:30}} source={favBusImg} />
              </TouchableOpacity>
            </View>

             
            <View style={FullBusStyles.MidStyles}>
              <View style={FullBusStyles.BusStopInfo}>
              <Text style={Fonts.BusNum}>{RouteNo}</Text>

              </View>
              <Text style={Fonts.BusName}>{RouteName}</Text>
              <Text style={Fonts.StreetName}>Northbound Willingdon Ave / Kingsborough St</Text>
            </View>

       </View>

      <View style={FullBusStyles.Bottom}>

      <View style={[FullBusStyles.ScheduleCont]}>
{
      Schedules.map((obj,i)=>{


        var LeftTimeColor = '#363636';
        var LeftTimeSize = 22;
        var RightTimeSize = 16;
        var RightTimeFont = 'Assistant-Regular'

        if (i != 0) {
          LeftTimeColor = 'gray'
          LeftTimeSize = 19;
          RightTimeSize = 15;
        } else {
          LeftTimeColor = '#3971B3'
          LeftTimeSize = 23;
          RightTimeSize = 16
          RightTimeFont = 'Assistant-Bold'
        }


        if (obj.ExpectedCountdown <= 1){
          Min = ""

          obj.ExpectedCountdown="Now";
         }
        else {
          Min = "Min"
        }
       var Space =  obj.ExpectedLeaveTime.split(" ", 1);
                     return (
                        <View style={[FullBusStyles.TimeCont]}>
                          <View style={FullBusStyles.TimeOuterCont}>


                            <View style={[FullBusStyles.TimeInnerCont]}>
                        <Text style={[Fonts.Time, {color:LeftTimeColor, fontSize: LeftTimeSize}]}> {obj.ExpectedCountdown} {hour}{extramin}</Text>
                         <Text style={[Fonts.Min, {color:LeftTimeColor, fontSize: LeftTimeSize}]}>{Min}</Text>
                         </View>
                         <Text style={[Fonts.LeaveTime, {color:LeftTimeColor, fontSize: RightTimeSize, fontFamily: RightTimeFont}]}> {Space}</Text>
                        </View>
                        <Divider />
                      </View>
                      )
                      })
                  }
      
      </View>

      </View>
      </View>
    </SafeAreaView>
  )
}

export default FullBusSchedule;

//test