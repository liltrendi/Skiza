import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { connect, RootStateOrAny, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Input, Item } from 'native-base'
import { Route, useNavigation, useRoute } from '@react-navigation/native';
import { I_RenamePlaylistProps, I_RenamePlaylistStyles } from './interfaces'
import { renamePlaylist } from '../../../../../actions/music';
import { I_Playlist } from '../../../../../controllers/music/interfaces';
import { isThemeDark } from '../../../../../util/theme';
import { DARK_THEME, LIGHT_THEME, SHARED_THEME } from '../../../../../constants/theme';
import { widthPercentageToDP as wdp } from 'react-native-responsive-screen'
import { showToast } from '../../../../../util/songs';

interface I_GlobalStateProps {
    theme: string;
    playlists: I_Playlist[];
}

interface I_AdditionalProps {
    renamePlaylist: (state: RootStateOrAny, playlistId: string, newName: string) => Promise<void>;
}

type T_Props = I_RenamePlaylistProps & I_AdditionalProps;

const RenamePlaylist: React.FC<T_Props> = ({renamePlaylist}): JSX.Element => {
    const route: Route<string, {playlistId: string | undefined} | undefined> = useRoute();
    const navigation = useNavigation();
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const {playlists}: I_GlobalStateProps = globalState;
    const styles: I_RenamePlaylistStyles = getStyles(globalState);

    const playlist: I_Playlist | undefined = playlists.find((item: I_Playlist) => item.id === route.params?.playlistId);

    const [newName, setNewName] = useState<string|undefined>(playlist?.name);

    const onChangeText = (text: string): void => setNewName(text);

    const updatePlaylistName = async (): Promise<void> => {
        if(!newName || newName.length < 1){
            showToast("Please enter a name for your playlist");
            return;
        }
        await renamePlaylist(globalState, playlist?.id || "", newName);
        showToast("Playlist updated successfully")
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.inputText}>Rename your playlist</Text>
            <Item style={styles.bar}>
                <Input placeholder={""} onChangeText={onChangeText} value={newName} placeholderTextColor={isThemeDark(globalState.theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt} style={styles.input} />
            </Item>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.cancel} onPress={() => navigation.goBack()} activeOpacity={0.85}>
                    <Text style={styles.cancelText}>
                        Cancel
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.update} activeOpacity={0.85} onPress={updatePlaylistName}>
                    <Text style={styles.updateText}>
                        Save Changes
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        renamePlaylist: (state: RootStateOrAny, playlistId: string, newName: string) => dispatch(renamePlaylist(state, playlistId, newName))
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RenamePlaylist)

const getStyles = (state: RootStateOrAny): I_RenamePlaylistStyles => {
    const {theme}: I_GlobalStateProps = state;
    return StyleSheet.create<I_RenamePlaylistStyles>({
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
        update: {
            alignItems: "center",
            backgroundColor: isThemeDark(theme) ? SHARED_THEME.brightTextLv2 : SHARED_THEME.brightTextLv2,
            padding: 14,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            marginTop: 20
        },
        updateText: {
            fontFamily: "CircularStd-Book",
            fontSize: 15,
            color: isThemeDark(theme) ? SHARED_THEME.lightTextLv1 : SHARED_THEME.lightTextLv1
        }
    })
}