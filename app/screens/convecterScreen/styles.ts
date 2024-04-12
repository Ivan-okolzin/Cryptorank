import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  currencyAmount: {
    fontSize: 32,
    marginRight: 10,
    color: '#000',
  },
  currencyNameContainer: {
    flexDirection: 'row',
  },
  currencyIcon: {
    width: 30,
    height: 30,
    backgroundColor: 'grey',
    marginRight: 10,
  },
  currencyCode: {
    fontSize: 24,
    color: '#000',
  },
  convertButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
