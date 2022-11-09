import React from 'react';
import Cadastro from './assets/paginas/Cadastro';
import Login from './assets/paginas/Login';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mesa from './assets/paginas/Mesa';
import {  StyleSheet } from 'react-native';

import { UsuarioProvedor } from './assets/contextos/UsuarioContexto';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <UsuarioProvedor>
      <NavigationContainer  >
        <Stack.Navigator >
          <Stack.Screen  name='Login' component={Login} />
          <Stack.Screen style={e.header} name='Cadastro' component={Cadastro} />
          <Stack.Screen style={e.header} name='Mesa' component={Mesa} />
        </Stack.Navigator>
      </NavigationContainer>
    </UsuarioProvedor>
  );
}
const e=StyleSheet.create({
  header:{
    backgroundColor: '#F2A922'
  }
})
