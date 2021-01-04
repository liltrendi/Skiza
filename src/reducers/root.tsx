import {combineReducers} from 'redux';
import {themeReducer} from "./theme"
import { onboardingReducer } from './onboarding';
import { storageStatusReducer } from './permissions/storage';
import { songsReducer } from './music/songs';
import { currentSongReducer } from './player/currentSong';
import { playerModalReducer } from './player/modal';
import { songStateReducer } from './player/songState';
import { songQueueReducer } from './music/queue';

export const rootReducer = combineReducers({
    theme: themeReducer,
    onboarded: onboardingReducer,
    readExternalStoragePermission: storageStatusReducer,
    songs: songsReducer,
    songQueue: songQueueReducer,
    currentSong: currentSongReducer,
    songState: songStateReducer,
    showPlayerModal: playerModalReducer
});