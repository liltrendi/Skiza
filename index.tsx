/**
 * @format
 */

import 'react-native-gesture-handler';
import React from "react"
import {AppRegistry} from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor, persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';
import { store } from './src/store';
import App from './App';

interface ReduxWrapperProps {}

const ReduxWrapper: React.FC<ReduxWrapperProps> = (): JSX.Element => {
    const persistor: Persistor = persistStore(store);
    // persistor.purge()
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, (): React.FC => ReduxWrapper);
