interface Slide {
    key: string,
    title: string,
    text: string,
    image: any,
    background: string
}

export const onboardingSlides: Slide[] = [
    {
        key: 'welcome',
        title: 'Skiza',
        text: "Your favorite\nSongs in one place",
        image: require('./../../assets/images/onboarding.png'),
        background: '#fff',
    },
]