import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {DummyArtikel1} from '../../../assets/dummy';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const ListExplore = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyArtikel1} style={styles.picture} />
      <View>
        <Text style={styles.title1}>Apa itu skizofernia?</Text>
        <Text style={styles.title2}>Today</Text>
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
