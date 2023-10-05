import React from 'react';
import HomeScreen from "../screens/HomeScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainTab from "../Navigation/BottomTab";
import DetailScreen from "../screens/DetailScreen";


export type HomeStackType = {
    Home: undefined;
    Detail: undefined;
};
const Stack = createNativeStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    );
};

export default HomeStack;