import { RNAndroidAudioStore } from 'react-native-get-music-files';
import RNFetchBlob from 'rn-fetch-blob';
import { restructureFetchedSongs } from '../../util/songs';
import { ISongOptions, ISongSchema } from './interfaces';

export const defaultSongOptions: ISongOptions = {
    title: true,
    artist: true,
    album: true,
    duration: true,
    cover: true,
    blured: false
}

export async function fetchSongsFromLocalStorage(songOptions: ISongOptions): Promise<Array<ISongSchema>>{
    const coverFolder: string = RNFetchBlob.fs.dirs.DocumentDir + '/.skiza';
    let results: Promise<Array<ISongSchema>> = await RNAndroidAudioStore.getAll({...songOptions, coverFolder});
    return await restructureFetchedSongs(results);
}