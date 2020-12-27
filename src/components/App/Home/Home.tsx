import React, { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, AppState, AppStateStatus, StyleSheet } from 'react-native';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import SongList from './SongList';
import ReadStoragePermissionBlockedError from '../Errors/Home/ReadStoragePermissionBlocked';
import ReadStoragePermissionDeniedError from '../Errors/Home/ReadStoragePermissionDenied';
import { checkReadStoragePermissionStatus } from '../../../controllers/permissions/storage';
import { updateStoragePermissionStatus } from '../../../actions/onboarding';
import {HomeProps, ReadExternalStoragePermissionStatusConfig, HomeStyles} from "./interfaces"
import { isEmptyArray } from '../../../util/util';
import NoSongsOnDevice from '../Errors/Home/NoSongsOnDevice';

const ScrollableTabView = require('react-native-scrollable-tab-view');

const Home: React.FC<HomeProps> = (): JSX.Element => {
  const dispatch = useDispatch()

  const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
  const readExternalStoragePermission: string = globalState.readExternalStoragePermission;

  const readExternalStoragePermissionStatus: ReadExternalStoragePermissionStatusConfig = {
    granted: readExternalStoragePermission === "granted",
    denied: readExternalStoragePermission === "denied",
    blocked: readExternalStoragePermission === "blocked"
  }

  const RenderGenresScreen: React.FC<{tabLabel: string}> = (): JSX.Element => {
    if (readExternalStoragePermissionStatus.denied) {
      return <ReadStoragePermissionDeniedError />
    } else if (readExternalStoragePermissionStatus.granted) {
      return <SongList />
    } else if (readExternalStoragePermissionStatus.blocked) {
      return <ReadStoragePermissionBlockedError />
    } else {
      return <ActivityIndicator color={"#f05454"} />
    }
  }

  const appState = useRef<AppStateStatus>(AppState.currentState);

  const handleAppStateChange = async (nextAppState: AppStateStatus): Promise<void> => {
    if (appState.current.match(/inactive|background/) && nextAppState === "active") {
      await updateReadStoragePermissionStatus()
    }

    appState.current = nextAppState;
  };

  const updateReadStoragePermissionStatus = async (): Promise<void> => {
    let permissionStatus: string = await checkReadStoragePermissionStatus();
    dispatch(updateStoragePermissionStatus(permissionStatus))
  }

  useEffect(() => {
    (async (): Promise<void> => {
      let permissionStatus: string = await checkReadStoragePermissionStatus();
      dispatch(updateStoragePermissionStatus(permissionStatus))
    })()

    AppState.addEventListener("change", handleAppStateChange);

    return (): void => {
      AppState.removeEventListener("change", handleAppStateChange);
    };
  }, []);

  const styles: HomeStyles = getStyles(globalState, readExternalStoragePermissionStatus);

  if(!isEmptyArray(globalState.songs)){
    return <NoSongsOnDevice />
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollableTabView tabBarUnderlineStyle={{backgroundColor: "#f05454"}} tabBarTextStyle={{color: "#000"}}>
        <RenderGenresScreen tabLabel="Library" />
        <RenderGenresScreen tabLabel="Favorites" />
        <RenderGenresScreen tabLabel="Artists" />
        <RenderGenresScreen tabLabel="Genres" />
      </ScrollableTabView>
    </SafeAreaView>
  );
};

const getStyles = (state: RootStateOrAny, storagePermissionStatus: ReadExternalStoragePermissionStatusConfig): HomeStyles => {
  const showPlayerFooter: boolean = state.showPlayerFooter;
  return StyleSheet.create<HomeStyles>({
    container: {
      justifyContent: storagePermissionStatus.granted ? undefined : "center",
      alignItems: storagePermissionStatus.granted ? undefined : "center",
      marginBottom: showPlayerFooter ? 60 : 0,
      marginTop: 60,
      flex: 1,
    }
  })
}

export default Home;