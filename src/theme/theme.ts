export const WIDTH_CONTAINER = 1440;
export const WIDTH_CONTAINER_PX = `${WIDTH_CONTAINER}px`;

export const PADDING_CONTAINER = 6;
export const PADDING_CONTAINER_PX = "48px";

export const colors = {
  text: "#333333",
  background: "#F2F2F2",
  lightRed1: "#FAD9CB",
  lightRed2: "#FCECE4",
  lightRed3: "#FEF5F2",
  orange1: "#FC7E2F",
  orange2: "#D7421A",
  red1: "#F90319",
  red2: "#A0020E",
  green1: "#4AC282",
  green2: "#188631",
  dark: "#000000",
  gray1: "#333333",
  gray2: "#4F4F4F",
  gray3: "#828282",
  gray4: "#BDBDBD",
  gray5: "#E0E0E0",
  gray6: "#F2F2F2",
  white1: "#FFFFFF",
};

const text = {
  default: {
    fontFamily: "Manrope",
    fontSize: "16px",
  },
  headline1: {
    fontFamily: "Manrope",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "40px",
  },
  headline2: {
    fontFamily: "Manrope",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "40px",
  },
  headline3: {
    fontFamily: "Manrope",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "32px",
  },
  headline4: {
    fontFamily: "Manrope",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "24px",
  },
  headline5: {
    fontFamily: "Manrope",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "16px",
  },
  body: {
    fontFamily: "Manrope",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px",
  },
  bodySmall: {
    fontFamily: "Manrope",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "20px",
  },
  label: {
    fontFamily: "Manrope",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
  },
  manchet: {
    fontFamily: "Manrope",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "26px",
  },
  logo: {
    fontFamily: "Manrope",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "40px",
  },
  button: {
    fontFamily: "Manrope",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "24px",
  },
  text: {
    fontFamily: "Manrope",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "28px",
  },
};

const shadows = {
  buttonHover: `0px 4px 16px rgba(0, 0, 0, 0.14)`,
};

const buttonDefault = {
  borderRadius: "40px",
  height: "6",
  minWidth: "160px",
  px: "6",
  transition: "border-color 0.2s, background-color 0.2s, color 0.2s",
  cursor: "pointer",
  justifyContent: "center",
  "&:focus": { outline: 0 },
};

const buttons = {
  primary: {
    ...buttonDefault,
    ...text.button,
    color: "white1",
    bg: "green1",
    border: `2px solid ${colors.green1}`,
    "&:hover": {
      bg: "green2",
      borderColor: `${colors.green2}`,
      boxShadow: shadows.buttonHover,
    },
  },
  secondary: {
    ...buttonDefault,
    ...text.button,
    color: "red1",
    bg: "transparent",
    border: `2px solid ${colors.red1}`,
    "&:hover": {
      borderColor: `${colors.green1}`,
      color: `${colors.green1}`,
    },
  },
  tertiary: {
    ...buttonDefault,
    ...text.button,
    color: "red1",
    bg: colors.white1,
    border: `2px solid ${colors.white1}`,
    "&:hover": {
      bg: colors.gray6,
      borderColor: `${colors.gray6}`,
      color: `${colors.red2}`,
    },
  },
  disabled: {
    ...buttonDefault,
    ...text.button,
    color: colors.white1 + "80", // 50% alpha
    bg: colors.gray4,
    border: `2px solid ${colors.gray4}`,
    "&:hover": {
      bg: colors.gray5,
      borderColor: `${colors.gray5}`,
    },
  },
};

const theme = {
  fonts: {
    // Manrope: ManropeVariableFont,
  },
  fontSizes: [],
  fontWeights: {},
  breakpoints: ["40em", "52em", "64em", "76em"],
  space: [0, 4, 8, 16, 24, 32, 48, 56, 64, 128, 256, 512],
  sizes: [0, 4, 8, 16, 24, 32, 48, 56, 64, 128, 256, 512],
  colors,
  text,
  shadows,
  buttons,
  forms: {
    label: {
      ...text.bodySmall,
      cursor: "pointer",
    },
    input: {
      color: colors.gray1,
      backgroundColor: colors.white1 + "99",
      // border: "none",
      borderRadius: "4px",
      height: "7",
      px: "4",
      transition: "background-color 0.3s",
      "&:focus": {
        backgroundColor: `${colors.white1}`,
        borderColor: `${colors.green2}`,
      },
    },
    textarea: {
      ...text.body,
      px: "4",
      py: "3",
      color: colors.gray1,
      backgroundColor: colors.white1 + "99",
      borderRadius: 0,
      transition: "background-color 0.3s",
      "&:focus": {
        backgroundColor: `${colors.white1}`,
      },
      "&:placeholder-shown": {
        color: colors.gray3,
      },
      "&[disabled]": {
        backgroundColor: colors.white1 + "99",
        color: colors.gray3,
      },
    },
    select: {
      color: colors.gray1,
      backgroundColor: colors.white1 + "99",
      border: "none",
      borderRadius: "0px",
      height: "7",
      px: "4",
      cursor: "pointer",
      "&:focus": {
        backgroundColor: colors.white1,
      },
    },
    checkbox: {
      cursor: "pointer",
      color: colors.white1 + "99",
      fill: "red",
      ":checked": {
        color: colors.white1,
      },
    },
  },
  links: {
    default: {
      cursor: "pointer",
      textDecoration: "none",
    },
    // red: {
    //   ...text.manchet,
    //   cursor: "pointer",
    //   textDecoration: "underline",
    //   color: colors.red1,
    // },
  },
  styles: {
    a: {
      cursor: "pointer",
      textDecoration: "underline",
      color: colors.gray1,
      "&:hover": {
        color: colors.red2,
      },
    },
    none: {
      cursor: "pointer",
      textDecoration: "none",
    },
  },
};

export default theme;
