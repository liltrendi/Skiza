import { I_SongSchema } from "./interfaces";

export function filterMatchingSongsFromSearch(songs: I_SongSchema[], searchTerm: string): I_SongSchema[]{
    const songPropertiesToSearchWithin: string[] = ["album", "author", "fileName", "title"];
    const searchRegex: RegExp = new RegExp(searchTerm, 'i');

    const filteredSongs: I_SongSchema[] = songs.reduce((acc: I_SongSchema[], song: I_SongSchema) => {
        for(let property of songPropertiesToSearchWithin){
            let songProperty: string = song[property];
            let songAlreadyMatched: I_SongSchema | undefined = acc.find((item: I_SongSchema) => item.id === song.id);

            if(!songAlreadyMatched && songProperty.match(searchRegex)){
                acc.push(song);
            }
        }
        return acc;
    }, [])

    return filteredSongs;
}