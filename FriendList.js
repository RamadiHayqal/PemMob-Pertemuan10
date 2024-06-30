import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const friends = [
  { id: '1', name: 'Elvan Nasrul', description: 'Mahasiswa UMMI, Prodi Teknik  Informatika, NIM 2230511119' },
  { id: '2', name: ' M. Prasetyo', description: 'Mahasiswa UMMI, Prodi Teknik Informatika, NIM 2230511116' },
  { id: '3', name: 'Bramasta W.K.', description: 'Mahasiswa UMMI, Prodi Teknik Informatika, NIM 2230511110' },
  { id: '4', name: 'Putra Satria', description: 'Mahasiswa UMMI, Prodi Teknik Informatika, NIM 2230511130' },
];

export default function FriendsList({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('Friend Detail', { friend: item })}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
  },
});
