import React,{useState,useEffect} from 'react';
import {View,Text, Image,SafeAreaView, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import FullSkyTrainStyles from '../../styles/skytrains/FullSkyTrainScheduleStyles';
import Fonts from '../../styles/FontsStyles';

import Divider from '../../comps/Divider';

//import db
import Stops from '../../skytraindb/Stops.json';
import StopTime from '../../skytraindb/Schedule.json';
import { ScrollView } from 'react-native-gesture-handler';

// test
function FullSkyTrainScheduleC({time, trainstopname, trainroutename,traindirection}) {

  var lastIndex = trainstopname.lastIndexOf(" ");
  trainstopname = trainstopname.substring(0, lastIndex);

  const [SortedTime,SetSortedTime] =useState([]);
  const [Switchtime,SetSwitchTime] = useState("");
  function SortTime(){
    var out = new Array(time.length)
  for (let i = 0; i < time.length; ++i) {
      out[i] = time[i].slice(0, -3)
  }
  // console.log("How", out);
    out.sort(function(a, b){
      if (parseInt(a.split(":")[0]) - parseInt(b.split(":")[0]) === 0) {
     return parseInt(a.split(":")[1]) - parseInt(b.split(":")[1]);
   } else {
     return parseInt(a.split(":")[0]) - parseInt(b.split(":")[0]
     );
   }
   })
   SetSortedTime(out);
    // Check correct time format and split into components
    filtime = out.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [out];
    if (out.length > 1) { // If time format correct
      out = out.slice (1);  // Remove full string match value
      out[5] = +out[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      out[0] = +out[0] % 12 || 12; // Adjust hours
       return out.join ('');
    }
   // return adjusted time or original string
   console.log("YO", filtime);
  }
//   function timing(){
//     let ct = out.slice(11,13);
//     let cuH = new Date().getHours();
//     let cuMi = new Date().getMinutes();

// }
 
useEffect(() => {
  SortTime();
}, []);

  return (
    <SafeAreaView style={[FullSkyTrainStyles.Container, {backgroundColor: "#4298C2"}]}>
      <View style={FullSkyTrainStyles.Container}> 

      <View style={[FullSkyTrainStyles.TopView, {backgroundColor: "#4298C2"}]}>

          {/* Nav Bar (Blue Section) */}
          <View style={FullSkyTrainStyles.NavBar}>

            {/* Arrow */}
            <View style={FullSkyTrainStyles.ArrowCont}>
            <TouchableOpacity onPress={() => Actions.pop('SkyTrain Station')}>
              <Image
              style={FullSkyTrainStyles.BackArrow}
              source={require('../../assets/icons/backarrow.png')}
              />
              </TouchableOpacity>
              </View>

              {/* Stop Number */}
               <Text style={[Fonts.BusRoute, FullSkyTrainStyles.NavTitle]}>{trainstopname}</Text>
            </View>
             
            <View style={FullSkyTrainStyles.MidStyles}>
              <Text style={Fonts.LineName}>{trainroutename}</Text>
              <Text style={Fonts.BlueCont}>To {traindirection} Station</Text>
            </View>

       </View>

      <View style={FullSkyTrainStyles.Bottom}>

      <View style={FullSkyTrainStyles.ScheduleCont}>
      <ScrollView>
      {
    SortedTime.map((obj,i)=>{
                        return (
                   <View>
           <View style={FullSkyTrainStyles.TimeCont}>
          <Text style={[Fonts.Time]}>{obj}</Text>
          {/* <Text style={[Fonts.LineDetail]}> King George</Text> */}
          </View>
          <Divider />
          </View>
         
                        )
                        })
                    }
 </ScrollView>
      </View>

      </View>
      </View>
  </SafeAreaView>
  )
}

export default FullSkyTrainScheduleC;