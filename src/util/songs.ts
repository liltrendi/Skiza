import { ImageSourcePropType, ToastAndroid } from "react-native";
import {I_SongSchema, I_UniqueArtist} from "../controllers/music/interfaces"
import {capitalizeFirstLetter, isNullUndefined} from "./util"

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
            album: song.album === "<unknown>" ? "Unknown" : song.album,
            cover: song.cover || "",
            folder: getFolder(song.path)
        }
    })
}

export const getAlbumNames = (songs: I_SongSchema[]): string[] => {
    let albumNames: string[] = [];

    for(let song of songs){
        if(song.album === "Unknown") continue;

        if(!albumNames.includes(song.album)){
            albumNames.push(song.album);
        }
    }

    return albumNames;
}

export const getSongIds = (artist: string, songs: I_SongSchema[]): string[] => {
    let songIds: string[] = [];

    for(let song of songs){
        if(!songIds.includes(song.id)){
            if(song.author.toLowerCase() === artist.toLowerCase()){
                songIds.push(song.id);
            }
        }
    }

    return songIds;
}

export const getRandomCoverArtForArtist = (artist: string, songs: I_SongSchema[]): string => {
    for(let song of songs){
        if(song.author.toLowerCase().includes(artist.toLowerCase()) || song.author.toLowerCase() === artist.toLowerCase()){
            if(song.cover.length > 0){
                return song.cover;
            }
        }
    }

    return "";
}

export const sortUniqueArtistsByHighestSongsFirst = (uniqueArtists: I_UniqueArtist[]): I_UniqueArtist[] => {
    return uniqueArtists.sort((artistOne: I_UniqueArtist, artistTwo: I_UniqueArtist) => artistTwo.songs.length - artistOne.songs.length)
}

export const getUniqueArtists = (songs: I_SongSchema[]): I_UniqueArtist[] => {

    let uniqueArtists: I_UniqueArtist[] = [];

    for(let song of songs){

        let artist: string = capitalizeFirstLetter(song.author);

        if(artist === "Unknown") continue;

        const existingArtist: I_UniqueArtist | undefined = uniqueArtists.find((item) => item.name === artist);

        if(isNullUndefined(existingArtist)){
            uniqueArtists.push({
                id: uuid.v4(),
                name: artist,
                songs: getSongIds(artist, songs),
                albums: getAlbumNames(songs),
                randomCover: getRandomCoverArtForArtist(artist, songs)
            })
        }
    }

    let sortedUniqueArtists: I_UniqueArtist[] = sortUniqueArtistsByHighestSongsFirst(uniqueArtists)

    return sortedUniqueArtists;
}

export const deduceCoverArtToUse = (songCover: string, placeholderImage: ImageSourcePropType): ImageSourcePropType | {uri: string} => {
    if(songCover.length > 0){
        return {uri: songCover};
    }

    return placeholderImage;
}

export const getSongDurationInMinutes = (duration: string): string => {
    let hours:  number = Math.floor(parseInt(duration)/1000/60/60);
    let minutes:  number, seconds:  number;
    minutes = Math.floor((parseInt(duration)/1000/60/60 - hours)*60);
    seconds = Math.floor(((parseInt(duration)/1000/60/60 - hours)*60 - minutes)*60);
    return `${minutes < 10 ? ('0'+minutes) : minutes}:${seconds < 10 ? ('0'+seconds) : seconds}`;
}

export const showToast = (message: string): void => {
	ToastAndroid.showWithGravityAndOffset(message, ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 300);
}