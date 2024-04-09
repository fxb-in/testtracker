// ParentAdminButtons.js

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
const ParentAdminButtons = () => {
  const navigation = useNavigation();

  const handleParentPress = () => {
    // Navigate to the Parent Login screen when Parent button is pressed
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
        <View style={styles.backgroundShapes}>
        <View style={[styles.shape, styles.shape1]} />
        <View style={[styles.shape, styles.shape2]} />
        <View style={[styles.shape, styles.shape3]} />
      <LottieView style={styles.animation} source={require("../assets/Animation - 1711985685386.json")} autoPlay loop />
      <TouchableOpacity style={[styles.button, styles.parentButton]} onPress={handleParentPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8fb1d0', // Add your desired background color here
  },
  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  parentButton: {
    backgroundColor: '#6f89a2',
  },
  adminButton: {
    backgroundColor: '#6f89a2',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  animation: {
    height: 200,
    width: 50,
    aspectRatio: 1
  },
});

export default ParentAdminButtons;
