import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Card, Image, Input, Button } from 'react-native-elements';

export default function ForgotPasswordScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Card containerStyle={{ width: 300, height: 400 }}>
        <Card.Title style={{ fontSize: 20, marginBottom: 20 }}>Esqueci minha senha</Card.Title>

        <View style={styles.imageContainer}>
          <Image source={require('../../assets/user.png')} style={styles.image} />
        </View>

        <Input placeholder="Email" />
        <Card.Divider />
        <Button title="Enviar Email" buttonStyle={{ backgroundColor: 'green', marginTop: 30 }} />

        <Card.FeaturedSubtitle style={{ textAlign: 'center', marginTop: 20 }} onPress={() => navigation.goBack()}>
          Voltar
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
