import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Component/Home/Home';
import ReadNews from '../Component/ReadNews/ReadNews';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ReadNews" component={ReadNews} />
    </Stack.Navigator>
  );
};
