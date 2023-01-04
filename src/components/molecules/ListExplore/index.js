import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const ListExplore = ({name, time, pic}) => {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.picture} />
      <View>
        <Text style={styles.title1}>{name}</Text>
        <Text style={styles.title2}>{time}</Text>
      </View>
    </View>
  );
};

export default ListExplore;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  picture: {width: 80, height: 60, borderRadius: 11, marginRight: 16},
  title1: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  title2: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 6,
  },
});
