import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {colors} from '../../utils/colors';
import {useForm} from '../../utils/useForm';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';
import {getDatabase, ref, set} from 'firebase/database';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    major: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onRegister = () => {
    console.log(form);
    setLoading(true);
    createUserWithEmailAndPassword(Fire, form.email, form.password)
      .then(success => {
        setLoading(false);
        setForm('reset');
        const db = getDatabase();
        set(ref(db, 'users/' + success.user.uid + '/'), {
          fullName: form.fullName,
          major: form.major,
          email: form.email,
        });
        console.log('register success: ', success);
      })
      .catch(error => {
        const errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.primary,
          color: colors.white,
        });
        console.log('error: ', error);
      });
    //() => navigation.navigate('MainApp')
  };
  return (
    <>
      <View style={styles.page}>
        <Header
          onPress={() => navigation.navigate('WelcomeScreen')}
          title="Create Account"
        />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={value => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Major"
              value={form.major}
              onChangeText={value => setForm('major', value)}
            />
            <Gap height={24} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={value => setForm('password', value)}
              secureTextEntry
            />
            <Gap height={40} />
            <Button text="Sign Up" onPress={onRegister} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 40, paddingTop: 0},
});
