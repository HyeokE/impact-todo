import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NicknameScreen from '../screens/signup/NicknameScreen';
const Stack = createNativeStackNavigator();
const SignupStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Nickname'}>
      <Stack.Screen name="Nickname" component={NicknameScreen} />
    </Stack.Navigator>
  );
};

export default SignupStack;
