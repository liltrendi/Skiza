import React, { useEffect } from 'react'
import { connect, RootStateOrAny, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import LottieView from 'lottie-react-native';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {requestReadExternalStoragePermissionAgain} from "../../../../actions/onboarding"
import { I_ReadExternalStoragePermissionDeniedProps, I_ReadExternalStoragePermissionDeniedStyles } from './interfaces'
import { HOME_FOLDER_ERROR_ANIMATION } from '../../../../assets/animations';
import { isThemeDark } from '../../../../util/theme';
import { DARK_THEME, LIGHT_THEME, SHARED_THEME } from '../../../../constants/theme';
import { resetCurrentSong } from '../../../../actions/music';

interface I_GlobalStateProps {
    theme: string;
}

interface I_AdditionalProps {
    requestReadExternalStoragePermissionAgain: (state: RootStateOrAny) => Promise<void>;
    resetCurrentSong: (state: RootStateOrAny) => Promise<void>;
}

type T_Props = I_ReadExternalStoragePermissionDeniedProps & I_AdditionalProps;

const ReadExternalStoragePermissionDenied: React.FC<T_Props> = ({requestReadExternalStoragePermissionAgain, resetCurrentSong}): JSX.Element => {
    const folderAnimation = HOME_FOLDER_ERROR_ANIMATION;
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const styles: I_ReadExternalStoragePermissionDeniedStyles = getStyles(globalState);

    useEffect(() => {
        resetCurrentSong(globalState)
    }, []);

    return (
        <View style={styles.container}>
            <LottieView
                source={folderAnimation}
                style={styles.LottieView}
                autoPlay={true}
            />
            <Text style={styles.screenText}>
                Oops! We can't find any songs.
            </Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={() => requestReadExternalStoragePermissionAgain(globalState)}>
                <Text style={styles.buttonText}>Rescan</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        requestReadExternalStoragePermissionAgain: (state: RootStateOrAny) => dispatch(requestReadExternalStoragePermissionAgain(state)),
        resetCurrentSong: (state: RootStateOrAny) => dispatch(resetCurrentSong(state))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReadExternalStoragePermissionDenied)

const getStyles = (state: RootStateOrAny): I_ReadExternalStoragePermissionDeniedStyles => {
    const {theme}: I_GlobalStateProps = state;
    return StyleSheet.create<I_ReadExternalStoragePermissionDeniedStyles>({
        container: {
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
        },
        LottieView: {
            height: 80,
            width: 80,
            marginBottom: 10
        },
        screenText: {
            fontFamily: "CircularStd-Book",
            fontSize: 15,
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