import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const GroupChatListScreen = ({ navigation }) => {
  const [chats, setChats] = useState([
    { id: 1, sender: 'Parent2', message: 'Did the route change?' },
    { id: 2, sender: 'Conductor', message: 'There is a traffic delay' },
    { id: 3, sender: 'Parent3', message: 'Hey there' },
    { id: 4, sender: 'Administrator', message: 'Fee dues cleared!!' },
    // Add more chat messages as needed
  ]);

  const handleChatPress = (chatId) => {
    // Navigate to individual chat screen with chatId
    navigation.navigate('IndividualChat', { chatId });
  };

  const renderChatItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem} onPress={() => handleChatPress(item.id)}>
      <View style={styles.chatContainer}>
        <Text style={styles.sender}>{item.sender}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={renderChatItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c5dcf1',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  chatItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chatContainer: {
    backgroundColor: '#7db0df',
    padding: 10,
    borderRadius: 5,
  },
  sender: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  message: {},
});

export default GroupChatListScreen;
