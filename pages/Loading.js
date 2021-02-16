import React, {Component} from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';

// import LottieView from 'lottie-react-native';

function Loading() {
  return (
    <SafeAreaView style={{justifyContent: "center", alignItems: "center"}}>
      {/* <LottieView
       source={require('../assets/animations/117-progress-bar.json')}
       autoPlay
       loop
      /> */}
      {/* <Image 
      style={{width: "100%", height: "100%"}}
      source={require('../assets/animations/117-progress-bar.gif')} /> */}
    </SafeAreaView>
  )
}

export default Loading;
