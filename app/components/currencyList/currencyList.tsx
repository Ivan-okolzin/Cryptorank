import React from 'react';
import {FlatList} from 'react-native';
import CurrencyItem from './currencyItem';

const CurrencyList = ({currencies, onSelect, loadMoreCurrencies}) => {
  return (
    <FlatList
      data={currencies}
      keyExtractor={item => item.id.toString()}
      onEndReached={loadMoreCurrencies}
      onEndReachedThreshold={0.5}
      renderItem={({item}) => (
        <CurrencyItem currency={item} onSelect={onSelect} />
      )}
    />
  );
};

export default CurrencyList;
