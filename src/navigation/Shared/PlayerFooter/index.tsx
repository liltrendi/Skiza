import React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'

interface PlayerFooterProps {}

interface Styles {
    container: ViewStyle;
}

const PlayerFooter: React.FC<PlayerFooterProps> = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text>Player</Text>
        </View>
    )
}

const styles = StyleSheet.create<Styles>({
    container: {
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        backgroundColor: "#fff",
        paddingLeft: 15,
        bottom: 47,
        height: 60,
        right: 0,
        left: 0
    }
})

export default PlayerFooter