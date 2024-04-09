
/*import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const busTranslateX = useRef(new Animated.Value(-100)).current;
  const popupOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animation for the bus
    Animated.timing(busTranslateX, {
      toValue: 100,
      duration: 1500, // Adjust duration as needed
      useNativeDriver: true,
    }).start();

    // Animation for the popup
    Animated.timing(popupOpacity, {
      toValue: 1,
      delay: 1000, // Start after bus animation
      duration: 500, // Adjust duration as needed
      useNativeDriver: true,
    }).start();
  }, []);

  const handleGetStarted = () => {
    // Handle navigation to the next screen
    // Example: navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Bus Mate</Text>

      {/* Animation for the bus */
     /* <Animated.View style={[styles.bus, { transform: [{ translateX: busTranslateX }] }]} />

      {/* Popup animation */
    /*  <Animated.View style={[styles.popup, { opacity: popupOpacity }]}>
        <Text style={styles.popupText}>Let's Get Started</Text>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#add8e6',
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  bus: {
    width: 50,
    height: 30,
    backgroundColor: 'yellow',
    marginBottom: 50,
  },
  popup: {
    alignItems: 'center',
  },
  popupText: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2e8b57',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen; */
