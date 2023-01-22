import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';
import {DummyUser2} from '../../../assets/dummy';

const Other = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyUser2} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>
            Izin bertanya, cara mengatasi beban pikiran, gimana ya?
          </Text>
        </View>
        <Text style={styles.date}>9.35 AM</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  avatar: {width: 30, height: 30, borderRadius: 30 / 2, marginRight: 12},
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.primary,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
