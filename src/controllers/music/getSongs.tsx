import { RNAndroidAudioStore } from 'react-native-get-music-files';
import { restructureFetchedSongs } from '../../util/songs';
import { ISongOptions, ISongsSchema } from './interfaces';

export const defaultSongOptions: ISongOptions = {
    title: true,
    artist: true,
    album: true,
    duration: true,
    cover: true,
    blured: false,
    coverFolder: "/.skiza"
}

export async function fetchSongsFromLocalStorage(songOptions: ISongOptions): Promise<Array<ISongsSchema>>{
    let results: Promise<Array<ISongsSchema>> = await RNAndroidAudioStore.getAll(songOptions);
    return await restructureFetchedSongs(results);
}