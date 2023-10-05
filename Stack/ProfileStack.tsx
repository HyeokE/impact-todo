import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from '../screens/main/ProfileScreen';
const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
