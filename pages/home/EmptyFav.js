import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, Button, AsyncStorage, ScrollView } from 'react-native';

import FavStyles from '../../styles/home/FavStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';

export default function EmptyFav(){


return(
  <View style={FavStyles.CompBox}>


        <Text style={Fonts.Body}>
          Start by adding your favourite taxis for quick access. You can edit, add, or remove favorites anytime.
        </Text>
  </View>
  )
}