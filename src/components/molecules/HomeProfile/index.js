import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {DummyUser} from '../../../assets/dummy';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Rafi</Text>
        <Text style={styles.name2}>Mahasiswa</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  avatar: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 12},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  name2: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
