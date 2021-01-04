// Player Modal

import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export interface I_PlayerModalProps {}

export interface I_PlayerModalStyles {
    modal: ViewStyle;
    container: ViewStyle;
    topView: ViewStyle;
    downCaret: ViewStyle;
    barTitle: TextStyle;
    options: ViewStyle;
    middleView: ViewStyle;
    coverArt: ImageStyle;
    bottomView: ViewStyle;
    song: TextStyle;
    artist: TextStyle;
    progressBar: ViewStyle;
    durationView: ViewStyle;
    start: TextStyle;
    end: TextStyle;
    buttonsView: ViewStyle;
    shuffle: ViewStyle;
    previous: ViewStyle;
    play: ViewStyle;
    next: ViewStyle;
    repeat: ViewStyle;
    placeholderView: ViewStyle;
}