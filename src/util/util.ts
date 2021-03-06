import { I_Playlist } from "../controllers/music/interfaces";

export const isNullUndefined = (item: any): boolean => {
    try {
        return item === null || item === undefined;
    } catch (err) {
        return true;
    }
}

export const isEmptyArray = (array: any[]): boolean => {
    try {
        if (isNullUndefined(array)) {
            return true;
        } else {
            return !(array instanceof Array && array.length > 0);
        }
    } catch (err) {
        return true;
    }
}

export const isEmptyString = (item: string): boolean => {
    return item.length === 0;
}

export const capitalizeFirstLetter = (item: string): string => {
    return item.charAt(0).toUpperCase() + item.slice(1);
}

export const sortPlaylistsByAscendingSongCount = (playlist1: I_Playlist, playlist2: I_Playlist): number => {
    return playlist2.songs.length - playlist1.songs.length;
}