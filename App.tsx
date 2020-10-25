/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { mainAppNavigation } from './src/navigation';

interface AppProps {}

const App: React.FC<AppProps> = (): JSX.Element => {
  const onboardingComplete: boolean = useSelector((state: RootStateOrAny) => state.onboarded);
  return mainAppNavigation(onboardingComplete)
};

export default App;
