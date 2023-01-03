import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  CounselingActive,
  CounselingInactive,
  ExploreActive,
  ExploreInactive,
  HomeActive,
  HomeInactive,
  PostActive,
  PostInactive,
} from '../../../assets/icon';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Menu') {
      return active ? <HomeActive /> : <HomeInactive />;
    }
    if (title === 'Explore') {
      return active ? <ExploreActive /> : <ExploreInactive />;
    }
    if (title === 'Counseling') {
      return active ? <CounselingActive /> : <CounselingInactive />;
    }
    if (title === 'Post') {
      return active ? <PostActive /> : <PostInactive />;
    }
    return <HomeActive />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: active => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontWeight: fonts.primary[600],
    marginTop: 4,
  }),
});
