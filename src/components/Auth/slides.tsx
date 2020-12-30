import { ONBOARDING_IMAGE } from '../../assets/images';
import { I_SlideSchema } from './interfaces';

export const onboardingSlides: I_SlideSchema[] = [
    {
        key: 'welcome',
        title: 'Skiza',
        text: "Your favorite\nSongs in one place",
        image: ONBOARDING_IMAGE,
        background: '#fff',
    },
]