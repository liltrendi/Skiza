import React, { useEffect, useRef } from 'react';
import { ActivityIndicator, AppState, AppStateStatus, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { updateStoragePermissionStatus } from '../../../actions/onboarding';
import { checkReadStoragePermissionStatus } from '../../../controllers/permissions/storage';
import ReadStoragePermissionBlockedError from '../Errors/Home/ReadStoragePermissionBlocked';
import ReadStoragePermissionDeniedError from '../Errors/Home/ReadStoragePermissionDenied';

interface HomeProps {};

interface Styles {
  container: ViewStyle
}

interface ReadExternalStoragePermissionStatusConfig {
  granted: boolean;
  denied: boolean;
  blocked: boolean;
}

const Home: React.FC<HomeProps> = (): JSX.Element => {
  const dispatch = useDispatch()

  const readExternalStoragePermission: string = useSelector((state: RootStateOrAny) => state.readExternalStoragePermission);

  const readExternalStoragePermissionStatus: ReadExternalStoragePermissionStatusConfig = {
    granted: readExternalStoragePermission === "granted",
    denied: readExternalStoragePermission === "denied",
    blocked: readExternalStoragePermission === "blocked"
  }

  const RenderHome: React.FC<{}> = (): JSX.Element => {
    if (readExternalStoragePermissionStatus.denied) {
      return <ReadStoragePermissionDeniedError />
    } else if (readExternalStoragePermissionStatus.granted) {
      return <Text>Home</Text>
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

  return (
    <View style={styles.container}>
      <RenderHome />
    </View>
  );
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Home;