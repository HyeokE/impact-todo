import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import GoogleIcon from '../assets/Google.svg';
import { colors } from '../styles/color';

const IntroScreen = () => {
  const onPress = () => {};

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text>Intro Screen</Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <GoogleIcon />
          <Text style={styles.text}>Google로 계속하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <GoogleIcon />

          <Text style={styles.text}>Apple로 계속하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
    backgroundColor: colors.white,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    gap: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.gray100,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  text: {
    fontWeight: '700',
    color: colors.gray900,
  },
});

export default IntroScreen;
