import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';

const ExploreScreen = () => {
  const destinations = ['Resort', 'Homestay', 'Hotel', 'Lodge', 'Villa', 'Apartment', 'Hostel'];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome!</Text>
      <TextInput style={styles.searchInput} placeholder="Search here ..." />

      <Text style={styles.sectionTitle}>Popular Destination</Text>
      <FlatList
        data={destinations}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.destinationBox}>
            <Text>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  searchInput: {
    backgroundColor: '#f0f0f0', padding: 10, borderRadius: 8, marginBottom: 20,
  },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  destinationBox: {
    backgroundColor: '#e6f7ff', flex: 1, margin: 5, padding: 20, borderRadius: 10, alignItems: 'center',
  },
});

export default ExploreScreen;
