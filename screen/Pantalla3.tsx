import React from 'react';
import { View, Image } from 'react-native';
import { styles } from '../theme/apptheme';

export const Pantalla3 = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets2/imagn2.png')} style={styles.image} />
    </View>
  );
};