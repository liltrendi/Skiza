import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';
import {View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { I_SearchHeaderProps, I_SearchHeaderStyles } from './interfaces'

export const SearchHeaderBar: React.FC<I_SearchHeaderProps> = ({name, size, color, badgeCount}): JSX.Element => {
  const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
  const styles: I_SearchHeaderStyles = getStyles(globalState);
  if (!badgeCount || badgeCount < 1) return <Icon name={name} size={size} color={color} />;
  return (
    <View style={{width: 24, height: 24, margin: 5}}>
      <Icon name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View style={styles.containerDot}>
          <Text style={styles.badgeText}>
            {badgeCount > 9 ? '10+' : badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
};

const getStyles = (state: RootStateOrAny): I_SearchHeaderStyles => {
  return StyleSheet.create<I_SearchHeaderStyles>({
    containerDot: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      position: 'absolute',
      borderRadius: 10,
      height: 20,
      width: 20,
      right: -13,
      top: -3,
    },
    badgeText: {
      color: 'white',
      fontSize: 10,
      fontFamily: "CircularStd-Bold",
    },
  });
}