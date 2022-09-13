import React, { useEffect } from 'react';
import {
    View,
    StatusBar,
} from 'react-native';
import { primaryColor } from '../../constanat/colors';

const Home = ({navigation}:{navigation:any}) => {    
    useEffect(() => {
    const willFocusSubscription = navigation.addListener('focus', () => {
        navigation.openDrawer()
        });
        return willFocusSubscription;      
    },[])
        return(
            <View style={{flex:1}}>
                  <StatusBar backgroundColor={primaryColor}/>
            </View>
        )
}
  
export default Home;