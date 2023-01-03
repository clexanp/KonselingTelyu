import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {DummyNews} from '../../../assets/dummy';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';

const NewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title1}>
          Cerita pengalaman Andi tentang skizofernia
        </Text>
        <Text style={styles.title2}>Today</Text>
      </View>
      <Image source={DummyNews} styles={styles.image} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 16,
  },
  titleWrapper: {flex: 1},
  title1: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  title2: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 4,
  },
  image: {width: 80, height: 60, borderRadius: 11},
});
