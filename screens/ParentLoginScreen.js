import React, { useState } from 'react';
import {Alert} from 'react-native';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, onValue } from "firebase/database";

const ParentLoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const db = getDatabase();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      const userEmail = userCredential.user.email;
      const userRef = ref(db, '1VivfhT1LdoNWCHpFKH4MODTanpbljFe6iinFTJmIFBU/' + userEmail.replace('.', ','));
      onValue(userRef, (snapshot) => {
        const userData = snapshot.val();
        console.log("USER ROLE : ", userData.Role);
        if (userData && userData.Role === 'Student') {
          navigation.navigate("Home");
        } else if (userData && userData.Role === 'Admin') {
          navigation.navigate("AdminLogin");
        } else {
          setError("Role not defined for the user.");
        }
      });
    } catch (error) {
      Alert.alert(
        "Invalid credentials",
        "Please check your username and password",
        [{text:"OK", onPress: () => console.log("OK Pressed")}]
      );
    }
  };
 


  return (
    <View style={styles.container}>
    
      <LottieView style={[{ flex: 1 }, styles.animation]} source={require("../assets/lastupdate.json")} autoPlay loop />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
       
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    marginBottom: 90,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: "#fff"
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#8d00ff',
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  animation: {
    height: 10,
    width: 350,
    
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#8d00ff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default ParentLoginScreen;
