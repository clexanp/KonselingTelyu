import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ListMessages} from '../../components/molecules';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils';

const Counseling = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <ListMessages />
        <ListMessages />
        <ListMessages />
      </View>
    </View>
  );
};

export default Counseling;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.button.border, flex: 1},
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
