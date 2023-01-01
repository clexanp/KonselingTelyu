import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Button} from '../../components';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Selamat Datang</Text>
      <Image
        style={styles.title2}
        source={require('../../assets/illustration/Welcome.png')}
      />
      <View>
        <Button onPress={() => navigation.replace('Login')} />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    color: colors.text.primary,
    marginTop: 50,
    fontFamily: fonts.primary[600],
  },
  title2: {
    marginBottom: 60,
  },
});
