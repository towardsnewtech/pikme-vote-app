import { ToastAndroid, Platform, Alert } from "react-native";

export const showToastWithGravity = ( message: any ) => {
  if (Platform.OS == "android") {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  } else if (Platform.OS == "ios") {
    Alert.alert(message);
  }
};