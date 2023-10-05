import React, { useCallback } from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import MainNavigation from './navigation/MainNavigation';
import IntroScreen from './screens/IntroScreen';
import SignupStack from './Stack/SignupStack';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Pretendard-ExtraBold': require('./fonts/Pretendard-ExtraBold.otf'),
    'Pretendard-SemiBold': require('./fonts/Pretendard-SemiBold.otf'),
    'Pretendard-Medium': require('./fonts/Pretendard-Medium.otf'),
    'Pretendard-Regular': require('./fonts/Pretendard-Regular.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
    console.log(fontsLoaded, fontError);
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <View onLayout={onLayoutRootView}>
        <Text>adsdasdasddss</Text>
        <Stack.Navigator initialRouteName="Signup">
          <Stack.Screen
            name="Intro"
            component={IntroScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupStack}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Main"
            component={MainNavigation}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}
