import {combineReducers} from 'redux';
import {themeReducer} from "./theme"
import { onboardingReducer } from './onboarding';
import { storageStatusReducer } from './permissions/storage';
import { songsReducer } from './music/songs';
import { currentSongReducer } from './player/currentSong';
import { isPlayingReducer } from './player/isPlaying';

export const rootReducer = combineReducers({
    theme: themeReducer,
    onboarded: onboardingReducer,
    readExternalStoragePermission: storageStatusReducer,
    songs: songsReducer,
    currentSong: currentSongReducer,
    isPlaying: isPlayingReducer
});