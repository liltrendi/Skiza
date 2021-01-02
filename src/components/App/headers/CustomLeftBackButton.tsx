import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { I_CustomLeftBackButtonProps, I_CustomLeftBackButtonStyles } from './interfaces'
import { useNavigation } from '@react-navigation/native';
import { isThemeDark } from '../../../util/theme';
import { DARK_THEME, LIGHT_THEME } from '../../../constants/theme';

interface I_GlobalStateProps {
    theme: string;
}

export const CustomLeftBackButton: React.FC<I_CustomLeftBackButtonProps> = (): JSX.Element => {
  const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
  const navigation = useNavigation();

  const {theme}: I_GlobalStateProps = globalState;

  const goBack = (): void => navigation.goBack()

  return (
    <Icon name={"chevron-back"} size={25} color={isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt} onPress={goBack} />
  );
};

const getStyles = (state: RootStateOrAny): I_CustomLeftBackButtonStyles => {
    return StyleSheet.create<I_CustomLeftBackButtonStyles>({
      icon: {}
    });
}