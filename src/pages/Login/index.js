import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Input, Link, Gap} from '../../components';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogo style={styles.title2} />
      <Text style={styles.title}>Silahkan login dengan akun SSO kamu ya!</Text>
      <Input label="Email Adress" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link />
      <Button title="Login" onPress={() => navigation.navigate('MainApp')} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    marginHorizontal: -3,
    maxWidth: 200,
  },
  title2: {
    marginHorizontal: -25,
  },
});
