import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import HomePage from '../../pages/home/HomePage';
import FavContact from '../../pages/home/FavContacts';
import ContactPopup from '../../comps/ContactPopup';

import BusSchedules from '../../pages/bus/BusSchedules';
import BusRoute from '../../pages/bus/BusRoute';
import BusLastRoute from '../../pages/bus/BusLastRoute';

import SkyTrainSchedules from '../../pages/skytrains/SkyTrainSchedules'
import SkyTrainStation from '../../pages/skytrains/SkyTrainStation'
import SkyTrainRoute from '../../pages/skytrains/SkyTrainRoute'

import EmptyContacts from '../../pages/contacts/EmptyContacts';
import Contacts from '../../pages/contacts/Contacts';
import AddContact from '../../pages/contacts/AddContact';
import AddContactPopup from '../../comps/AddContactPopup';

import Taxis from '../../pages/taxis/Taxis';
import SelectedTaxis from '../../pages/taxis/SelectedTaxi';


storiesOf('Home', module)
.add('HomePage', () => <HomePage />);

storiesOf('Taxi Pages', module)
.add('Taxis', () => <Taxis />)
.add('Selected Taxi', () => <SelectedTaxis />);

storiesOf('Buses', module)
.add('Bus Schedules', () => <BusSchedules />)
.add('Bus Route', () => <BusRoute />)
.add('Bus Last Route', () => <BusLastRoute />);

storiesOf('SkyTrains', module)
.add('SkyTrain Schedules', () => <SkyTrainSchedules />)
.add('SkyTrain Station Route', () => <SkyTrainStation />)
.add('SkyTrain Route', () => <SkyTrainRoute />);


storiesOf('Contacts', module)
.add('Contacts', () => <Contacts />)
.add('Empty Contacts', () => <EmptyContacts />)
.add('Add Contact', () => <AddContacts />)
.add('Add Contact Popup', () => <AddContactPopup />);