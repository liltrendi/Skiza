import React from 'react'
import { StackNavigationOptions } from '@react-navigation/stack';
import { GenresHeaderBar } from "../../../components/App/headers/Genres";

export const GenresHeaderOptions: StackNavigationOptions = {
  title: 'Genres',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  headerTitleAlign: 'center',
  headerLeftContainerStyle: {
    paddingLeft: 15,
  },
  headerRightContainerStyle: {
    paddingRight: 15,
  },
  headerLeft: (props) => (
    <GenresHeaderBar
      {...props}
      name={'cards'}
      size={30}
      color={'#333'}
    />
  ),
  headerRight: (props) => (
    <GenresHeaderBar
      {...props}
      name={'brightness-4'}
      size={28}
      color={'#333'}
    />
  ),
  headerTransparent: true,
};