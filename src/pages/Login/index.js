import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Input, Link, Gap, Loading} from '../../components';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {useForm} from '../../utils/useForm';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const onLogin = () => {
    console.log('form: ', form);
    setLoading(true);
    signInWithEmailAndPassword(Fire, form.username, form.password)
      .then(res => {
        console.log('success: ', res);
        setLoading(false);
      })
      .catch(err => {
        console.log('error: ', err);
        setLoading(false);
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.primary,
          color: colors.white,
        });
      });
    //() => navigation.navigate('MainApp')
  };
  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={40} />
          <ILLogo style={styles.title2} />
          <Text style={styles.title}>Sign In With Your Account</Text>
          <Input
            label="Username"
            value={form.username}
            onChangeText={value => setForm('username', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={10} />
          <Link title="Forgot My Password" size={12} />
          <Gap height={40} />
          <Button text="Sign In" onPress={onLogin} />
          <Gap height={30} />
          <Link
            title="Create New Account"
            size={16}
            align="center"
            onPress={() => navigation.navigate('Register')}
          />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
  title2: {
    marginHorizontal: -22,
  },
});
