//import liraries
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { primaryColor } from '../../constanat/colors';
import { styles } from './styles';
// create a component
const CustomDrawer = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftside}>
        <View style={styles.header}>
          <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login')
            navigation.closeDrawer()
          }}>
          <MaterialIcons name={'keyboard-arrow-left'} size={30} color={primaryColor} style={styles.icon} />
          </TouchableOpacity>
            <Text style={styles.headertext}>Menu</Text>
        </View>
        <TouchableOpacity
        onPress={() => {navigation.navigate('Profile')}}
        style={styles.items}>
            <MaterialIcons name={'person-outline'} size={30} color={primaryColor} style={styles.icon} />
            <Text style={styles.itemstext}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => {navigation.navigate('Settings')}}
         style={styles.items}>
            <SimpleLineIcons name={'settings'} size={25} color={primaryColor} style={styles.icon} />
            <Text style={styles.itemstext}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => {
        navigation.navigate('Login')
        navigation.closeDrawer()
        }}
         style={styles.items}>
            <MaterialIcons name={'logout'} size={30} color={primaryColor} style={styles.icon} />
            <Text style={styles.itemstext}>Logout</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
      onPress={() => {
        navigation.navigate('Login')
        navigation.closeDrawer()
      }}
      style={styles.rightside}></TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;
