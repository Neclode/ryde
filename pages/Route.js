import React, {useState} from 'react';

import { View, Text } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';

//pages
import HomePage from './home/HomePage';
// import ContactPopup from '../comps/ContactPopup';

import BusSchedules from './bus/BusSchedules';
import BusRoute from './bus/BusRoute';
import BusLastRoute from './bus/BusLastRoute';
import FullBusSchedule from './bus/FullBusSchedule';

import SkyTrainSchedules from './skytrains/SkyTrainSchedules'
import SkyTrainStation from './skytrains/SkyTrainStation'
import SkyTrainRoute from './skytrains/SkyTrainRoute'
import SkyTrainRouteC from './skytrains/SkyTrainRouteC'
import FullSkyTrainSchedule from './skytrains/FullSkyTrainSchedule'
import FullSkyTrainScheduleC from './skytrains/FullSkyTrainScheduleC'

import EmptyContacts from './contacts/EmptyContacts';
import EditContact from './contacts/EditContact'
import Contacts from './contacts/Contacts';
import AddContact from './contacts/AddContact';


import Taxis from './taxis/Taxis';
import SelectedTaxi from './taxis/SelectedTaxi';
// import InitialSetup from './home/InitialSetup';


function Route(){


  return(

        <Router>
        <Stack key="root" hideNavBar={true}>

              <Scene key="HomePage" component={HomePage} initial={true} />
              {/* <Scene key="ContactPopup" component={ContactPopup} /> */}
              {/* <Scene key="InitialSetup" component={InitialSetup} /> */}
        
              <Scene key="BusSchedules" component={BusSchedules} />
              <Scene key="BusRoute" component={BusRoute} />
              <Scene key="BusLastRoute" component={BusLastRoute} />
              <Scene key="FullBusSchedule" component={FullBusSchedule} />

              <Scene key="SkyTrainSchedules" component={SkyTrainSchedules} />
              <Scene key="SkyTrainStation" component={SkyTrainStation} />
              <Scene key="SkyTrainRoute" component={SkyTrainRoute} />
              <Scene key="SkyTrainRouteC" component={SkyTrainRouteC} />
              <Scene key="FullSkyTrainSchedule" component={FullSkyTrainSchedule} />
              <Scene key="FullSkyTrainScheduleC" component={FullSkyTrainScheduleC} />
          
              <Scene key="Taxis" component={Taxis} />
              <Scene key="SelectedTaxi" component={SelectedTaxi}/>
              
              <Scene key="Contacts" component={Contacts} panHandlers={null}/>
              <Scene key="EmptyContacts" component={EmptyContacts} />
              <Scene key="AddContact" component={AddContact} panHandlers={null}/>
              <Scene key="EditContact" component={EditContact} panHandlers={null}/>

        </Stack>
      </Router>

  )
};

export default Route;