import React, { useState } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, ImageStyle, Image, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppIntroSlider from 'react-native-app-intro-slider';
import { onboardingSlides } from './slides';

interface OnboardingProps { }

interface Styles {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  slide: ViewStyle;
  image: ImageStyle;
  doneButtonView: ViewStyle;
  doneButtonText: TextStyle;
}

type Slide = typeof onboardingSlides[0];

interface SlideProps {
  item: Slide;
}

const Onboarding: React.FC<OnboardingProps> = (): JSX.Element => {

  const goToApp = (): void => {
    console.log("go to app")
  }

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
        onPress={goToApp}
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

const styles = StyleSheet.create<Styles>({
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
    fontWeight: "bold",
    fontSize: 17,
    fontFamily: "Shojumaru-Regular"
  }
})

export default Onboarding;