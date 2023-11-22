import AppText from '@/components/common/AppText';
import {horizontalScale, verticalScale} from '@/helpers/scale';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  handleClick?: () => void;
  text: string;
  icon: React.ReactNode;
}

const MenuItem = ({handleClick = () => {}, text, icon}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      {icon}
      <AppText style={styles.text}>{text}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(8),
    marginVertical: verticalScale(5),
  },
  text: {
    fontSize: horizontalScale(16),
    lineHeight: horizontalScale(20),
  },
});

export default MenuItem;
