import React from 'react';
import {View} from 'react-native';
import Error from './Error';

interface HomeProps {}

const Home: React.FC<HomeProps> = (): JSX.Element => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <Text>Home</Text> */}
        <Error />
    </View>
  );
};

export default Home;