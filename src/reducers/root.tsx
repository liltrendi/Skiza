import {combineReducers} from 'redux';
import {themeReducer} from "./theme"
import { onboardingReducer } from './onboarding';

export const rootReducer = combineReducers({
    theme: themeReducer,
    onboarded: onboardingReducer
});