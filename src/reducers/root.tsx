import {combineReducers} from 'redux';
import {themeReducer} from "./theme"
import { onboardingReducer } from './onboarding';
import { playerFooterReducer } from './player/footer';
import { storageStatusReducer } from './permissions/storage';

export const rootReducer = combineReducers({
    theme: themeReducer,
    onboarded: onboardingReducer,
    showPlayerFooter: playerFooterReducer,
    readExternalStoragePermission: storageStatusReducer
});