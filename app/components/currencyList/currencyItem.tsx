import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import styles from './styles/itemStyle';

const CurrencyItem = ({currency, onSelect}) => (
  <TouchableOpacity
    style={styles.currencyItem}
    onPress={() => onSelect(currency)}>
    {currency.images ? (
      <Image
        style={styles.currencyImage}
        source={{uri: currency.images['200x200']}}
      />
    ) : (
      <View style={styles.currencyImage} />
    )}
    <View style={styles.currencyDetails}>
      <Text style={styles.currencyName}>{currency.name}</Text>
      <Text style={styles.currencySymbol}>{currency.symbol}</Text>
    </View>
  </TouchableOpacity>
);

export default CurrencyItem;
