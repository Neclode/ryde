import React, {useState, useEffect} from 'react';
import { View, SafeAreaView,Button,Image, StatusBar, AsyncStorage} from 'react-native';

import AppStyles from './styles/AppStyles';

import StartPage from './pages/StartPage';
import Main from './Main';


function App(){
  console.disableYellowBox = true;

  // USER NAME DISPLAY USE STATE
  const [ AppView, setAppView ] = useState(null);
  const [ Name, SetUserName ] = useState(null);

  // SET THE USERNAME
    async function GetUserName(){
        var getUsername = await AsyncStorage.getItem("user");
        console.log(getUsername)

        if (getUsername === null) {
          setAppView( <StartPage setAppView={setAppView} AppView={AppView}/> )
        } else {
          setAppView( <Main />)
        }
    }
    
    useEffect(() => {
     GetUserName();

     // UN-COMMENT THE CODE BELOW TO RESET USER NAME TO NOTHING
            // AsyncStorage.clear()
  
  },[]);


  return (

      <View style={[AppStyles.app, {backgroundColor:'#f4f4f4'}]}>

        <StatusBar barStyle="dark-content" />

        { AppView }

      </View>

  )

};
 export default App;
// export default from './storybook';