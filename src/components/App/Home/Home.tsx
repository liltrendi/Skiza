import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View, ViewStyle} from 'react-native';
import { RootStateOrAny, useSelector } from 'react-redux';
import ReadStoragePermissionBlockedError from '../Errors/Home/ReadStoragePermissionBlocked';
import ReadStoragePermissionDeniedError from '../Errors/Home/ReadStoragePermissionDenied';

interface HomeProps {}

interface Styles {
  container: ViewStyle
}

interface ReadExternalStoragePermissionStatusConfig {
  granted: boolean;
  denied: boolean;
  blocked: boolean;
}

const Home: React.FC<HomeProps> = (): JSX.Element => {
  const readExternalStoragePermission: string = useSelector((state: RootStateOrAny) => state.readExternalStoragePermission);

  const readExternalStoragePermissionStatus: ReadExternalStoragePermissionStatusConfig = {
    granted: readExternalStoragePermission === "granted",
    denied: readExternalStoragePermission === "denied",
    blocked: readExternalStoragePermission === "blocked"
  }

  const RenderHome: React.FC<{}> = (): JSX.Element => {
    if(readExternalStoragePermissionStatus.denied){
      return <ReadStoragePermissionDeniedError />
    }else if(readExternalStoragePermissionStatus.granted){
      return <Text>Home</Text>
    }else if(readExternalStoragePermissionStatus.blocked){
      return <ReadStoragePermissionBlockedError />
    }else{
      return <ActivityIndicator color={"#f05454"} />
    }
  }

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