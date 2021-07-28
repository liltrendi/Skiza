import { RNAndroidAudioStore } from 'react-native-get-music-files';
import RNFetchBlob from 'rn-fetch-blob';
import { restructureFetchedSongs } from '../../util/songs';
import { I_SongOptions, I_SongSchema } from './interfaces';

export const defaultSongOptions: I_SongOptions = {
    title: true,
    artist: true,
    album: true,
    duration: true,
    cover: true,
}

export async function fetchSongsFromLocalStorage(songOptions: I_SongOptions): Promise<I_SongSchema[]>{
    const coverFolder: string = RNFetchBlob.fs.dirs.DocumentDir + '/.skiza';
    let results: Promise<I_SongSchema[]> = await RNAndroidAudioStore.getAll({...songOptions, coverFolder});
    return await restructureFetchedSongs(results);
}