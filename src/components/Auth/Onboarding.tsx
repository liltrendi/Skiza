import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { View, Text, StyleSheet, ViewStyle, TextStyle, ImageStyle, Image, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppIntroSlider from 'react-native-app-intro-slider';
import { onboardingSlides } from './slides';
import { completeOnboarding } from "./../../actions/onboarding"
import { OnboardingProps, SlideProps, OnboardingStyles} from "./interfaces"
import { Slide } from './types';

const Onboarding: React.FC<OnboardingProps> = ({ showApp }): JSX.Element => {

  const renderSlide = ({ item }: SlideProps): JSX.Element => {
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

  const keyExtractor = (item: Slide): string => item.title;

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

const styles = StyleSheet.create<OnboardingStyles>({
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
    color: "#fff",
    letterSpacing: 1.2,
    fontFamily: "CircularStd-Book",
    fontWeight: "bold",
    fontSize: 17
  }
})

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