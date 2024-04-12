import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConverterScreen from '../screens/convecterScreen/ConverterScreen';
import CurrencyListScreen from '../screens/currensyScreen/CurrencyListScreen';
import {Currency} from '../interfaces/currency';

export type RootStackParamList = {
  Converter: undefined;
  CurrencyListScreen: {
    onCurrencySelect: (selectedCurrency: Currency) => void | undefined;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Converter">
      <Stack.Screen name="ConverterScreen" component={ConverterScreen} />
      <Stack.Screen name="CurrencyListScreen" component={CurrencyListScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
