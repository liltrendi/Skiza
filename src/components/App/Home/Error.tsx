import React from 'react'
import LottieView from 'lottie-react-native';
import { ActivityIndicator, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ErrorProps { }

interface Styles {
    LottieView: ViewStyle;
    screenText: TextStyle;
    button: ViewStyle;
    buttonText: TextStyle;
}

type RefreshLogic = () => void

const Error: React.FC<ErrorProps> = (): JSX.Element => {
    const animation: any = require('./../../../assets/animations/home/folder-error.json');

    const refreshLogic: RefreshLogic = (): void => {
        console.log("Refresh")
    }

    return (
        <React.Fragment>
            <LottieView
                source={animation}
                style={styles.LottieView}
                autoPlay={true}
            />
            <Text style={styles.screenText}>
                Oops! Something went wrong.
            </Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={refreshLogic}>
                <Text style={styles.buttonText}>Refresh</Text>
            </TouchableOpacity>
        </React.Fragment>
    )
}

const styles = StyleSheet.create<Styles>({
    LottieView: {
        height: 80,
        width: 80
    },
    screenText: {
        fontFamily: "CircularStd-Book",
        fontSize: 15
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

export default Error;