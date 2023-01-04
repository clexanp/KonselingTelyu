import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const ListMessages = ({profile, name, desc}) => {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.avatar} />
      <View>
        <Text style={styles.name1}>{name}</Text>
        <Text style={styles.name2}>{desc}</Text>
      </View>
    </View>
  );
};

export default ListMessages;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
  },
  avatar: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 12},
  name1: {
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
