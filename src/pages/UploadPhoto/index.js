import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Gap, Header, Link} from '../../components';
import {ILPhotoNull} from '../../assets/illustration';
import {IconPhotoAdd, IconPhotoRemove} from '../../assets/icon';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {getDatabase, ref, update} from 'firebase/database';
import {storeData} from '../../utils/localstorage';

const UploadPhoto = ({navigation, route}) => {
  const data = route.params;
  console.log(data);
  const [photoForDB, setPhotoForDB] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILPhotoNull);
  const getImage = () => {
    launchImageLibrary(
      {
        quality: 0.5,
        maxWidth: 200,
        maxHeight: 200,
        mediaType: 'photo',
        includeBase64: true,
      },
      response => {
        console.log('response: ', response);
        if (response.didCancel || response.error) {
          showMessage({
            message: 'Kamu enggak jadi pilih fotonya?',
            type: 'default',
            backgroundColor: colors.button.secondary.background,
            color: colors.white,
          });
        } else {
          console.log('response getImage: ', response);
          const source = {uri: response.assets[0].uri};
          setPhotoForDB(
            `data:${response.assets[0].type};base64, ${response.assets[0].base64}`,
          );
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };
  const uploadAndContinue = () => {
    const db = getDatabase();
    update(ref(db, 'users/' + data.uid + '/'), {photo: photoForDB});

    console.log('stored data ', JSON.stringify(data));
    data.photo = photoForDB;
    storeData('user', data);
    navigation.replace('MainApp');
  };
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} key={photo.uri} />
            {hasPhoto && <IconPhotoRemove style={styles.photoAdd} />}
            {!hasPhoto && <IconPhotoAdd style={styles.photoAdd} />}
          </TouchableOpacity>
          <Text style={styles.name}>{data.fullName}</Text>
          <Text style={styles.profession}>{data.major}</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            text="Upload"
            onPress={uploadAndContinue}
          />
          <Gap height={30} />
          <Link
            title="Skip for this"
            align="center"
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {alignItems: 'center', flex: 1, justifyContent: 'center'},
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoAdd: {position: 'absolute', bottom: 8, right: 6},
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.text.secondary,
  },
});
