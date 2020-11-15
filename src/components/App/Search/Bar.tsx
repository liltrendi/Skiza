import React from 'react'
import { Icon, Input, Item } from 'native-base'
import { StyleSheet, View } from 'react-native'
import {widthPercentageToDP as wdp} from 'react-native-responsive-screen';
import { BarProps, BarStyles } from './interfaces'

const Bar: React.FC<BarProps> = ({searchTerm, setSearchTerm}): JSX.Element => {

    const onChangeText = (text: string): void => setSearchTerm(text)

    return (
        <View style={styles.container}>
            <Item rounded style={styles.bar}>
                <Icon active name="search" />
                <Input placeholder="Artists, songs or albums" onChangeText={onChangeText} value={searchTerm} />
            </Item>
        </View>
    )
}

export default Bar

const styles = StyleSheet.create<BarStyles>({
    container: {
        top: 63
    },
    bar: {
        backgroundColor: "#f8f8f8",
        marginRight: wdp("5%"),
        marginLeft: wdp("5%"),
        top: 0
    }
})
