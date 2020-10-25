import React from 'react';
import {View, Text} from 'react-native';

interface HomeProps {}

const Home: React.FC<HomeProps> = (): JSX.Element => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home</Text>
    </View>
  );
};

export default Home;