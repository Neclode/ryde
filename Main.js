import React, {useState, useEffect} from 'react';
import { View, SafeAreaView,Button,Image, StatusBar, AsyncStorage} from 'react-native';

import TabBar from './comps/TabBar';
import Route from './pages/Route'

function Main(){
  console.disableYellowBox = true;

  // USER NAME DISPLAY USE STATE
  const [ Name, SetUserName ] = useState(null);

  // SET THE USERNAME
    async function GetUserName(){
      var getUsername = await AsyncStorage.getItem("user");
      var parseUsername = JSON.parse(getUsername);
      username = parseUsername.UserName;
      SetUserName(username);
      console.log('username: ', username)
    }
    useEffect(() => {
     GetUserName();
  },[]);

  return (
      <View style={{flex:1}}>

          <View style={{flex:1}}>
            <Route />
          </View> 
          
           <View style={{display:'flex'}}>
          <TabBar/>
          <SafeAreaView style={{backgroundColor:'#ffffff'}}>
          </SafeAreaView> 
           </View> 
    </View>
  )

};
 export default Main;
// export default from './storybook';