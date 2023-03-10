import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {colors} from '../../../utils/colors';
import {Button} from '../../atoms';
import {fonts} from '../../../utils/fonts';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Write your Message"
        placeholderTextColor="grey"
      />
      <Button type="btn-icon-send" />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  input: {
    color: 'black',
    backgroundColor: colors.disable,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    maxHeight: 45,
  },
  container: {padding: 16, flexDirection: 'row'},
});
