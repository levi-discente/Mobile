import React, { useState, useContext } from 'react';
import { SafeAreaView, StyleSheet, View, Alert } from 'react-native';
import { Card, Input, Button } from 'react-native-elements';
import { ContatoContext } from '../context/ContatoContext';

export default function EditarContatoScreen({ route, navigation }) {
  const { contato } = route.params;
  const [nome, setNome] = useState(contato.nome);
  const [email, setEmail] = useState(contato.email);
  const [telefone, setTelefone] = useState(contato.telefone);

  const { editarContato, excluirContato } = useContext(ContatoContext);

  const handleExcluir = () => {
    Alert.alert('Excluir Contato', 'Tem certeza?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: () => {
          excluirContato(contato.id);
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card containerStyle={{ width: 300, height: 400 }}>
        <Card.Title>Editar Contato</Card.Title>

        <Input placeholder="Nome" value={nome} onChangeText={setNome} />
        <Input placeholder="Email" value={email} onChangeText={setEmail} />
        <Input placeholder="Telefone" value={telefone} onChangeText={setTelefone} />

        <Button
          title="Salvar"
          buttonStyle={{ backgroundColor: 'green', marginBottom: 10 }}
          onPress={() => {
            editarContato({ id: contato.id, nome, email, telefone });
            navigation.goBack();
          }}
        />
        <Button title="Excluir" buttonStyle={{ backgroundColor: 'red' }} onPress={handleExcluir} />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

