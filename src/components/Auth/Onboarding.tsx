import React from 'react';
import {View, Text} from 'react-native';

interface OnboardingProps {}

const Onboarding: React.FC<OnboardingProps> = (): JSX.Element => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Onboarding</Text>
    </View>
  );
};

export default Onboarding;