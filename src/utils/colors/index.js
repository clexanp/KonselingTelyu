const mainColors = {
  red1: '#CD104D',
  red2: '#E06379',
  red3: '#FCE2EA',
  red4: '#990000',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#CDD2DA',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#EDEEF0',
  blue1: '#0066CB',
};

export const colors = {
  primary: mainColors.red1,
  secondary: mainColors.dark1,
  secondaryred: mainColors.red4,
  tertiary: mainColors.blue1,
  white: 'white',
  black: 'black',
  disable: mainColors.grey3,
  cardLight: mainColors.red3,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuActive: mainColors.red1,
    menuInactive: mainColors.dark2,
    subTitle: mainColors.dark3,
  },
  button: {
    primary: {
      background: mainColors.red1,
      text: 'white',
    },
    secondary: {
      background: mainColors.red2,
      text: 'white',
    },
  },
  border: mainColors.grey2,
};
