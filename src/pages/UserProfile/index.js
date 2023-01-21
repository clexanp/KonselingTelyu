import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Profile} from '../../components';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile name="Raihan Azhar Rafi" desc="Mahasiswa" />
      <Gap height={14} />
      <View style={styles.action}>
        <Button text="Logout" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  action: {paddingHorizontal: 40, paddingTop: 23},
});
