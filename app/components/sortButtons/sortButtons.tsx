import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';
import {SortOrder} from '../../interfaces/currency';

const SortButtons = ({changeSort}) => {
  return (
    <View style={styles.sortButtonsContainer}>
      <TouchableOpacity
        style={styles.sortButton}
        onPress={() => changeSort(SortOrder.Rank)}>
        <Text style={styles.buttonText}>Rank ↑</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sortButton}
        onPress={() => changeSort(SortOrder.RankDescending)}>
        <Text style={styles.buttonText}>Rank ↓</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sortButton}
        onPress={() => changeSort(SortOrder.Price)}>
        <Text style={styles.buttonText}>Price ↑</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.sortButton}
        onPress={() => changeSort(SortOrder.PriceDescending)}>
        <Text style={styles.buttonText}>Price ↓</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SortButtons;
