import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {
  HomeProfile,
  NewsItem,
  ChooseCounselors,
} from '../../components/molecules';
import {colors} from '../../utils';
import {fonts} from '../../utils';
import {Gap} from '../../components/atoms';

const Menu = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
          <Text style={styles.section1}>Choose Counselors</Text>
          <ChooseCounselors
            onPress={() => navigation.navigate('ProfileCounselors')}
          />
          <ChooseCounselors />
          <ChooseCounselors />
          <Text style={styles.section2}>News About Counseling</Text>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.button.border,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  section2: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
  section1: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
