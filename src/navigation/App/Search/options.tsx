import React from 'react'
import { StackNavigationOptions } from '@react-navigation/stack';
import { HomeHeaderBar } from "../../../components/App/headers/Home";

export const searchHeaderOptions: StackNavigationOptions = {
  title: 'Search',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  headerTitleAlign: 'left',
  headerLeftContainerStyle: {
    paddingLeft: 15,
  },
  headerRightContainerStyle: {
    paddingRight: 15,
  },
  headerRight: (props) => (
    <HomeHeaderBar
      {...props}
      name={'comment-quote-outline'}
      size={33}
      color={'#333'}
    />
  ),
  headerTransparent: true,
};