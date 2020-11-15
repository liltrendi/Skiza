import React from 'react'
import { StackNavigationOptions } from '@react-navigation/stack';
import { LibraryHeaderBar } from "../../../components/App/headers/Library";

export const LibraryHeaderOptions: StackNavigationOptions = {
  title: 'Library',
  headerTitleStyle: {
    fontFamily: "CircularStd-Book",
    fontWeight: 'bold',
    fontSize: 22,
    paddingBottom: 25
  },
  headerTitleAlign: 'left',
  headerLeftContainerStyle: {
    paddingLeft: 15,
  },
  headerRightContainerStyle: {
    paddingRight: 15,
    paddingBottom: 25
  },
  headerRight: (props) => (
    <LibraryHeaderBar
      {...props}
      name={'comment-quote-outline'}
      size={33}
      color={'#333'}
    />
  ),
  headerTransparent: true,
  headerStyle: {
    height: 80
  },
};