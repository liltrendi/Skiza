import {Action, Store} from "redux"
import {createStore} from 'redux';
import { persistReducer, Storage } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import {rootReducer} from "./../reducers/root"
import {initialState} from "./initial-state"

interface PersistConfig {
    key: string,
    storage: Storage
}

const persistConfig: PersistConfig = {
    key: 'skizaStore',
    storage: AsyncStorage
}

const persistedReducer: any = persistReducer(persistConfig, rootReducer);

export const store: Store<unknown, Action<any>> = createStore(persistedReducer, initialState)