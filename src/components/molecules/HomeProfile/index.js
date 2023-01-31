import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';
import {ILPhotoNull} from '../../../assets/illustration';
import {getData} from '../../../utils/localstorage';

const HomeProfile = ({onPress}) => {
  const [profile, setProfile] = useState({
    photo: ILPhotoNull,
    fullName: '',
    major: '',
  });

  useEffect(() => {
    getData('user').then(res => {
      //console.log('data user: ', res);
      const data = res;
      data.photo = {uri: res.photo};
      console.log('new profile: ', data);
      setProfile(res);
    });
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={profile.photo} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.name2}>{profile.major}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  avatar: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 12},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  name2: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
