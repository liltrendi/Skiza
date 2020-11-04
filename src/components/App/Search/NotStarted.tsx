import React from 'react'
import { StyleSheet, View, Text, ViewStyle, TextStyle } from 'react-native'
import LottieView from 'lottie-react-native';
import { NotStartedProps, NotStartedStyles } from './interfaces'

const NotStarted: React.FC<NotStartedProps> = (): JSX.Element => {
    const searchAnimation = require("./../../../assets/animations/search/search-glass.json")
    return (
        <View style={styles.outerAnimationContainer}>
                <View style={styles.innerAnimationContainer}>
                    <LottieView
                        source={searchAnimation}
                        style={styles.LottieView}
                        autoPlay={true}
                    />
                    <Text style={styles.searchText}>
                        Find and listen to songs you love.
                    </Text>
                </View>
            </View>
    )
}

export default NotStarted

const styles = StyleSheet.create<NotStartedStyles>({
    outerAnimationContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    innerAnimationContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    LottieView: {
        height: 180,
        width: 180,
        marginBottom: 10,
    },
    searchText: {
        fontFamily: "CircularStd-Book",
        fontSize: 15,
        paddingLeft: 20,
        paddingRight: 20,
        top: -50
    },
})