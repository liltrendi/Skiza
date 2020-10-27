import React from 'react'
import { Icon, Input, Item } from 'native-base'
import { StyleSheet, View, ViewStyle, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import {widthPercentageToDP as wdp} from 'react-native-responsive-screen';

interface BarProps {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    searchTerm: string;
}

interface Styles {
    container: ViewStyle;
    bar: ViewStyle;
}

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

const styles = StyleSheet.create<Styles>({
    container: {
        top: 65
    },
    bar: {
        backgroundColor: "#f8f8f8",
        marginRight: wdp("5%"),
        marginLeft: wdp("5%"),
        top: 0
    }
})
