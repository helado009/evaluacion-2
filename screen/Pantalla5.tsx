import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Boton } from '../components/boton';
import { styles } from '../theme/apptheme';

export const Pantalla5 = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const handleComparison = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (number1 < number2) {
      setResultado(`${number1} es menor que ${number2}`);
    } else if (number1 === number2) {
      setResultado(`${number1} es igual a ${number2}`);
    } else {
        //si no es  es menor o igual no sale nada 
      setResultado('');  
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Número 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
        style={styles.input}
      />
      <TextInput
        placeholder="Número 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
        style={styles.input}
      />
      <Boton titulo="<=" onPress={handleComparison} />
      {resultado !== '' && <Text style={styles.resultText}>{resultado}</Text>}
    </View>
  );
};
