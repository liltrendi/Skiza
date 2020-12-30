import {ISongSchema} from "../controllers/music/interfaces"
import {isNullUndefined} from "./util"

const uuid = require('react-native-uuid');

export function getFolder(path: string): string {
	let dirArr: string[] = path.split('/');
	return dirArr[dirArr.length - 2];
}

export async function restructureFetchedSongs(fetchedSongs: Promise<Array<ISongSchema>>): Promise<Array<ISongSchema>>{
    if(isNullUndefined(fetchedSongs)){
        return [];
    }

    let songs: ISongSchema[] = await fetchedSongs;

    return songs.map((song: ISongSchema) => {
        return {
            ...song,
            id: uuid.v4(),
            author: song.author === "<unknown>" ? "Unknown" : song.author,
            cover: song.cover || "",
            folder: getFolder(song.path)
        }
    })
}