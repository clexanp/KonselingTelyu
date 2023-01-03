import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  HomeProfile,
  NewsItem,
  RatedConselors,
} from '../../components/molecules';
import {colors} from '../../utils';
import {fonts} from '../../utils';

const Menu = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <HomeProfile />
        <Text style={styles.section1}>Top Rated Conselors</Text>
        <RatedConselors />
        <RatedConselors />
        <RatedConselors />
        <Text style={styles.welcome}>Berita Seputar Konsultasi</Text>
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.button.border,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
  section1: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
