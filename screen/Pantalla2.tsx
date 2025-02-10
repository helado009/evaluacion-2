import React from 'react';
import { View, Image } from 'react-native';
import { styles } from '../theme/apptheme';

export const Pantalla2 = () => {
    return (
      <View style={styles.container}>
        <Image 
  source={require('../assets2/imagn1.png')} 
  style={styles.image} 
/>
      </View>
    );
  };