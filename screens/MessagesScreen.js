import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const messages = [
  { name: 'Claudia Alves', message: 'Do more of what you love.', time: '3m ago' },
  { name: 'Dani Martinez', message: 'Do your own thing.', time: '5m ago' },
  { name: 'Kimberly Nguyen', message: 'Kindness is beautiful.', time: '1h ago' },
  { name: 'Mariana Napolitani', message: 'Live your purpose.', time: '2h ago' },
];

const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages & Chat</Text>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.messageBox}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.message} • {item.time}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  messageBox: {
    padding: 12, backgroundColor: '#fff', borderRadius: 10, marginBottom: 10,
  },
  name: { fontWeight: 'bold' },
});

export default MessagesScreen;
