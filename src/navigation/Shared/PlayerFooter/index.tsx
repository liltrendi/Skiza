import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {I_PlayerFooterProps, I_PlayerFooterStyles} from "./interfaces"

const PlayerFooter: React.FC<I_PlayerFooterProps> = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text>Player</Text>
        </View>
    )
}

const styles = StyleSheet.create<I_PlayerFooterStyles>({
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