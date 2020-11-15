import React from 'react'
import { StackNavigationOptions } from '@react-navigation/stack';

export const homeHeaderOptions: StackNavigationOptions = {
  title: 'Skiza',
  headerTitleStyle: {
    fontFamily: "Shojumaru-Regular",
    fontSize: 22,
    paddingBottom: 25
  },
  headerTitleAlign: 'center',
  headerLeftContainerStyle: {
    paddingLeft: 15,
  },
  headerRightContainerStyle: {
    paddingRight: 15,
    paddingBottom: 25
  },
  headerRight: (props) => (
    <React.Fragment />
  ),
  headerTransparent: true,
  headerStyle: {
    height: 80
  },
};