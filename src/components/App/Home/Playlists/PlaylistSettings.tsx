import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect, RootStateOrAny, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useNavigation, useRoute, Route } from '@react-navigation/native';
import { DARK_THEME, LIGHT_THEME } from '../../../../constants/theme';
import { isThemeDark } from '../../../../util/theme';
import { I_PlaylistSettingsProps, I_PlaylistSettingsStyles } from './interfaces'
import { deletePlaylist } from '../../../../actions/music';

interface I_GlobalStateProps {
    theme: string;
}

interface I_AdditionalProps {
    deletePlaylist: (state: RootStateOrAny, playlistId: string) => Promise<void>;
}

type T_Props = I_PlaylistSettingsProps & I_AdditionalProps;

const PlaylistSettings: React.FC<T_Props> = ({deletePlaylist}): JSX.Element => {
    const navigation = useNavigation();
    const route: Route<string, {playlistId: string | undefined} | undefined> = useRoute();
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const styles: I_PlaylistSettingsStyles = getStyles(globalState);

    const playlistId: string | undefined = route.params?.playlistId;

    const renamePlaylist = (): void => {
        navigation.navigate("RenamePlaylist", {playlistId})
    }

    const entirelyDeletePlaylist = async (): Promise<void> => {
        await deletePlaylist(globalState, playlistId || "")
        navigation.navigate("Home");
    }

    const askForConfirmation = (): void => {
        Alert.alert(
            "Danger",
            "This action will result in the deletion of this playlist entirely, along with any of its associated songs. Would you like to proceed?",
            [
            { text: "No, thanks", onPress: (): void => {}, style: "cancel" },
            { text: "Delete Playlist", onPress: async (): Promise<void> => await entirelyDeletePlaylist() }
            ],
            { cancelable: true }
        );
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            style={styles.container}
        >

            {/* Rename */}

            <TouchableOpacity activeOpacity={0.85} onPress={renamePlaylist} style={styles.renameContainer}>
                <Icon name={"pencil-outline"} size={27} color={isThemeDark(globalState.theme) ? DARK_THEME.brightColor : LIGHT_THEME.primaryTxt} style={styles.renameIcon} />
                <View style={styles.renameTextContainer}>
                    <Text style={styles.renameTopText}>
                        Rename
                    </Text>
                    <Text style={styles.renameBottomText}>
                        Choose a name that describes the music
                    </Text>
                </View>
            </TouchableOpacity>

            {/* Delete */}

            <TouchableOpacity activeOpacity={0.85} onPress={askForConfirmation} style={styles.otherContainer}>
                <Icon name={"delete-empty-outline"} size={27} color={isThemeDark(globalState.theme) ? DARK_THEME.brightColor : LIGHT_THEME.primaryTxt} style={styles.otherIcon} />
                <View style={styles.otherTextContainer}>
                    <Text style={styles.otherTopText}>
                        Delete
                    </Text>
                    <Text style={styles.otherBottomText}>
                        Warning! This action cannot be undone
                    </Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        deletePlaylist: (state: RootStateOrAny, playlistId: string) => dispatch(deletePlaylist(state, playlistId))
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistSettings)

const getStyles = (state: RootStateOrAny): I_PlaylistSettingsStyles => {
    const {theme}: I_GlobalStateProps = state;
    return StyleSheet.create<I_PlaylistSettingsStyles>({
        container: {
            backgroundColor: isThemeDark(theme) ? DARK_THEME.primaryBg : LIGHT_THEME.primaryBg,
            flex: 1,
            paddingTop: 60,
        },
        renameContainer: {
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 5,
        },
        renameIcon: {
            marginLeft: 15,
            marginRight: 10
        },
        renameTextContainer: {
            justifyContent: "center",
            alignItems: "flex-start",
            flex: 1
        },
        renameTopText: {
            fontFamily: "CircularStd-Bold",
            fontSize: 16,
            paddingTop: 1,
            paddingBottom: 1,
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt
        },
        renameBottomText: {
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt,
            fontFamily: "CircularStd-Book",
            paddingTop: 1,
            paddingBottom: 1,
        },
        otherContainer: {
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 5,
            marginTop: 25
        },
        otherIcon: {
            marginLeft: 15,
            marginRight: 10
        },
        otherTextContainer: {
            justifyContent: "center",
            alignItems: "flex-start",
            flex: 1
        },
        otherTopText: {
            fontFamily: "CircularStd-Bold",
            fontSize: 16,
            paddingTop: 1,
            paddingBottom: 1,
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt
        },
        otherBottomText: {
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt,
            fontFamily: "CircularStd-Book",
            paddingTop: 1,
            paddingBottom: 1,
        },
    })
}