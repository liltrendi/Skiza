import React from 'react'
import { StackNavigationOptions } from '@react-navigation/stack';
import { SettingsHeaderBar } from "../../../components/App/headers/Settings";

export const settingsHeaderOptions: StackNavigationOptions = {
  title: 'Settings',
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
    <SettingsHeaderBar
      {...props}
      name={'comment-quote-outline'}
      size={33}
      color={'#333'}
    />
  ),
  headerTransparent: true,
};