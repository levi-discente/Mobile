import React, { useState, useContext } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { ContatoContext } from '../context/ContatoContext';

export default function CadastroContatoScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const { adicionarContato } = useContext(ContatoContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text>Nome</Text>
        <Input value={nome} onChangeText={setNome} placeholder="Digite seu nome" />
        <Text>Email</Text>
        <Input value={email} onChangeText={setEmail} placeholder="Digite seu email" />
        <Text>Telefone</Text>
        <Input value={telefone} onChangeText={setTelefone} placeholder="Digite seu telefone" />

        <Button
          title="Salvar"
          buttonStyle={styles.button}
          onPress={() => {
            adicionarContato({ nome, email, telefone });
            navigation.goBack();
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  form: { padding: 20 },
  button: { backgroundColor: '#2196F3', marginTop: 20 },
});

