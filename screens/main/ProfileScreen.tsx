import React from 'react';
import {Button, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const ProfileScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>프로필 Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Detail')}
            />
        </View>
    );
};

export default ProfileScreen;