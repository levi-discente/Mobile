import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Card, Image, Input, Button } from 'react-native-elements';

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Card containerStyle={{ width: 300, height: 500 }}>
        <Card.Title style={{ fontSize: 30 }}>Login</Card.Title>

        <View style={styles.imageContainer}>
          <Image source={require('../assets/user.png')} style={styles.image} />
        </View>

        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry />

        <Card.Divider />

        <Button title="Login" buttonStyle={{ backgroundColor: 'green', marginBottom: 10 }} onPress={() => navigation.navigate('ListaContatos')} />
        <Button title="Registrar" buttonStyle={{ backgroundColor: 'gray', marginBottom: 10 }} onPress={() => navigation.navigate('Cadastro')} />
        <Card.FeaturedSubtitle style={{ textAlign: 'center' }} onPress={() => navigation.navigate('ForgotPassword')}>
          Esqueceu a senha?
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
