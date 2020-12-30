import { ImageSourcePropType } from "react-native";

export interface I_SongSchemaExtender {
    [key: string]: string;
}

export interface I_SongSchema extends I_SongSchemaExtender {
    fileName: string;
    path: string;
    title: string;
    author: string;
    duration: string;
    album: string;
    id: string;
    cover: string;
}

export interface I_SongOptions {
    title: boolean;
    artist: boolean;
    album: boolean;
    duration: boolean;
    cover: boolean;
    blured: boolean;
}

export interface I_UniqueArtist {
    id: string;
    name: string;
    songs: string[];
    albums: string[];
    randomCover: string;
}