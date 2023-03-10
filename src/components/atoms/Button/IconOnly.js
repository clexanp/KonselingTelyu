import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IconBackDark, IconBackLight} from '../../../assets/icon';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-light') {
      return <IconBackLight />;
    }
    if (icon === 'back-dark') {
      return <IconBackDark />;
    }
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
