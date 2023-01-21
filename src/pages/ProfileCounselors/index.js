import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils/colors';

const ProfileCounselors = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile Counselors" onPress={() => navigation.goBack()} />
      <Profile name="Narumi Chandra" desc="Konselor Wanita" />
      <Gap height={10} />
      <ProfileItem
        label="Alumnus"
        value="S1 Psikologi, Universitas Indonesia"
      />
      <ProfileItem label="NIK" value="11222333444444" />
      <View style={styles.action}>
        <Button
          text="Start Consultation"
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
};

export default ProfileCounselors;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  action: {paddingHorizontal: 40, paddingTop: 23},
});
