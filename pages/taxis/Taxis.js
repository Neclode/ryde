import React,{useState,useEffect} from 'react';
import { View, Text, Button, SafeAreaView, FlatList, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown';
import * as Animatable from "react-native-animatable";
import { StatusBar } from 'react-native'


 

import TaxisStyles from '../../styles/taxis/TaxisStyles';
import Fonts from '../../styles/FontsStyles';
import Buttons from '../../styles/ButtonsStyles';
import Animated from 'react-native-reanimated';

function Taxis(props) {
    const [users, setData] = useState([]);
    const [input,setInput]=useState('');
    inputTitle=null;

    function runTitle(){
        if (input !=="" && input !=="All Taxis")  {
            inputTitle=(
            <Text style={[Fonts.Heading, {marginTop:20, marginBottom:10}]}>Taxis in {input}</Text>
            )
        }
        else {
            inputTitle=(
                <Text style={[Fonts.Heading, {marginTop:20, marginBottom:10}]}>All Taxis</Text>
            )
        }
    }
    

    var Search=users;
    if(input !== "" && input !== "All Taxis"){
        Search = users.filter((obj,i)=>{
            return (obj.city===input);
        });
    }

    
    let data = [{
        
        value:'All Taxis'
        },{
        value: 'Burnaby',
      }, {
        value: "Vancouver",
      },{
        value: 'Richmond',
      },{
        value: 'Surrey',
      },{
        value: 'Langley',
      } ];

    var fetchData = async () => {
        const response = await fetch('https://www.irvinalcira.com/rydedatabase/ryde.php');
        j = await response.json();
        setData(j);
        // console.log(response.text());
    }
    useEffect(() => {
        fetchData();
    },[]);
    runTitle();

    StatusBar.setBarStyle('dark-content', true)

    
    return (
        <SafeAreaView style={TaxisStyles.Container}>
            <View style={TaxisStyles.Container}>

                <Text style={Fonts.Title}>Taxis</Text>

                <Text style={Fonts.Heading}>Location</Text>
                <Text style={Fonts.Body}>Enter a location to view taxis in the surrounding area</Text>

                {/* This will be a Searchable Drop Down     */}
                    <Dropdown
                    label='City'
                    data={data}
                    textColor =	"rgba(0, 0, 0, .98)"
                    // containerStyle = {{backgroundColor: "white"}}
                    itemPadding = "10"
                    onChangeText={text => setInput(text)}
                    dropdownPosition= "0"
                    itemCount="6"
                    />

                <View style={[TaxisStyles.TaxisView]}>
                    
                {inputTitle}
                    
                </View>

                <ScrollView style={[TaxisStyles.ScrollViewContainer]} >
                <View style={TaxisStyles.TaxiButtonsContainer}>
                    {
                        Search.map((obj,i)=>{
                            return (
                                <Animatable.View animation='fadeInDown' duration={400}>
                                <TouchableOpacity style={Buttons.Taxi} onPress={() => Actions.SelectedTaxi(
                                    {
                                        ...obj,
                                        taxiname:obj.name,
                                    }
                                )}>
                        <View style={Buttons.IconCont}>
                            <Image
                                style={Buttons.Img}
                                source={require('../../assets/icons/taxi.png')}
                            />
                        </View>
                        <View style={Buttons.TextCont}>
                            <Text style={Buttons.TaxiText}>
                                {obj.name}
                        </Text>
                        </View>
                        <View style={Buttons.IconCont}>
                            <Image
                                style={Buttons.ArrowImg}
                                source={require('../../assets/icons/arrow.png')}
                            />
                        </View>
                        
                    </TouchableOpacity>
                    </Animatable.View>
                    

                            )
                        })
                    }

                </View>
                </ScrollView>


            </View>
        </SafeAreaView>
    )
};

export default Taxis;