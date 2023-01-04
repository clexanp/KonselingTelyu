import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {DummyNews2} from '../../../assets/dummy';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const ListMessages = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyNews2} style={styles.avatar} />
      <View>
        <Text style={styles.name1}>Narumi</Text>
        <Text style={styles.name2}>Terimakasih ibu atas waktunya</Text>
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
