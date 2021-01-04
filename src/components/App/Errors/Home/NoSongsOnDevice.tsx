import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { RootStateOrAny, useSelector, connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import LottieView from 'lottie-react-native';
import { openSettings } from 'react-native-permissions';
import { I_NoSongsOnDeviceStyles, I_NoSongsOnDeviceProps } from "./interfaces"
import { I_ReadExternalStoragePermissionStatusConfig } from "../../Home/interfaces"
import { fetchSongs, setSongQueue } from '../../../../actions/music';
import { HOME_NOT_FOUND_ANIMATION } from '../../../../assets/animations';
import { I_SongSchema } from '../../../../controllers/music/interfaces';
import { isThemeDark } from '../../../../util/theme';
import { DARK_THEME, LIGHT_THEME, SHARED_THEME } from '../../../../constants/theme';
import { I_SongStateInitialProps } from '../../../../reducers/player/songState';

interface I_GlobalStateProps {
    theme: string;
    currentSong: I_SongSchema;
    songs: I_SongSchema[];
    songState: I_SongStateInitialProps;
}

interface I_AdditionalProps {
    setSongQueue: (song: I_SongSchema | undefined, songs: I_SongSchema[], shuffle: boolean) => Promise<void>;
}

type T_Props = I_NoSongsOnDeviceProps & I_AdditionalProps;

const NoSongsOnDevice: React.FC<T_Props> = ({fetchSongs, setSongQueue}): JSX.Element => {

    const noSongsAnimation = HOME_NOT_FOUND_ANIMATION;

    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const {currentSong, songs, songState}: I_GlobalStateProps = globalState;
    const readExternalStoragePermission: string = globalState.readExternalStoragePermission;

    const readExternalStoragePermissionStatus: I_ReadExternalStoragePermissionStatusConfig = {
        granted: readExternalStoragePermission === "granted",
        denied: readExternalStoragePermission === "denied",
        blocked: readExternalStoragePermission === "blocked"
    }

    const styles: I_NoSongsOnDeviceStyles = getStyles(globalState, readExternalStoragePermissionStatus);

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <LottieView
                    source={noSongsAnimation}
                    style={styles.LottieView}
                    autoPlay={true}
                />
                <Text style={styles.screenText}>
                    Snap, it's a ghost town here.
                </Text>
                <Text style={styles.screenText}>
                    No songs appear to exist on your device.
                </Text>
                <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={() => {
                    if(readExternalStoragePermissionStatus.granted){
                        fetchSongs()
                            .then(() => {
                                setSongQueue(currentSong, songs, songState.shuffling)
                            })
                            .catch((err: Error) => {
                                
                            })
                    }else{
                        Alert.alert("Permission Denied", "Please grant Skiza access to your storage from your device Settings", [{text: "Allow access", onPress: openSettings }], { cancelable: true })
                    }
                }}>
                    <Text style={styles.buttonText}>Rescan</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        fetchSongs: () => dispatch(fetchSongs()),
        setSongQueue: (song: I_SongSchema | undefined, songs: I_SongSchema[], shuffle: boolean) => dispatch(setSongQueue(song, songs, shuffle))
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoSongsOnDevice)

const getStyles = (state: RootStateOrAny, storagePermissionStatus: I_ReadExternalStoragePermissionStatusConfig): I_NoSongsOnDeviceStyles => {
    const {theme, currentSong}: I_GlobalStateProps = state;
    return StyleSheet.create<I_NoSongsOnDeviceStyles>({
        safeAreaContainer: {
            justifyContent: storagePermissionStatus.granted ? undefined : "center",
            alignItems: storagePermissionStatus.granted ? undefined : "center",
            backgroundColor: isThemeDark(theme) ? DARK_THEME.primaryBg : LIGHT_THEME.primaryBg,
            marginBottom: currentSong ? 60 : 0,
            flex: 1,
        },
        container: {
            justifyContent: "center",
            alignItems: "center",
            flex: 1
        },
        LottieView: {
            height: 80,
            width: 80,
            marginBottom: 10
        },
        screenText: {
            fontFamily: "CircularStd-Book",
            fontSize: 15,
            paddingLeft: 20,
            paddingRight: 20,
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt
        },
        button: {
            alignItems: "center",
            backgroundColor: isThemeDark(theme) ? SHARED_THEME.brightTextLv2 : SHARED_THEME.brightTextLv2,
            padding: 14,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            marginTop: 20
        },
        buttonText: {
            fontFamily: "CircularStd-Book",
            fontSize: 15,
            color: isThemeDark(theme) ? SHARED_THEME.lightTextLv1 : SHARED_THEME.lightTextLv1
        }
    })
}