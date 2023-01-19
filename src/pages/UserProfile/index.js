import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header, Profile} from '../../components';

const UserProfile = ({navigation}) => {
  return (
    <View>
      <Header title="Profile" />
      <Profile />
      <Text>UserProfile</Text>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({});
