export interface ISongsSchema {
    fileName: string;
    path: string;
    title: string;
    author: string;
    duration: string;
    album?: string;
    id: string;
    isActive: boolean;
}

export interface ISongOptions {
    title: boolean;
    artist: boolean;
    album: boolean;
    duration: boolean;
    cover: boolean;
    blured: boolean;
    coverFolder: string;
}