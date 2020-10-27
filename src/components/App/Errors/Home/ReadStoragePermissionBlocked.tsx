import React from 'react'
import { StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import { openSettings } from 'react-native-permissions';

interface ReadStoragePermissionBlockedProps {}

interface Styles {
    LottieView: ViewStyle;
    screenText: TextStyle;
    button: ViewStyle;
    buttonText: TextStyle;
}

const ReadStoragePermissionBlocked: React.FC<ReadStoragePermissionBlockedProps> = (): JSX.Element => {
    const folderAnimation = require('./../../../../assets/animations/home/folder-error.json');

    const invokeSettingsOpen = (): void => {
        openSettings()
    }

    return (
        <React.Fragment>
            <LottieView
                source={folderAnimation}
                style={styles.LottieView}
                autoPlay={true}
            />
            <Text style={styles.screenText}>
                Dang, there's a problem.
            </Text>
            <Text style={styles.screenText}>
                Please allow Skiza to access your external storage.
            </Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={invokeSettingsOpen}>
                <Text style={styles.buttonText}>Open Settings</Text>
            </TouchableOpacity>
        </React.Fragment>
    )
}

export default ReadStoragePermissionBlocked;

const styles = StyleSheet.create<Styles>({
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