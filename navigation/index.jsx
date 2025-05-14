import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../screens/LoginScreen'
import CadastroScreen from '../screens/CadastroScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'

import ListaContatosScreen from '../screens/ListaContatosScreen'
import CadastroContatoScreen from '../screens/CadastroContatoScreen'
import EditarContatoScreen from '../screens/EditarContatoScreen'
import { useAuth } from '../context/AuthContext'

const Stack = createNativeStackNavigator()

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  )
}

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListaContatos" component={ListaContatosScreen} />
      <Stack.Screen name="CadastroContato" component={CadastroContatoScreen} />
      <Stack.Screen name="EditarContato" component={EditarContatoScreen} />
    </Stack.Navigator>
  )
}

export default function Routes() {
  const { user, loading } = useAuth()

  if (loading) return null
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}
