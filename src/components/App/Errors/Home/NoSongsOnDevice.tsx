import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { RootStateOrAny, useSelector, connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import LottieView from 'lottie-react-native';
import { INoSongsOnDeviceStyles, INoSongsOnDeviceProps } from "./interfaces"
import { ReadExternalStoragePermissionStatusConfig } from "../../Home/interfaces"
import { fetchSongs } from '../../../../actions/music';

const NoSongsOnDevice: React.FC<INoSongsOnDeviceProps> = ({fetchSongs}): JSX.Element => {

    const noSongsAnimation = require('./../../../../assets/animations/home/not-found.json');

    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const readExternalStoragePermission: string = globalState.readExternalStoragePermission;

    const readExternalStoragePermissionStatus: ReadExternalStoragePermissionStatusConfig = {
        granted: readExternalStoragePermission === "granted",
        denied: readExternalStoragePermission === "denied",
        blocked: readExternalStoragePermission === "blocked"
    }

    const styles: INoSongsOnDeviceStyles = getStyles(globalState, readExternalStoragePermissionStatus);

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
                <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={fetchSongs}>
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
        fetchSongs: () => dispatch(fetchSongs())
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoSongsOnDevice)

const getStyles = (state: RootStateOrAny, storagePermissionStatus: ReadExternalStoragePermissionStatusConfig): INoSongsOnDeviceStyles => {
    const showPlayerFooter: boolean = state.showPlayerFooter;
    return StyleSheet.create<INoSongsOnDeviceStyles>({
        safeAreaContainer: {
            justifyContent: storagePermissionStatus.granted ? undefined : "center",
            alignItems: storagePermissionStatus.granted ? undefined : "center",
            marginBottom: showPlayerFooter ? 60 : 0,
            marginTop: 60,
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
            paddingRight: 20
        },
        button: {
            alignItems: "center",
            backgroundColor: "#f05454",
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
            color: "#fff"
        }
    })
}