import React from 'react'
import { StackNavigationOptions } from '@react-navigation/stack';
import { HomeHeaderBar } from "../../../components/App/headers/Home";

export const homeHeaderOptions: StackNavigationOptions = {
  title: 'Welcome',
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
    <HomeHeaderBar
      {...props}
      name={'cards'}
      size={30}
      color={'#333'}
    />
  ),
  headerRight: (props) => (
    <HomeHeaderBar
      {...props}
      name={'brightness-4'}
      size={28}
      color={'#333'}
    />
  ),
  headerTransparent: true,
};