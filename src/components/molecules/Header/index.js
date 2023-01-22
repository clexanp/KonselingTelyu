import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {colors} from '../../../utils/colors';
import {Button, Gap} from '../../atoms';
import {fonts} from '../../../utils/fonts';
import DarkProfile from './DarkProfile';

const Header = ({onPress, title, type}) => {
  if (type === 'dark-profile') {
    return <DarkProfile />;
  }
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: type => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type === 'dark' ? colors.secondaryred : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  text: type => ({
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: type === 'dark' ? colors.white : colors.secondary,
  }),
});
