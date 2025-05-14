import React, { useContext, useLayoutEffect } from 'react';
import { SafeAreaView, StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { ContatoContext } from '../context/ContatoContext';
import { useAuth } from '../context/AuthContext';

export default function ListaContatosScreen({ navigation }) {
  const { contatos } = useContext(ContatoContext);
  const { logout } = useAuth()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          type="clear"
          onPress={logout}
          icon={
            <Icon
              name="logout"
              type="material"
              size={24}
              color="#000"
            />
          }
          containerStyle={styles.logoutButton}
        />
      ),
    })
  }, [navigation, logout])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <Card.Title>{item.nome}</Card.Title>
            <Text>Email: {item.email}</Text>
            <Text>Telefone: {item.telefone}</Text>
            <Button
              title="Editar"
              type="outline"
              onPress={() => navigation.navigate('EditarContato', { contato: item })}
              containerStyle={{ marginTop: 10 }}
            />
          </Card>
        )}
      />
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('CadastroContato')}>
        <Icon name="add" color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 50,
  },
});

