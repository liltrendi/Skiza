import React from 'react'
import { StackNavigationOptions } from '@react-navigation/stack';
import { RootStateOrAny } from 'react-redux';
import { isThemeDark } from '../../../util/theme';
import { DARK_THEME, LIGHT_THEME } from '../../../constants/theme';

interface I_GlobalStateProps {
  theme: string;
}

export const settingsHeaderOptions = (state: RootStateOrAny): StackNavigationOptions => {
  const {theme}: I_GlobalStateProps = state;
  return {
    title: 'Settings',
    headerTitleStyle: {
      fontFamily: "CircularStd-Bold",
      fontSize: 23,
      color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt
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
      <React.Fragment />
    ),
    headerTransparent: false,
    headerStyle: {
      height: 60,
      backgroundColor: isThemeDark(theme) ? DARK_THEME.primaryBg : LIGHT_THEME.primaryBg

    },
  };
}