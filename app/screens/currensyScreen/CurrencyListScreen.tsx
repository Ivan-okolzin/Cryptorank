import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import CryptoService from '../../services/CryptoService';
import {Currency, SortOrder} from '../../interfaces/currency';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {useDebounceCallback} from 'usehooks-ts';
import SortButtons from '../../components/sortButtons/sortButtons';
import CurrencyList from '../../components/currencyList/currencyList';
import styles from './styles';

const CurrencyListScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'CurrencyListScreen'>>();

  const onCurrencySelect = route.params?.onCurrencySelect;

  const [offset, setOffset] = useState<number>(0);
  const [sort, setSort] = useState<SortOrder>(SortOrder.Rank);

  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const navigation = useNavigation();

  const fetchCurrencies = async () => {
    try {
      const fetchedCurrencies = await CryptoService.fetchCurrencies({
        limit: 10,
        offset,
        symbol: searchTerm,
        sort,
      });
      setCurrencies(
        offset > 0
          ? [...currencies, ...fetchedCurrencies.data]
          : fetchedCurrencies.data,
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const handleSortChange = (newSort: SortOrder) => {
    setSort(newSort);
    setOffset(0);
    fetchCurrencies();
  };
  const handleSearchTermChange = (text: string) => {
    debounced(text);
  };

  const debounced = useDebounceCallback(async (text: string) => {
    setSearchTerm(text);
    setOffset(0);
    await fetchCurrencies();
  }, 500);

  const loadMoreCurrencies = async () => {
    setOffset(prevOffset => prevOffset + 10);
    await fetchCurrencies();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Currency</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a currency..."
        onChangeText={handleSearchTermChange}
      />
      <SortButtons changeSort={handleSortChange} />
      <CurrencyList
        currencies={currencies}
        loadMoreCurrencies={loadMoreCurrencies}
        onSelect={item => {
          if (onCurrencySelect) {
            onCurrencySelect(item);
            navigation.goBack();
          }
        }}
      />
    </View>
  );
};

export default CurrencyListScreen;
