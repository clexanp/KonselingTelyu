import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils/colors';
import {useForm} from '../../utils/useForm';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    major: '',
    email: '',
    password: '',
  });

  const onRegister = () => {
    console.log(form);
    //() => navigation.navigate('MainApp')
  };
  return (
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
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 40, paddingTop: 0},
});
