import React,{useState,useEffect} from 'react';
import { View, Text, AsyncStorage, KeyboardAvoidingView, SafeAreaView, Image, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import * as Animatable from "react-native-animatable";

import data from '../storage';
import Main from '../Main'

//style
import StartPageStyles from '../styles/StartPageStyles';
import Fonts from '../styles/FontsStyles';
import Buttons from '../styles/ButtonsStyles';


export default function StartPage(props){  
    
    // console.log(props)

    Animatable.initializeRegistryWithDefinitions({
        logo: {
            from: {
                opacity:0,
                top:-150
            },
            to: {
                opacity:1,
                top:0,
            }
          },
          fadeIn: {
            from: {
                    opacity:0,
            },
            to: {
                opacity:1,
            },
          },

      });

    const [Name, setUserName] = useState('');

    async function UpdateUserName(){
        var datanew = await AsyncStorage.getItem("user");
        if(!datanew){
            datanew = data;
        } else {
            datanew = JSON.parse(datanew)
        }
        console.log(datanew);
        datanew.UserName = Name;

        AsyncStorage.setItem("user",JSON.stringify(datanew));
        console.log(datanew);

    }

    async function checkName(){
          if (Name === ''){
            alert('You must enter a name')
          }  else {
            await UpdateUserName(); 
            props.setAppView(<Main/>)
          }
    }
    // useEffect(() => {
    //   UpdateUserName()
    //     },[]);

    return(

            <SafeAreaView style={[StartPageStyles.Container]}>
            <View style={[StartPageStyles.Container]}>
            <KeyboardAvoidingView behavior="position">

                {/* RYDE */}
                
                    <Animatable.View animation="logo" duration={800} easing={'ease-in-out'} iterationCount={1}> 
                        {/*  LOGO */}
                        <View style={StartPageStyles.Logo}>
                            <Image style={{width: 150, height: 150}} source={require('../assets/icons/ryde-icon.png')}/>
                        </View>
                        {/* RYDE LOGO TEXT */}
                        <View style={StartPageStyles.Title}>
                            <Text style={Fonts.Title}>Ryde</Text>
                        </View>
                        {/* SLOGAN */}
                        <Animatable.View animation='zoomIn' delay={0}>
                            <View style={[StartPageStyles.Body, {alignItems:'center'}]}>
                                <Text style ={[Fonts.Body, {fontSize:18, marginBottom:15}]}>
                                Your All-in-One Transportation App
                                </Text>
                            </View> 
                        </Animatable.View>
                    </Animatable.View>

                {/* END OF RYDE */}

                {/* TEXT INPUT AND BUTTON */}

                

                <Animatable.View style={{alignItems:'center', marginTop:50}} animation='fadeInDown' delay={1000}>
                        <TextInput style={[StartPageStyles.Inp]} 
                            placeholder="What's your name?" 
                            placeholderTextColor="grey"
                            onChangeText = {(Text) => setUserName(Text)}
                        />    
                        </Animatable.View>

                    <Animatable.View style={{marginTop:50,marginBottom:50, alignItems:"center"}}animation='fadeInUp' delay={1000}>

                        <TouchableOpacity style={StartPageStyles.Button} onPress={ async () => {  checkName()  } }>
                            <Text style={[Buttons.MainText, {fontSize:19}]}>Get Started</Text>
                        </TouchableOpacity>
                    </Animatable.View>

                {/* END OF TEXT INPUT AND BUTTON */}


                </KeyboardAvoidingView>


            </View>
            </SafeAreaView>
    )
}
