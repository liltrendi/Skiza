import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native'
import LottieView from 'lottie-react-native';
import { I_NotStartedProps, I_NotStartedStyles } from './interfaces'
import { SEARCH_SEARCH_GLASS_ANIMATION } from '../../../assets/animations';

const NotStarted: React.FC<I_NotStartedProps> = (): JSX.Element => {
    const searchAnimation = SEARCH_SEARCH_GLASS_ANIMATION;
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const styles: I_NotStartedStyles = getStyles(globalState);

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

const getStyles = (state: RootStateOrAny): I_NotStartedStyles => {
    return StyleSheet.create<I_NotStartedStyles>({
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
}