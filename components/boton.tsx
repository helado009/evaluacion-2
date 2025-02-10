import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import { styles } from '../theme/apptheme';

interface BotonProps {
  titulo: string;
  onPress: () => void;
  estilo?: StyleProp<ViewStyle>;
}

export const Boton: React.FC<BotonProps> = ({ titulo, onPress, estilo }) => {
  return (
    <TouchableOpacity style={[styles.button, estilo]} onPress={onPress}>
      <Text style={styles.buttonText}>{titulo}</Text>
    </TouchableOpacity>
  );
};