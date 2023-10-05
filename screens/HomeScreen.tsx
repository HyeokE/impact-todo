import * as React from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";

function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView>
            <TextInput/>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Detail')}
            />
            </SafeAreaView>
        </View>
    );
}

export default HomeScreen