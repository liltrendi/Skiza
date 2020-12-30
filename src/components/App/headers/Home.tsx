import React from 'react'
import {View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {I_HomeHeaderProps, I_HomeHeaderStyles} from "./interfaces"

export const HomeHeaderBar: React.FC<I_HomeHeaderProps> = ({name, size, color, badgeCount}): JSX.Element => {
  if (!badgeCount || badgeCount < 1) return <Icon name={name} size={size} color={color} />;
  return (
    <View>
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

const styles = StyleSheet.create<I_HomeHeaderStyles>({
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
    fontWeight: 'bold',
    color: 'white',
    fontSize: 10,
  },
});