import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, ActivityIndicator } from 'react-native'
import { Card, Image, Input, Button } from 'react-native-elements'
import Toast from 'react-native-toast-message'
import { useAuth } from '../context/AuthContext'

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

export default function CadastroScreen({ navigation }) {
  const { register } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async () => {
    if (!email.trim()) {
      return Toast.show({ type: 'error', text1: 'Erro', text2: 'Informe seu e-mail.' })
    }
    if (!validateEmail(email)) {
      return Toast.show({ type: 'error', text1: 'Erro', text2: 'E-mail inválido.' })
    }

    if (password.length < 7) {
      return Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'A senha deve ter no mínimo 7 caracteres.'
      })
    }

    if (password !== confirm) {
      return Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'As senhas não coincidem.'
      })
    }

    setLoading(true)
    try {
      await register(email, password)
      Toast.show({
        type: 'success',
        text1: 'Cadastro concluído',
        text2: 'Bem-vindo! Você já está logado.'
      })
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Falha no cadastro',
        text2: err.message
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>Cadastro</Card.Title>
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
        <Input
          placeholder="Confirmar senha"
          secureTextEntry
          value={confirm}
          onChangeText={setConfirm}
        />

        {loading ? (
          <ActivityIndicator style={{ marginVertical: 10 }} />
        ) : (
          <Button
            title="Registrar"
            buttonStyle={styles.registerButton}
            onPress={handleRegister}
          />
        )}

        <Button
          title="Já tem uma conta? Login"
          type="clear"
          onPress={() => navigation.goBack()}
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
  registerButton: { backgroundColor: 'green', marginVertical: 10 }
})
