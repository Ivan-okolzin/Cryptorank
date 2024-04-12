import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Currency} from '../../interfaces/currency';
import styles from './styles';
import CryptoService from '../../services/CryptoService';

type Props = {
  onCurrencyChange?: (currency: Currency) => void;
};

const CurrencyConverter: React.FC<Props> = ({onCurrencyChange}) => {
  const navigation = useNavigation();
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(
    null,
  );

  const handleCurrencyChange = (currency: Currency) => {
    setSelectedCurrency(currency);
    onCurrencyChange && onCurrencyChange(currency);
  };

  useEffect(() => {
    const fetchDefaultCurrency = async () => {
      try {
        const result = await CryptoService.fetchCurrencies({limit: 1});
        if (result.data.length > 0) {
          setSelectedCurrency(result.data[0]);
          onCurrencyChange && onCurrencyChange(result.data[0]);
        }
      } catch (error) {
        console.error('Failed to fetch currencies:', error);
      }
    };

    fetchDefaultCurrency();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() =>
          navigation.navigate(
            'CurrencyListScreen' as never,
            {
              onCurrencySelect: handleCurrencyChange,
            } as never,
          )
        }>
        <Text style={styles.currencyAmount}>1</Text>
        <View style={styles.currencyNameContainer}>
          <View style={styles.currencyIcon} />
          <Text style={styles.currencyCode}>{selectedCurrency?.symbol}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Text style={styles.currencyAmount}>
          {selectedCurrency?.values?.USD?.price.toFixed(2)}
        </Text>
        <View style={styles.currencyNameContainer}>
          <View style={styles.currencyIcon} />
          <Text style={styles.currencyCode}>USD</Text>
        </View>
      </View>
    </View>
  );
};

export default CurrencyConverter;
