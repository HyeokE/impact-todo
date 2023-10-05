import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import MainTab from './BottomTab';

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
};

export default MainNavigation;
