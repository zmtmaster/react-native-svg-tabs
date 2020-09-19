const palette = {
  blue: '#4d8ff7',
  grey: '#1d1d20',
  red: '#dc1919',
  white: '#fff',
  transparent: 'rgba(0, 0, 0, 0)',
};

const theme = {
  colors: {
    dark: palette.grey,
    white: palette.white,
    main: palette.blue,
    navigationTabs: palette.white,
    noColor: palette.transparent,
    warning: palette.red,
  },
  spacing: {
    xxs: 2,
    xs: 4,
    s: 8,
    m: 12,
    l: 16,
    xl: 24,
    xxl: 32,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    text: {
      color: 'white',
    },
  },
};

export default theme;
