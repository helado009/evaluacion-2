import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Boton } from '../components/boton';
import { styles } from '../theme/apptheme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigator';
import { useNavigation } from '@react-navigation/native';

// Definir el tipo de navegación
type NavigationProp = StackNavigationProp<RootStackParamList, 'Pantalla1'>;

export const Pantalla1screen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pantalla2')}>
        <Text style={styles.buttonText}>Imagen 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pantalla3')}>
        <Text style={styles.buttonText}>Imagen 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pantalla4')}>
        <Text style={styles.buttonText}>Mayor o Igual</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pantalla5')}>
        <Text style={styles.buttonText}>Menor o Igual</Text>
      </TouchableOpacity>
    </View>
  );
};

