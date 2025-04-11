import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Card, Image, Input, Button } from 'react-native-elements';

export default function CadastroScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Card containerStyle={{ width: 300, height: 600 }}>
        <Card.Title style={{ fontSize: 30 }}>Cadastro</Card.Title>

        <View style={styles.imageContainer}>
          <Image source={require('../assets/user.png')} style={styles.image} />
        </View>

        <Input placeholder="Nome" />
        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry />
        <Input placeholder="Confirmar Password" secureTextEntry />

        <Card.Divider />
        <Button title="Registrar" buttonStyle={{ backgroundColor: 'green', marginBottom: 20 }} />
        <Card.FeaturedSubtitle style={{ textAlign: 'center' }} onPress={() => navigation.goBack()}>
          Já tem uma conta?
        </Card.FeaturedSubtitle>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imageContainer: { width: 100, height: 100, alignSelf: 'center', marginBottom: 20 },
  image: { width: 100, height: 100 },
});
