import React from 'react';
// eslint-disable-next-line import/namespace
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

import GoogleIcon from '../../assets/Google.svg';

const NicknameScreen = () => {
  const onPress = () => {};
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <GoogleIcon width={24} height={24} />
        <Text style={styles.text}>Google로 계속하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  text: {
    marginLeft: 10,
    color: '#FFF',
  },
});

export default NicknameScreen;
