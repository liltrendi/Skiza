import { ViewStyle, TextStyle, ImageStyle, ImageSourcePropType } from 'react-native'
import { T_Slide } from "./types"

// Onboarding

export interface I_OnboardingProps {
    showApp: () => Promise<void>
}

export interface I_OnboardingStyles {
    container: ViewStyle;
    title: TextStyle;
    description: TextStyle;
    slide: ViewStyle;
    image: ImageStyle;
    doneButtonView: ViewStyle;
    doneButtonText: TextStyle;
}

export interface I_SlideProps {
    item: T_Slide;
}

// slides

export interface I_SlideSchema {
    key: string,
    title: string,
    text: string,
    image: ImageSourcePropType,
    background: string
}