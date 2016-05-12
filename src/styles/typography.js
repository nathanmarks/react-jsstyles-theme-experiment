
const basicVars = {
  fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
  fontWeightLight: 300,
  fontWeightNormal: 400,
  fontWeightMedium: 500
};

export default function createTypography(palette) {
  return {
    fontFamily: basicVars.fontFamily,
    display4: {
      fontSize: 112,
      fontWeight: basicVars.fontWeightLight,
      fontFamily: basicVars.fontFamily,
      color: palette.text.secondary
    },
    display3: {
      fontSize: 56,
      fontWeight: basicVars.fontWeightNormal,
      fontFamily: basicVars.fontFamily,
      color: palette.text.secondary
    },
    display2: {
      fontSize: 45,
      fontWeight: basicVars.fontWeightNormal,
      fontFamily: basicVars.fontFamily,
      color: palette.text.secondary
    },
    display1: {
      fontSize: 34,
      fontWeight: basicVars.fontWeightNormal,
      fontFamily: basicVars.fontFamily,
      color: palette.text.secondary
    },
    headline: {
      fontSize: 24,
      fontWeight: basicVars.fontWeightNormal,
      fontFamily: basicVars.fontFamily,
      color: palette.text.primary
    },
    title: {
      fontSize: 20,
      fontWeight: basicVars.fontWeightMedium,
      fontFamily: basicVars.fontFamily,
      color: palette.text.primary
    },
    subheading: {
      fontSize: 16,
      fontWeight: basicVars.fontWeightNormal,
      fontFamily: basicVars.fontFamily,
      color: palette.text.primary
    },
    body2: {
      fontSize: 14,
      fontWeight: basicVars.fontWeightMedium,
      fontFamily: basicVars.fontFamily,
      color: palette.text.primary
    },
    body1: {
      fontSize: 14,
      fontWeight: basicVars.fontWeightNormal,
      fontFamily: basicVars.fontFamily,
      color: palette.text.primary
    },
    caption: {
      fontSize: 12,
      fontWeight: basicVars.fontWeightNormal,
      fontFamily: basicVars.fontFamily,
      color: palette.text.secondary
    },
    button: {
      fontSize: 14,
      fontWeight: basicVars.fontWeightMedium,
      fontFamily: basicVars.fontFamily,
      color: palette.text.primary,
      textTransform: 'uppercase'
    }
  };
}
