import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {ILArtikel4} from '../../assets/illustration';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';
import {ListExplore} from '../../components/molecules';

const Explore = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILArtikel4} style={styles.background}>
        <Text style={styles.title1}>Counseling Articles</Text>
        <Text style={styles.title2}>3 Available</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListExplore />
        <ListExplore />
        <ListExplore />
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.button.border, flex: 1},
  background: {height: 240, paddingTop: 20},
  title1: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  title2: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flex: 1,
  },
});
