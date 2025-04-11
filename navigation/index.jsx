import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import ListaContatosScreen from '../screens/ListaContatosScreen';
import EditarContatoScreen from '../screens/EditarContatoScreen';
import CadastroContatoScreen from '../screens/CadastroContatoScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="ListaContatos" component={ListaContatosScreen} />
        <Stack.Screen name="CadastroContato" component={CadastroContatoScreen} />
        <Stack.Screen name="EditarContato" component={EditarContatoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
