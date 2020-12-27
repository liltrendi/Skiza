import {ISongsSchema} from "../controllers/music/interfaces"
import {isNullUndefined} from "./util"

const uuid = require('react-native-uuid');

export async function restructureFetchedSongs(fetchedSongs: Promise<Array<ISongsSchema>>): Promise<Array<ISongsSchema>>{
    if(isNullUndefined(fetchedSongs)){
        return [];
    }

    let songs: ISongsSchema[] = await fetchedSongs;

    return songs.map((song) => {
        return {...song, id: `${uuid.v4()}`};
    })
}