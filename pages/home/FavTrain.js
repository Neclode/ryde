import React from 'react';
import { Text, View } from 'react-native';

import FavStyles from '../../styles/home/FavStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

export default function FavTrain(){
  return(
    <View style={FavStyles.CompBox}>

      <Text style={Fonts.Body}>
        Start by adding your favorite station for quick access.
        You can edit, add, or remove favorites anytime.
      </Text>

    </View>
  )
};