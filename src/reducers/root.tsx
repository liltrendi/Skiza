import {combineReducers} from 'redux';
import {themeReducer} from "./theme"
import { onboardingReducer } from './onboarding';
import { playerFooterReducer } from './player/footer';

export const rootReducer = combineReducers({
    theme: themeReducer,
    onboarded: onboardingReducer,
    showPlayerFooter: playerFooterReducer
});