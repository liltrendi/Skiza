import React from 'react'
import { connect, RootStateOrAny, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import LottieView from 'lottie-react-native';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {requestReadExternalStoragePermissionAgain} from "../../../../actions/onboarding"
import { I_ReadExternalStoragePermissionDeniedProps, I_ReadExternalStoragePermissionDeniedStyles } from './interfaces'
import { HOME_FOLDER_ERROR_ANIMATION } from '../../../../assets/animations';

const ReadExternalStoragePermissionDenied: React.FC<I_ReadExternalStoragePermissionDeniedProps> = ({requestPermission}): JSX.Element => {
    const folderAnimation = HOME_FOLDER_ERROR_ANIMATION;
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const styles: I_ReadExternalStoragePermissionDeniedStyles = getStyles(globalState);
    return (
        <View style={styles.container}>
            <LottieView
                source={folderAnimation}
                style={styles.LottieView}
                autoPlay={true}
            />
            <Text style={styles.screenText}>
                Oops! We can't find any songs.
            </Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={requestPermission}>
                <Text style={styles.buttonText}>Rescan</Text>
            </TouchableOpacity>
        </View>
    )
}

const getStyles = (state: RootStateOrAny): I_ReadExternalStoragePermissionDeniedStyles => {
    return StyleSheet.create<I_ReadExternalStoragePermissionDeniedStyles>({
        container: {
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
        },
        LottieView: {
            height: 80,
            width: 80,
            marginBottom: 10
        },
        screenText: {
            fontFamily: "CircularStd-Book",
            fontSize: 15
        },
        button: {
            alignItems: "center",
            backgroundColor: "#f05454",
            padding: 14,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            marginTop: 20
        },
        buttonText: {
            fontFamily: "CircularStd-Book",
            fontSize: 15,
            color: "#fff"
        }
    })
}

const mapStateToProps = () => {
    return {}
  }
  
  const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        requestPermission: () => dispatch(requestReadExternalStoragePermissionAgain())
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ReadExternalStoragePermissionDenied)