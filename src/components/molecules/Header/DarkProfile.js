import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {colors} from '../../../utils/colors';
import {Button} from '../../atoms/Button';
import {DummyUser2} from '../../../assets/dummy';
import {fonts} from '../../../utils/fonts';

const DarkProfile = () => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" />
      <View style={styles.content}>
        <Text style={styles.name}>Chelsea Narumi</Text>
        <Text style={styles.desc}>Konselor Wanita</Text>
      </View>
      <Image source={DummyUser2} style={styles.avatar} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {flex: 1},
  avatar: {width: 46, height: 46, borderRadius: 46 / 2},
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    marginTop: 6,
    textAlign: 'center',
    color: colors.text.subTitle,
  },
});
