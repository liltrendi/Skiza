import React from 'react';
import {View, Text} from 'react-native';

interface GenresProps {}

const Genres: React.FC<GenresProps> = (): JSX.Element => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Genres</Text>
    </View>
  );
};

export default Genres;