import * as React from 'react';
import { Button, SafeAreaView, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TextInput />
      <Button title="Go to Details" onPress={() => navigation.navigate('Detail')} />
    </SafeAreaView>
  );
}

export default HomeScreen;
