import { ToastAndroid } from "react-native";

export const showToastWithGravity = ( message: any ) => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };