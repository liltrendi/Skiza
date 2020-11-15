import React from 'react'
import { StackNavigationOptions } from '@react-navigation/stack';
import { HomeHeaderBar } from "../../../components/App/headers/Home";

export const searchHeaderOptions: StackNavigationOptions = {
  title: 'Search',
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
    <HomeHeaderBar
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