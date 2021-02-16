import React, {useState, useEffect} from 'react';
import { View, Alert, Text,SafeAreaView,TouchableOpacity, TextInput, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';

import SkyTrainScheduleStyles from '../../styles/skytrains/SkyTrainSchedulesStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

//import db
import Stops from '../../skytraindb/Stops.json';
import StopTime from '../../skytraindb/Schedule.json';

export default function SkyTrainSchedules(){
        // User Interface

        const [ userInput, setUserInput ] = useState('');

        // Dataset Import

        var TrainStop = Stops.Stops;
        
        // Dataset - All Train Stop ID Search

        const TrainStopSearch = TrainStop.filter(x => x.stop_name === userInput);
        // const SearchedId = TrainStopSearch.filter(x => x.stop_id === TrainStopSearch.stop_id);

        // Dataset - Canada Line

        const cad = TrainStop.filter(x => x.route_name === 'Canada Line');
        const cadNorth = cad.filter(x => x.direction_name === 'Northbound');
        const cadSouth = cad.filter(x => x.direction_name === 'Southbound'); 

        // Dataset - Expo Line

        const expo = TrainStop.filter(x => x.route_name === 'Expo Line');
        const expoEast = expo.filter(x => x.direction_name === 'Eastbound');
        const expoWest = expo.filter(x => x.direction_name === 'Westbound');

        // Dataset - Schedules
        
                // Dataset - Train Stop Schedule Search by id


        // Dataset - Show all Stops 
        var stopidarr = [];        
        for (var i=0;i<TrainStop.length;i++){

                stopidarr.push(TrainStop[i]);
           
        }

        // Dataset - Show all Stop Times

        var stoptimearr = [];        
        for (var i=0;i<StopTime.length;i++){

                stoptimearr.push(StopTime[i]);
           
        }

        // Dataset - Search for Stop id 11295

        const TrainStops = stoptimearr.filter(stoptimearr => stoptimearr.stop_id === 11295);

        // Dataset - Search for Arrival Times for Stop id 11295

        var trainstoptimearr = [];
        for (var i=0; i<TrainStops.length;i++){

                trainstoptimearr.push(TrainStops[i].arrival_time);

        }

        // console.log('test',trainstoptimearr);

  return (
    <SafeAreaView style={SkyTrainScheduleStyles.Container}>
      <View style={SkyTrainScheduleStyles.Container}>
        
        <Text style={Fonts.Title}>SkyTrains</Text>
        <Text style={Fonts.Heading}>Find A SkyTrain Station</Text>
        <Text style={Fonts.Body}>Search for a SkyTrain station to see its schedules</Text>


        <TextInput style={Fonts.Inp}
        placeholder="Example: Waterfront Station"
        placeholderTextColor='gray' 
        />

        <TouchableOpacity style={Buttons.Main} onPress={() => alert('This feature will be available in a future update')}>
              <Text style={Buttons.MainText}>View Station</Text>
          </TouchableOpacity>

        <View style={SkyTrainScheduleStyles.TrainView}>
        <Text style={Fonts.Heading}>View SkyTrain Stations by line</Text>
        </View>

        <View style={SkyTrainScheduleStyles.TaxiButtonsContainer}>

        {/* Expo Line */}
        <TouchableOpacity  style={[Buttons.SkyTrain, {backgroundColor: "#235CA3"}]} onPress={() => Actions.SkyTrainRoute()}>
                {/* Left Icon */}
                <View style={Buttons.IconCont}>
                        <Image
                        style={Buttons.Img}
                        source={require('../../assets/icons/whitetrain.png')}
                        />
                </View>

                {/* Text */}
                <View style={Buttons.TextCont}>
                        <Text style={Fonts.WhiteButText}>
                            Expo Line
                        </Text>
                </View>

                {/* Right Icon */}
                <View style={Buttons.IconCont}>
                        <Image
                        style={Buttons.ArrowImg}
                        source={require('../../assets/icons/whitearrow.png')}
                        />
                </View>
        </TouchableOpacity>

        {/* Millenium Line */}
        <TouchableOpacity  style={[Buttons.SkyTrain, {backgroundColor: "#F7D148"}]} onPress={() => {
          alert('This feature will be available in a future update')
        }}>
                {/* Left Icon */}
                <View style={Buttons.IconCont}>
                        <Image
                        style={Buttons.Img}
                        source={require('../../assets/icons/skytrain.png')}
                        />
                </View>

                {/* Text */}
                <View style={Buttons.TextCont}>
                        <Text style={Fonts.BlackButText}>
                            Millenium Line
                        </Text>
                </View>

                {/* Canada Line */}
                <View style={Buttons.IconCont}>
                        <Image
                        style={Buttons.ArrowImg}
                        source={require('../../assets/icons/arrow.png')}
                        />
                </View>
        </TouchableOpacity>

        {/* Third Train */}
        <TouchableOpacity  style={[Buttons.SkyTrain, {backgroundColor: "#4298C2"}]} onPress={() => Actions.SkyTrainRouteC()}>
                {/* Left Icon */}
                <View style={Buttons.IconCont}>
                        <Image
                        style={Buttons.Img}
                        source={require('../../assets/icons/whitetrain.png')}
                        />
                </View>

                {/* Text */}
                <View style={Buttons.TextCont}>
                        <Text style={Fonts.WhiteButText}>
                            Canada Line
                        </Text>
                </View>

                {/* Right Icon */}
                <View style={Buttons.IconCont}>
                        <Image
                        style={Buttons.ArrowImg}
                        source={require('../../assets/icons/whitearrow.png')}
                        />
                </View>
        </TouchableOpacity>

        </View>


      </View>
      </SafeAreaView>
  )
};