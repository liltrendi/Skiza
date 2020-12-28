import { RNAndroidAudioStore } from 'react-native-get-music-files';
import RNFetchBlob from 'rn-fetch-blob';
import { restructureFetchedSongs } from '../../util/songs';
import { ISongOptions, ISongsSchema } from './interfaces';

export const defaultSongOptions: ISongOptions = {
    title: true,
    artist: true,
    album: true,
    duration: true,
    cover: true,
    blured: false
}

export async function fetchSongsFromLocalStorage(songOptions: ISongOptions): Promise<Array<ISongsSchema>>{
    const coverFolder: string = RNFetchBlob.fs.dirs.DocumentDir + '/.skiza';
    let results: Promise<Array<ISongsSchema>> = await RNAndroidAudioStore.getAll({...songOptions, coverFolder});
    return await restructureFetchedSongs(results);
}