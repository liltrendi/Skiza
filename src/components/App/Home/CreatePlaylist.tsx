import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RootStateOrAny, useSelector } from 'react-redux';
import { Input, Item } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import { I_CreatePlaylistProps, I_CreatePlaylistStyles } from './interfaces'
import { I_SongSchema } from '../../../controllers/music/interfaces';
import { isThemeDark } from '../../../util/theme';
import { DARK_THEME, LIGHT_THEME, SHARED_THEME } from '../../../constants/theme';
import { widthPercentageToDP as wdp } from 'react-native-responsive-screen';

interface I_GlobalStateProps {
    theme: string;
    songs: I_SongSchema[];
    currentSong: I_SongSchema;
}

const CreatePlaylist: React.FC<I_CreatePlaylistProps> = (): JSX.Element => {
    const navigation = useNavigation();
    const [playlistName, setPlaylistName] = useState<string>("");

    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const {}: I_GlobalStateProps = globalState;
    const styles: I_CreatePlaylistStyles = getStyles(globalState);

    const onChangeText = (text: string): void => setPlaylistName(text);

    return (
        <View style={styles.container}>
            <Text style={styles.inputText}>Give your new playlist a name</Text>
            <Item style={styles.bar}>
                <Input placeholder={""} onChangeText={onChangeText} value={playlistName} placeholderTextColor={isThemeDark(globalState.theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt} style={styles.input} />
            </Item>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.cancel} onPress={() => navigation.goBack()} activeOpacity={0.85}>
                    <Text style={styles.cancelText}>
                        Cancel
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.create} activeOpacity={0.85}>
                    <Text style={styles.createText}>
                        Create
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CreatePlaylist;

const getStyles = (state: RootStateOrAny): I_CreatePlaylistStyles => {
    const {theme}: I_GlobalStateProps = state;
    
    return StyleSheet.create<I_CreatePlaylistStyles>({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isThemeDark(theme) ? DARK_THEME.primaryBg : LIGHT_THEME.primaryBg,
        },
        inputText: {
            fontFamily: "CircularStd-Bold",
            fontSize: 22,
            paddingLeft: 20,
            paddingRight: 20,
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt
        },
        bar: {
            backgroundColor: isThemeDark(theme) ? DARK_THEME.primaryBg : LIGHT_THEME.primaryBg,
            marginRight: wdp("15%"),
            marginLeft: wdp("15%"),
            marginTop: 35,
            marginBottom: 10
        },
        input: {
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt
        },
        buttons: {
            flexDirection: "row"
        },
        cancel: {
            alignItems: "center",
            backgroundColor: isThemeDark(theme) ? SHARED_THEME.brightTextLv2 : SHARED_THEME.brightTextLv2,
            padding: 14,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            marginTop: 20,
            marginRight: 10
        },
        cancelText: {
            fontFamily: "CircularStd-Book",
            fontSize: 15,
            color: isThemeDark(theme) ? SHARED_THEME.lightTextLv1 : SHARED_THEME.lightTextLv1
        },
        create: {
            alignItems: "center",
            backgroundColor: isThemeDark(theme) ? SHARED_THEME.brightTextLv2 : SHARED_THEME.brightTextLv2,
            padding: 14,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            marginTop: 20
        },
        createText: {
            fontFamily: "CircularStd-Book",
            fontSize: 15,
            color: isThemeDark(theme) ? SHARED_THEME.lightTextLv1 : SHARED_THEME.lightTextLv1
        }
    })
}