import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import CurrencyConverter from '../../components/currensyConvector/currensyConvector';

const ConverterScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Converter</Text>
      <CurrencyConverter />
    </View>
  );
};

export default ConverterScreen;
