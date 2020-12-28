import {ISongsSchema} from "../controllers/music/interfaces"
import {isNullUndefined} from "./util"

const uuid = require('react-native-uuid');

export function getFolder(path: string): string {
	let dirArr: string[] = path.split('/');
	return dirArr[dirArr.length - 2];
}

export async function restructureFetchedSongs(fetchedSongs: Promise<Array<ISongsSchema>>): Promise<Array<ISongsSchema>>{
    if(isNullUndefined(fetchedSongs)){
        return [];
    }

    let songs: ISongsSchema[] = await fetchedSongs;

    return songs.map((song: ISongsSchema) => {
        return {
            ...song,
            id: uuid.v4(),
            author: song.author === "<unknown>" ? "Unknown" : song.author,
            cover: song.cover || null,
            folder: getFolder(song.path)
        }
    })
}