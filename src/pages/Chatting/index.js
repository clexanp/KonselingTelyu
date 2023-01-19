import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';

const Chatting = () => {
  return (
    <View style={styles.page}>
      <Header type="dark-profile" title="Chelsea Narumi" />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Selasa, 20 September, 2022</Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem isMe />
      </View>
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {flex: 1},
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
