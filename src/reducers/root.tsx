import {combineReducers} from 'redux';
import {themeReducer} from "./theme"
import { onboardingReducer } from './onboarding';
import { storageStatusReducer } from './permissions/storage';
import { songsReducer } from './music/songs';
import { currentSongReducer } from './player/currentSong';
import { playerModalReducer } from './player/modal';
import { songStateReducer } from './player/songState';
import { songQueueReducer } from './music/queue';
import { playlistsReducer } from './music/playlists'

export const rootReducer = combineReducers({
    onboarded: onboardingReducer,
    readExternalStoragePermission: storageStatusReducer,
    theme: themeReducer,
    showPlayerModal: playerModalReducer,
    songState: songStateReducer,
    currentSong: currentSongReducer,
    songs: songsReducer,
    songQueue: songQueueReducer,
    playlists: playlistsReducer
});