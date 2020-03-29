import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../Component/Home/Home';
import Bookmark from '../Component/Bookmark/Bookmark';
import Setting from '../Component/Setting/Setting';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
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
