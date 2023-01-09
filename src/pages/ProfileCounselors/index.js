import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header} from '../../components';

const ProfileCounselors = ({navigation}) => {
  return (
    <View>
      <Header title="ProfileCounselors" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProfileCounselors;

const styles = StyleSheet.create({});
