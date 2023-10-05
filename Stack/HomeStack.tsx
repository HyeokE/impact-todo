import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailScreen from '../screens/main/DetailScreen';
import HomeScreen from '../screens/main/HomeScreen';

export type HomeStackType = {
  Home: undefined;
  Detail: undefined;
};
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
