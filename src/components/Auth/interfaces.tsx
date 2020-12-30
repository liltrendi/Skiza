import { ViewStyle, TextStyle, ImageStyle, ImageSourcePropType } from 'react-native'
import { Slide } from "./types"

// Onboarding

export interface OnboardingProps {
    showApp: () => Promise<void>
}

export interface OnboardingStyles {
    container: ViewStyle;
    title: TextStyle;
    description: TextStyle;
    slide: ViewStyle;
    image: ImageStyle;
    doneButtonView: ViewStyle;
    doneButtonText: TextStyle;
}

export interface SlideProps {
    item: Slide;
}

// slides

export interface SlideSchema {
    key: string,
    title: string,
    text: string,
    image: ImageSourcePropType,
    background: string
}