import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from 'lottie-react-native';
import React from "react";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');
export default function OnBoardingScreen() {
  const navigation = useNavigation();
  const handleDone = () => {
    navigation.navigate("Login");
  }
  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    )

  }
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {

            backgroundColor: "#f1c84d",
            image: (
              <View style={styles.lottie}>
                <Text style={styles.textAboveAnimation}>Track my Bus</Text>
                <LottieView style={{ flex: 1 }} source={require("../assets/maproute.json")} autoPlay loop />
              </View>
            ),
            title: (
              <View style={styles.titleContainers}>
                <Text style={styles.titleTexts}>Let's Get Started</Text>
              </View>
            ),
            subtitle: (
              <View style={styles.subtitleContainers}>
                <Text style={styles.subtitleTexts}>Track your school bus in real-time.</Text>
              </View>
            ),
          },
          {
            backgroundColor: "#cde5f6",
            image: (
              <View style={styles.lottielo}>
                <LottieView style={{ flex: 1 }} source={require("../assets/notify.json")} autoPlay loop />
              </View>
            ),
            title: (
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Get Notified</Text>
              </View>
            ),
            subtitle: (
              <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleText}>Receive alaerts for bus arrivals and departures</Text>
              </View>
            ),
          },
          {
            backgroundColor: "#96bec7",
            image: (
              <View style={styles.lottieno}>
                <LottieView style={{ flex: 1 }} source={require("../assets/safety.json")} autoPlay loop />
              </View>
            ),
            title: (
              <View style={styles.titleContainerss}>
                <Text style={styles.titleTextss}>SecureTrack</Text>
              </View>
            ),
            subtitle: (
              <View style={styles.subtitleContainerss}>
                <Text style={styles.subtitleTextss}> Student Safety Measures</Text>
              </View>
            ),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({ // Defined styles object
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  lottie: {
    height: 500,
    width: width * 0.5,
    aspectRatio: 1
  },
  lottielo: {
    height: width,
    width: width * 0.9,
    aspectRatio: 1
  },
  lottieno: {
    height: 300,
    width: width * 0.5,
    aspectRatio: 1
  },
  titleContainer: {
    marginTop: -50, // Adjust as needed to move the title up
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitleContainer: {
    alignItems: 'center',
  },
  subtitleText: {
    fontSize: 16,
    color: '#000',
  },
  titleContainers: {
    marginTop: -80, // Adjust as needed to move the title up
    alignItems: 'center',
  },
  titleTexts: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitleContainers: {
    alignItems: 'center',
  },
  subtitleTexts: {
    fontSize: 16,
    color: '#000',
  },
  titleContainerss: {
    marginTop: -10, // Adjust as needed to move the title up
    alignItems: 'center',
  },
  titleTextss: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitleContainerss: {
    alignItems: 'center',
  },
  subtitleTextss: {
    fontSize: 16,
    color: '#000',
  },
  doneButton: {
    padding: 20
  },
  textAboveAnimation: {
    position: 'absolute',
    top: 20, // Adjust as needed
    alignSelf: 'center',
    fontSize: 24, // Adjust as needed
    color: 'black',
    fontWeight: 'bold'
  },
});

