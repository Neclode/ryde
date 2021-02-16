import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import DarkBlueTouch from '../styles/DarkBlueTouchStyles';
import {Actions} from 'react-native-router-flux';

//test
export default function DarkBlueTouchable(){
    return(
        <TouchableOpacity style={DarkBlueTouch.SecondTouchWrap} onPress={() => Actions.BusRoute()}>
<Text style={DarkBlueTouch.SecondTouchText}>View All Stops</Text>
</TouchableOpacity>
    )
}

