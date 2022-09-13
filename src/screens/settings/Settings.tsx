import React from 'react';
import {
    View,
    StatusBar,
    Text,
    TouchableOpacity
} from 'react-native';
import { primaryColor } from '../../constanat/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';
  
const Settings = ({navigation}:{navigation:any}) => {    
        return(
            <View style={styles.container}>
            <StatusBar backgroundColor={primaryColor}/>
            <View style={styles.header}>
                <TouchableOpacity
                onPress={() => {navigation.goBack()}}>
                <MaterialIcons name={'keyboard-arrow-left'} size={30} color={primaryColor} style={styles.headericon} />
                </TouchableOpacity>
                <Text style={styles.headertext}>Settings</Text>
            </View>
            </View>
        )
}
  
export default Settings;