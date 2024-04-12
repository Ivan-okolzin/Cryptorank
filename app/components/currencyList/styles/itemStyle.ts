import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  currencyItem: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  currencyImage: {
    width: 30,
    height: 30,
    marginRight: 10,
    backgroundColor: 'gray',
    borderRadius: 20,
  },
  currencyDetails: {
    flex: 1,
  },
  currencyName: {
    fontSize: 18,
  },
  currencySymbol: {
    fontSize: 16,
    color: '#666',
  },
});
