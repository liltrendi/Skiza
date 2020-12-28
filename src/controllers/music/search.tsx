import { ISongsSchema } from "./interfaces";

export function filterMatchingSongsFromSearch(songs: ISongsSchema[], searchTerm: string): ISongsSchema[]{
    const songPropertiesToSearchWithin: string[] = ["album", "author", "fileName", "title"];
    const searchRegex: RegExp = new RegExp(searchTerm, 'i');

    const filteredSongs: ISongsSchema[] = songs.reduce((acc: ISongsSchema[], song: ISongsSchema) => {
        for(let property of songPropertiesToSearchWithin){
            let songProperty: string = song[property];
            let songAlreadyMatched: ISongsSchema | undefined = acc.find((item: ISongsSchema) => item.id === song.id);

            if(!songAlreadyMatched && songProperty.match(searchRegex)){
                acc.push(song);
            }
        }
        return acc;
    }, [])

    return filteredSongs;
}