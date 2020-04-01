import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import Bookmark from '../Component/Bookmark/Bookmark';
import Setting from '../Component/Setting/Setting';

import Color from '../Constant/Color/Color';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: Color.tabbaricon_active,
          inactiveTintColor: Color.tabbaricon_inactive,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            title: 'My home',
            tabBarIcon: () => (
              <View style={{height: 40, width: 40, backgroundColor: 'black'}}>
                <Text>Hello</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen name="Bookmark" component={Bookmark} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
