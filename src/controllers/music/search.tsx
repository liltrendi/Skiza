import { ISongSchema } from "./interfaces";

export function filterMatchingSongsFromSearch(songs: ISongSchema[], searchTerm: string): ISongSchema[]{
    const songPropertiesToSearchWithin: string[] = ["album", "author", "fileName", "title"];
    const searchRegex: RegExp = new RegExp(searchTerm, 'i');

    const filteredSongs: ISongSchema[] = songs.reduce((acc: ISongSchema[], song: ISongSchema) => {
        for(let property of songPropertiesToSearchWithin){
            let songProperty: string = song[property];
            let songAlreadyMatched: ISongSchema | undefined = acc.find((item: ISongSchema) => item.id === song.id);

            if(!songAlreadyMatched && songProperty.match(searchRegex)){
                acc.push(song);
            }
        }
        return acc;
    }, [])

    return filteredSongs;
}