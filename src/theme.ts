'use client';
import { createTheme } from '@mui/material/styles';
import MUILink from './components/common/MUILink';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    wide: true;
  }

  interface TypographyVariants {
    htmlFontSizeSm: number;
    htmlFontSizeMd: number;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    htmlFontSizeSm?: number;
    htmlFontSizeMd?: number;
  }

  interface Palette {
    accent: Palette['primary'];
    neutral: Palette['primary'];
    white: Palette['primary'];
    primaryLight: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
    neutral?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
    primaryLight?: PaletteOptions['primary'];
  }
}

const fontFamily = `'Lato', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'`;

const BaseTheme = createTheme({
  // typography: {
  //   fontFamily: 'var(--font-roboto)',
  // },
  //   cssVariables: true,

  breakpoints: {
    step: 7,
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1560,
      wide: 1920,
    },
  },

  palette: {
    primary: {
      main: '#2b3088',
      light: '#e6e6fa',
      dark: '#17152e',
    },
    primaryLight: {
      main: '#E0E1F6',
      light: '#EFF0FA',
      dark: '#C1C5EB',
      contrastText: '#40456B',
    },
    secondary: {
      main: '#1356ff',
      light: '#e3ebf9',
      dark: '#001f6e',
    },
    accent: {
      main: '#d60f0f',
    },
    neutral: {
      main: '#C9CBCD',
      light: '#F2F4F6',
      dark: '#828383',
      contrastText: '#545557',
    },
    error: {
      main: '#e00400',
      light: '#f72027',
      dark: '#c41a1f',
    },
    grey: {
      50: '#F9FAFB',
      100: '#F2F4F6',
      200: '#DDDFE1',
      300: '#CDCFD2',
      400: '#ABACAF',
      500: '#898A8C',
    },
    white: {
      main: '#fff',
      light: '#F9FAFB',
      dark: '#DDDFE1',
      contrastText: '#001f6e',
    },
    success: {
      main: '#66bb6a',
      light: '#81c784',
      dark: '#388e3c',
    },
    info: {
      main: '#29b6f6',
      light: '#4fc3f7',
      dark: '#0288d1',
    },
    warning: {
      main: '#ffa726',
      light: '#ffb74d',
      dark: '#f57c00',
    },
    text: {
      secondary: 'rgba(0, 0, 0, 0.54)',
    },
  },

  shape: {
    borderRadius: 4,
  },

  typography: {
    fontFamily,
    htmlFontSize: 16,
    htmlFontSizeSm: 14,
    htmlFontSizeMd: 15,
    fontSize: 14 /* 버튼 등 컴포넌트 내부에서 size 속성 설정시 사용하는 것으로 추측됨.  */,
    h1: {
      fontFamily: 'inherit',
      fontSize: '3.75rem',
    },
    h2: {
      fontFamily: 'inherit',
      fontSize: '2.625rem',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: 'inherit',
      fontWeight: 700,
      fontSize: '2rem',
    },
    h4: {
      fontFamily: 'inherit',
      fontWeight: 700,
      fontSize: '1.625rem',
    },
    h5: {
      fontFamily: 'inherit',
      fontWeight: 700,
      fontSize: '1.3125rem',
    },
    h6: {
      fontFamily: 'inherit',
      fontWeight: 700,
      fontSize: '1.125rem',
    },
    subtitle1: {
      fontFamily: 'inherit',
      fontWeight: 400,
      fontSize: '1.125rem',
      lineHeight: 1.35,
    },
    subtitle2: {
      fontFamily: 'inherit',
      fontWeight: 700,
      fontSize: '1rem',
    },
    body1: {
      fontFamily,
      fontSize: '1rem',
    },
    body2: {
      fontFamily: 'inherit',
      fontSize: '0.9375rem',
    },
    button: {
      fontFamily: 'inherit',
      fontWeight: 400,
      fontSize: '0.875rem',
    },
    caption: {
      fontFamily: 'inherit',
      fontSize: '0.8125rem',
    },
    overline: {
      fontFamily: 'inherit',
      fontSize: '0.75rem',
    },
  },
});

const customTheme = createTheme(BaseTheme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          font-size: ${BaseTheme.typography.htmlFontSizeSm}px;

          @media (min-width: ${BaseTheme.breakpoints.values.md}px) {
            font-size: ${BaseTheme.typography.htmlFontSizeMd}px;
          }

          @media (min-width: ${BaseTheme.breakpoints.values.xl}px) {
            font-size: ${BaseTheme.typography.htmlFontSize}px;
          }
        }
      `,
    },
    // MuiLink: {
    //   defaultProps: {
    //     component: MUILink,
    //   } as LinkProps,
    // },
    // MuiButtonBase: {
    //   defaultProps: {
    //     LinkComponent: RouterLink,
    //   },
    // },
    MuiButton: {
      variants: [
        {
          props: { size: 'xlarge' },
          style: {
            padding: `${BaseTheme.spacing(2)} ${BaseTheme.spacing(5.5)}`,
            fontSize: BaseTheme.typography.pxToRem(20),
            lineHeight: 1.5,
          },
        },
      ],
      styleOverrides: {
        sizeSmall: {
          fontSize: BaseTheme.typography.pxToRem(14),
        },
        sizeMedium: {
          fontSize: BaseTheme.typography.pxToRem(16),
        },
        sizeLarge: {
          fontSize: BaseTheme.typography.pxToRem(18),
        },
        textNeutral: { color: BaseTheme.palette.neutral.dark },
        outlinedNeutral: {
          color: BaseTheme.palette.neutral.dark,
          borderColor: BaseTheme.palette.neutral.main,
        },
        containedNeutral: {
          color: BaseTheme.palette.grey[600],
          backgroundColor: BaseTheme.palette.neutral.light,

          '&:hover': {
            color: BaseTheme.palette.text.primary,
            backgroundColor: BaseTheme.palette.neutral.main,
          },
        },
        outlinedPrimaryLight: {
          color: BaseTheme.palette.primaryLight.contrastText,
          borderColor: BaseTheme.palette.primaryLight.main,
          '&:hover': {
            borderColor: BaseTheme.palette.primaryLight.dark,
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        fixed: {
          [BaseTheme.breakpoints.up('sm')]: {
            width: `calc(520px + ${BaseTheme.spacing(4)})`,
          },
          [BaseTheme.breakpoints.up('md')]: {
            width: `calc(720px + ${BaseTheme.spacing(4)})`,
          },
          [BaseTheme.breakpoints.up('lg')]: {
            width: `calc(960px + ${BaseTheme.spacing(4)})`,
          },
          [BaseTheme.breakpoints.up('xl')]: {
            width: `calc(1200px + ${BaseTheme.spacing(4)})`,
          },
          [BaseTheme.breakpoints.up('xxl')]: {
            width: `calc(1440px + ${BaseTheme.spacing(4)})`,
          },
          [BaseTheme.breakpoints.up('wide')]: {
            width: `calc(1600px + ${BaseTheme.spacing(4)})`,
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        marginNormal: {
          marginTop: 0,
          marginBottom: BaseTheme.spacing(2.5),
          '&:last-child': {
            marginBottom: 0,
          },
          '.MuiFormLabel-root': {
            color: BaseTheme.palette.text.secondary,
            fontSize: BaseTheme.typography.button.fontSize,
            fontWeight: BaseTheme.typography.fontWeightBold,
            transform: 'none',
          },
          '.MuiFormHelperText-root': {
            marginLeft: 0,
            marginRight: 0,
            fontSize: BaseTheme.typography.button.fontSize,
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        labelPlacementStart: {
          marginLeft: 0,
          justifyContent: 'space-between',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${BaseTheme.spacing(1.5)} ${BaseTheme.spacing(2)}`,
          fontSize: BaseTheme.typography.body2.fontSize,
          lineHeight: 1.6,
          wordBreak: 'keep-all',
        },
        icon: {
          marginTop: '0.09375rem',
          marginRight: '0.625rem',
          fontSize: BaseTheme.typography.h5.fontSize,
          paddingTop: 0,
          paddingBottom: 0,
        },
        message: {
          flex: 'auto',
          paddingTop: 0,
          paddingBottom: 0,
        },
        standardNeutral: {
          color: BaseTheme.palette.neutral.dark,
          backgroundColor: BaseTheme.palette.neutral.light,
          '.MuiAlert-icon': {
            color: BaseTheme.palette.neutral.main,
          },
        },
        outlinedNeutral: {
          color: BaseTheme.palette.neutral.dark,
          borderColor: BaseTheme.palette.neutral.main,
          '.MuiAlert-icon': {
            color: BaseTheme.palette.neutral.main,
          },
        },
        filledNeutral: {
          color: BaseTheme.palette.neutral.light,
          backgroundColor: BaseTheme.palette.neutral.dark,
          borderColor: BaseTheme.palette.neutral.dark,
          '.MuiAlert-icon': {
            color: BaseTheme.palette.neutral.main,
          },
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: BaseTheme.palette.neutral.light,
          transform: 'scale(1, 0.70)',
        },
      },
    },
  },
});

export default customTheme;
