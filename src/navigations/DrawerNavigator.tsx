import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../screens/customedrawer/CustomDrawer';
import Home from '../screens/home/Home';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
      <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'transparent',
          width: '100%',
        },
      }}
        defaultStatus={'open'}
        drawerContent={props => <CustomDrawer {...props} />}
        initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{headerShown:false}}
        />
      </Drawer.Navigator>
  );
}

export default DrawerNavigator;
