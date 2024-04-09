import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function AboutScreen() {
  return (
    <View tyle={styles.container}>
      <Text style={styles.title}>AboutScreen</Text>
      <Text style={styles.description}>
         description goes here.
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
 
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 300,
    textAlign: 'center', // Center text horizontally
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center', // Center text horizontally
  },
});