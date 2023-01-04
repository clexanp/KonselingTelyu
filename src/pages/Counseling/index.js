import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ListMessages} from '../../components/molecules';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils';
import {
  DummyKonselor1,
  DummyKonselor2,
  DummyKonselor3,
} from '../../assets/dummy';

const Counseling = () => {
  const [conselors] = useState([
    {
      id: 1,
      profile: DummyKonselor1,
      name: 'Narumi Chandra',
      desc: 'Baik ibu, terimakasih atas wakt...',
    },
    {
      id: 2,
      profile: DummyKonselor2,
      name: 'Arman Bagus',
      desc: 'Kamu harus banyak istira...',
    },
    {
      id: 3,
      profile: DummyKonselor3,
      name: 'Kimberly Susan',
      desc: 'Oh seperti itu ya, baik akan saya terap...',
    },
  ]);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {conselors.map(conselor => {
          return (
            <ListMessages
              key={conselor.id}
              profile={conselor.profile}
              name={conselor.name}
              desc={conselor.desc}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Counseling;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.button.border, flex: 1},
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
