import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {ILLogo, ILWelcomeScreen} from '../../assets';
import {Button, Gap} from '../../components';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground source={ILWelcomeScreen} style={styles.page}>
      <View>
        <ILLogo style={styles.title2} />
        <Text style={styles.title}>
          Konsultasikan masalah kuliahmu dengan KonselingTelyu
        </Text>
      </View>
      <View>
        <Button text="Get Started" />
        <Gap height={16} />
        <Button
          type="secondary"
          text="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 25,
    fontFamily: fonts.primary[600],
    color: colors.white,
    marginTop: 91,
  },
  title2: {marginHorizontal: -22},
});
