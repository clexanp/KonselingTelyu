import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from '../../components';

const ProfileCounselors = ({navigation}) => {
  return (
    <View>
      <Header title="Profile Counselors" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProfileCounselors;

const styles = StyleSheet.create({});
