import React from 'react';
import {View,Text, Image,SafeAreaView,ScrollView, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import SkyTrainStationStyles from '../../styles/skytrains/SkyTrainStationStyles';
import Fonts from '../../styles/FontsStyles';
//test
import Buttons from '../../styles/ButtonsStyles';
import DividerLine from '../../comps/Divider';

export default function SkyTrainStation(){
    return(
      <SafeAreaView style={SkyTrainStationStyles.Container}>
      <View style={SkyTrainStationStyles.Container}>

      <View style={SkyTrainStationStyles.TopView}>


      {/* Nav Bar (Blue Section) */}
      <View style={SkyTrainStationStyles.NavBar}>

        <View style={SkyTrainStationStyles.ArrowCont}>
        <TouchableOpacity onPress={() => Actions.pop('SkyTrain Route')}>
          <Image
          style={SkyTrainStationStyles.BackArrow}
          source={require('../../assets/icons/backarrow.png')}
          />
          </TouchableOpacity>
          </View>
           <Text style={[Fonts.BusRoute, SkyTrainStationStyles.NavTitle]}>Waterfront</Text>
        </View>

        <View style={SkyTrainStationStyles.MidStyles}>
          <Image
            style={SkyTrainStationStyles.WhiteBus}
            source={require('../../assets/icons/whitebus.png')}
          />
          <Text style={Fonts.BlueCont}>To King George Station</Text>
          <Text style={Fonts.BlueCont}>EXPO LINE</Text>
        </View>
      </View>
     

      {/* Schedule */}
       <ScrollView style={SkyTrainStationStyles.Bottom}>

          <Text style={Fonts.ScheduleTitle}>Schedule</Text>

          <View style={SkyTrainStationStyles.SectionCont}>

            <View style={SkyTrainStationStyles.TimeCont}>

              <View style={SkyTrainStationStyles.SchedView}>
                <Text style={Fonts.TimeText}>3 min</Text>
                <Text style={Fonts.SchedText}>King George</Text>
              </View>

              <DividerLine />

              <View style={SkyTrainStationStyles.SchedView}>
                <Text style={Fonts.TimeText2}>5 min</Text>
                <Text style={Fonts.SchedText2}>Production-Way University</Text>
              </View>

              <DividerLine />

              <View style={SkyTrainStationStyles.SchedView}>
                <Text style={Fonts.TimeText2}>8 min</Text>
                <Text style={Fonts.SchedText2}>Production-Way University</Text>
              </View>

              {/* <DividerLine /> */}

              <View style={Buttons.SchedCont}>
                  <TouchableOpacity style ={Buttons.TouchWrap} onPress={() => Actions.FullSkyTrainSchedule()}>
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
          </View>

       

          {/* Other Information */}
          <View style={SkyTrainStationStyles.OtherCont}>
            <Text style={Fonts.ScheduleTitle}>Other Information</Text>

            {/* First Train */}
            <View style={SkyTrainStationStyles.SectionCont}>
              <View style={SkyTrainStationStyles.TrainCont}>

              <View style={SkyTrainStationStyles.FirstTrain}>
                <Text style={Fonts.OtherHeading2}>First Train</Text>
              </View>

              <View style={SkyTrainStationStyles.ColumnView}>
                <View style={SkyTrainStationStyles.OtherDays}>
                  <Text style={Fonts.OtherBody}>Monday-Friday</Text>
                  <Text style={Fonts.OtherBody}>Saturday</Text>
                  <Text style={Fonts.OtherBody}>Sunday &amp; Holidays</Text>
               </View>

                <View style={SkyTrainStationStyles.OtherTime}>
                  <Text style={Fonts.OtherBody}>5:32 AM</Text>
                  <Text style={Fonts.OtherBody}>6:48 AM</Text>
                  <Text style={Fonts.OtherBody}>6:48 AM</Text>
                </View>
              </View>
              
              </View>
            </View>


            {/* Last Train */}
            <View style={[SkyTrainStationStyles.SectionCont, {marginTop:40, marginBottom:40}]}>
              <View style={SkyTrainStationStyles.TrainCont}>

              <View style={SkyTrainStationStyles.FirstTrain}>
                <Text style={Fonts.OtherHeading2}>Last Train</Text>
              </View>

              <View style={SkyTrainStationStyles.ColumnView}>
                <View style={SkyTrainStationStyles.OtherDays}>
                  <Text style={Fonts.OtherBody}>Monday-Friday</Text>
                  <Text style={Fonts.OtherBody}>Saturday</Text>
                  <Text style={Fonts.OtherBody}>Sunday &amp; Holidays</Text>
               </View>

                <View style={SkyTrainStationStyles.OtherTime}>
                  <Text style={Fonts.OtherBody}>5:32 AM</Text>
                  <Text style={Fonts.OtherBody}>6:48 AM</Text>
                  <Text style={Fonts.OtherBody}>6:48 AM</Text>
                </View>
              </View>
              
              </View>
            </View>
          </View>
        </ScrollView> 
      </View>
      </SafeAreaView>
    )
}
