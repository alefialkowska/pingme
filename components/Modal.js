import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Modal as PaperModal,
  Portal,
  Text,
  Button,
  Divider,
  useTheme,
} from "react-native-paper";

const Modal = () => {
  const { navigate } = useNavigation();
  const { height, width } = useWindowDimensions();
  const theme = useTheme();

  const styles = StyleSheet.create({
    contentContainerStyle: {
      height: 200,
      width: width,
      bottom: -50,
      padding: 20,
      paddingBottom: 50,
      position: "absolute",
      backgroundColor: theme.colors.backgroundGray,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    },
  });

  return (
    <Portal>
      <PaperModal visible contentContainerStyle={styles.contentContainerStyle}>
        <Text>Wyślij zaproszenie do gry</Text>
        <Text>
          Już wiesz z kim chcesz zagrać? Wyszukaj przeciwnika i wyślij mu
          zaproszenie.{" "}
        </Text>
        <Text>...możesz też wybrać kogoś z ostatnich przeciwników:</Text>
        <Text>Wyślij zaproszenie do gry</Text>
      </PaperModal>
    </Portal>
  );
};

export default Modal;
