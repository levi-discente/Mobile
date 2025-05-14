import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, ActivityIndicator } from 'react-native'
import { Card, Image, Input, Button } from 'react-native-elements'
import Toast from 'react-native-toast-message'
import { useAuth } from '../context/AuthContext'

export default function LoginScreen({ navigation }) {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    try {
      await login(email, password)
      Toast.show({
        type: 'success',
        text1: 'Bem-vindo de volta!',
        text2: 'Login realizado com sucesso.'
      })
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Falha no login',
        text2: err.message
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>Login</Card.Title>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/user.png')} style={styles.image} />
        </View>

        <Input
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {loading ? (
          <ActivityIndicator style={{ marginVertical: 10 }} />
        ) : (
          <Button
            title="Entrar"
            buttonStyle={styles.loginButton}
            onPress={handleLogin}
          />
        )}

        <Button
          title="Registrar"
          type="outline"
          buttonStyle={styles.registerButton}
          onPress={() => navigation.navigate('Cadastro')}
        />

        <Card.Divider />

        <Button
          title="Esqueceu a senha?"
          type="clear"
          onPress={() => navigation.navigate('ForgotPassword')}
        />
      </Card>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: { width: 300 },
  title: { fontSize: 30 },
  imageContainer: { alignSelf: 'center', marginBottom: 20 },
  image: { width: 100, height: 100 },
  loginButton: { backgroundColor: 'green', marginVertical: 10 },
  registerButton: { marginBottom: 20 }
})

