import React from 'react';
import AppNavigator from './app/navigation/AppNavigator';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App: React.FC = () => <AppNavigator />;

export default App;
