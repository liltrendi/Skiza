import React from 'react';
import {View, Text} from 'react-native';
import { LibraryProps } from './interfaces'

const Library: React.FC<LibraryProps> = (): JSX.Element => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Library</Text>
    </View>
  );
};

export default Library;