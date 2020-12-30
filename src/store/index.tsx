import {Action, applyMiddleware, createStore, Store} from "redux"
import AsyncStorage from '@react-native-community/async-storage'
import { persistReducer, Storage } from 'redux-persist'
import thunk from "redux-thunk";
import {rootReducer} from "./../reducers/root"
import {initialState} from "./initial-state"

interface I_PersistConfig {
    key: string;
    storage: Storage;
}

const persistConfig: I_PersistConfig = {
    key: 'skizaStore',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: Store<unknown, Action<any>> = createStore(persistedReducer, initialState, applyMiddleware(thunk))