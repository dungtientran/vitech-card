import { loadAsync } from "expo-font";

export const Fonts = {
  roboto: {
    // regular: '',
    // regularItalic: '',
    // semiBold: '',
    // semiBoldItalic: '',
    // bold: '',
    // boldItalic: '',
  },
};

export const loadFonts = () =>
  loadAsync({
    // roboto_regular: require('@/assets/'),
    // roboto_regular_italic: require('@/assets/'),
    // roboto_semiBold: require('@/assets/fonts/'),
    // roboto_semiBold_italic: require('@/assets/fonts/'),
    // roboto_bold: require('@/assets/fonts/'),
    // roboto_bold_italic: require('@/assets/fonts/'),
  });
