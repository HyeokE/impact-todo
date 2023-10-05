import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import MainTab from "./BottomTab";


const Navigation = () => {
    return (
        <NavigationContainer>
            <MainTab/>
        </NavigationContainer>
    );
};

export default Navigation;