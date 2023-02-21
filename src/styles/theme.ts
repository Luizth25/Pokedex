declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof themeColors;
  }
}

const themeColors = {
  background: "#CC322A",
  textBackground: "#E6D596",
  titleColor: "#4C3434",
  infoColor: "#642C34",
  borderColor: "#A7B9D3",
};

const theme = {
  colors: themeColors,
};

export default theme;
