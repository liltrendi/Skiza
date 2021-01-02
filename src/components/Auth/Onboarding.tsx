import React from 'react';
import { connect, RootStateOrAny, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppIntroSlider from 'react-native-app-intro-slider';
import { onboardingSlides } from './slides';
import { completeOnboarding } from "./../../actions/onboarding"
import { I_OnboardingProps, I_SlideProps, I_OnboardingStyles} from "./interfaces"
import { T_Slide } from './types';
import { SHARED_THEME } from '../../constants/theme';

const Onboarding: React.FC<I_OnboardingProps> = ({ showApp }): JSX.Element => {

  const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
  const styles: I_OnboardingStyles = getStyles(globalState);

  const renderSlide = ({ item }: I_SlideProps): JSX.Element => {
    return (
      <View style={{ flex: 1, backgroundColor: item.background }}>
        <SafeAreaView style={styles.slide}>
          <Text style={styles.title}>{item.title}</Text>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.description}>{item.text}</Text>
        </SafeAreaView>
      </View>
    );
  }

  const DoneButton = (): JSX.Element => {
    return (
      <TouchableOpacity
        activeOpacity={0.65}
        style={styles.doneButtonView}
        onPress={showApp}
      >
        <Text style={styles.doneButtonText}>Get Started</Text>
      </TouchableOpacity>
    );
  };

  const keyExtractor = (item: T_Slide): string => item.title;

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={"transparent"} />
      <AppIntroSlider
        data={onboardingSlides}
        keyExtractor={keyExtractor}
        renderItem={renderSlide}
        renderDoneButton={DoneButton}
        bottomButton={true}
      />
    </View>

  );
};

const getStyles = (state: RootStateOrAny): I_OnboardingStyles => {
  return StyleSheet.create<I_OnboardingStyles>({
    container: {
      flex: 1
    },
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 96,
    },
    image: {
      width: 320,
      height: 320,
      marginTop: 35,
      marginBottom: 20
    },
    title: {
      fontSize: 35,
      color: '#1a1a1a',
      textAlign: 'center',
      fontFamily: "Shojumaru-Regular"
    },
    description: {
      fontSize: 22,
      color: '#1a1a1a',
      textAlign: 'center',
      fontFamily: "Shojumaru-Regular"
    },
    doneButtonView: {
      alignItems: "center",
      backgroundColor: "#f05454",
      padding: 17,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5
    },
    doneButtonText: {
      color: SHARED_THEME.lightTextLv1,
      letterSpacing: 1.2,
      fontFamily: "CircularStd-Bold",
      fontSize: 17
    }
  })
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    showApp: () => dispatch(completeOnboarding())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Onboarding)