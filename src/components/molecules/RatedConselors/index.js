import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {DummyUser} from '../../../assets/dummy';
import {IconStar} from '../../../assets/icon';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';

const RatedConselors = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyUser} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Alex</Text>
        <Text style={styles.category}>Konselor Pria</Text>
      </View>
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </View>
  );
};

export default RatedConselors;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  avatar: {width: 50, height: 50, borderRadius: 50 / 2, marginRight: 12},
  rate: {flexDirection: 'row'},
  profile: {flex: 1},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 2,
  },
});
