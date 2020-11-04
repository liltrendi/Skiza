import React from 'react'
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import LottieView from 'lottie-react-native';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {requestReadExternalStoragePermissionAgain} from "../../../../actions/onboarding"
import { ReadExternalStoragePermissionDeniedProps, ReadExternalStoragePermissionDeniedStyles } from './interfaces'

const ReadExternalStoragePermissionDenied: React.FC<ReadExternalStoragePermissionDeniedProps> = ({requestPermission}): JSX.Element => {
    const folderAnimation = require('./../../../../assets/animations/home/folder-error.json');
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

const styles = StyleSheet.create<ReadExternalStoragePermissionDeniedStyles>({
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