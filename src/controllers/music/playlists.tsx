import { RootStateOrAny } from "react-redux";
import { I_Playlist } from "./interfaces";

export async function getCurrentPlaylists(state: RootStateOrAny): Promise<I_Playlist[]> {
    let playlists: I_Playlist[] = state.playlists;
    return playlists;
}