import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Alert } from 'react-native'
import { Card, Input, Button, Icon } from 'react-native-elements'
import { useAuth } from '../context/AuthContext'

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const { resetPassword } = useAuth()

  const handleReset = async () => {
    if (!email) {
      return Alert.alert('Atenção', 'Por favor, preencha o e-mail.')
    }
    setLoading(true)
    try {
      await resetPassword(email)
      Alert.alert('Enviado!', 'Verifique sua caixa de entrada.')
      navigation.goBack()
    } catch (err) {
      Alert.alert('Erro', err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>Esqueci minha senha</Card.Title>

        <Input
          placeholder="Seu e-mail"
          leftIcon={
            <Icon
              name="email"
              type="material"
              size={20}
              color="#888"
            />
          }
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          containerStyle={styles.input}
        />

        <Button
          title="Enviar e-mail"
          loading={loading}
          onPress={handleReset}
          buttonStyle={styles.sendButton}
        />

        <Button
          title="← Voltar"
          type="clear"
          containerStyle={styles.backButton}
          onPress={() => navigation.goBack()}
        />
      </Card>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 320,
    borderRadius: 8,
    paddingVertical: 20,
    // sombra suave no iOS e Android
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
  },
  sendButton: {
    borderRadius: 4,
    paddingVertical: 12,
  },
  backButton: {
    marginTop: 10,
  },
})
