export interface SongSchemaExtender {
    [key: string]: string;
}

export interface ISongsSchema extends SongSchemaExtender {
    fileName: string;
    path: string;
    title: string;
    author: string;
    duration: string;
    album: string;
    id: string;
    cover: string;
}

export interface ISongOptions {
    title: boolean;
    artist: boolean;
    album: boolean;
    duration: boolean;
    cover: boolean;
    blured: boolean;
}