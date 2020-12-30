import {I_SongSchema} from "../controllers/music/interfaces"
import {isNullUndefined} from "./util"

const uuid = require('react-native-uuid');

export function getFolder(path: string): string {
	let dirArr: string[] = path.split('/');
	return dirArr[dirArr.length - 2];
}

export async function restructureFetchedSongs(fetchedSongs: Promise<Array<I_SongSchema>>): Promise<Array<I_SongSchema>>{
    if(isNullUndefined(fetchedSongs)){
        return [];
    }

    let songs: I_SongSchema[] = await fetchedSongs;

    return songs.map((song: I_SongSchema) => {
        return {
            ...song,
            id: uuid.v4(),
            author: song.author === "<unknown>" ? "Unknown" : song.author,
            cover: song.cover || "",
            folder: getFolder(song.path)
        }
    })
}