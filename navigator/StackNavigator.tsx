import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1screen } from '../screen/Pantalla1screen';
import { Pantalla2 } from '../screen/Pantalla2';
import { Pantalla3 } from '../screen/Pantalla3';
import { Pantalla4 } from '../screen/Pantalla4';
import { Pantalla5 } from '../screen/Pantalla5';

// las rutas y tipos
export type RootStackParamList = {
  Pantalla1: undefined;
  Pantalla2: undefined;
  Pantalla3: undefined;
  Pantalla4: undefined;
  Pantalla5: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pantalla1">
        <Stack.Screen name="Pantalla1" component={Pantalla1screen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Pantalla2" component={Pantalla2} options={{ title: 'Imagen 1' }} />
        <Stack.Screen name="Pantalla3" component={Pantalla3} options={{ title: 'Imagen 2' }} />
        <Stack.Screen name="Pantalla4" component={Pantalla4} options={{ title: 'Mayor o Igual' }} />
        <Stack.Screen name="Pantalla5" component={Pantalla5} options={{ title: 'Menor o Igual' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
