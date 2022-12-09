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
      width: width,
      bottom: -50,
      padding: 20,
      paddingBottom: 50,
      position: "absolute",
      backgroundColor: theme.colors.backgroundGray,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    },
    title: {
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: 16,
      fontWeight: "700",
      fontSize: 16,
    },
    divider: {
      backgroundColor: theme.colors.darkGray,
    },
    buttonWrapper: {
      paddingTop: 10,
      paddingBottom: 10,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    buttonContentStyle: {
      height: 50,
      width: 170,
    },
    labelStyle: {
      margin: "auto",
    },
    button: {
      borderRadius: 10,
      width: 170,
      height: 50,
    },
    outlinedContent: {
      color: theme.colors.darkGray,
      fontWeight: "600",
    },
    containedButton: {
      backgroundColor: theme.colors.darkGray,
    },
    containedLabel: {
      color: "#FFD024",
      fontWeight: "600",
    },
  });

  return (
    <Portal>
      <PaperModal visible contentContainerStyle={styles.contentContainerStyle}>
        <View />
        <Text style={styles.title}>Wyślij zaproszenie do gry</Text>
        <View />
        <Divider bold style={styles.divider} />
        <Text variant="titleMedium">
          Już wiesz z kim chcesz zagrać? Wyszukaj przeciwnika i wyślij mu
          zaproszenie.
        </Text>
        <Text variant="titleSmall">
          ...możesz też wybrać kogoś z ostatnich przeciwników:
        </Text>
        <Divider bold style={styles.divider} />
        <View style={styles.buttonWrapper}>
          <Button
            mode="outlined"
            style={styles.button}
            contentStyle={styles.buttonContentStyle}
            labelStyle={[styles.labelStyle, styles.outlinedContent]}
          >
            Anuluj
          </Button>
          <Button
            mode="contained"
            style={styles.button}
            contentStyle={[
              styles.buttonContentStyle,
              { backgroundColor: "#323232" },
            ]}
            labelStyle={[
              styles.labelStyle,
              styles.containedLabel,
              { marginHorizontal: 0 },
            ]}
          >
            Wyślij zaproszenie
          </Button>
        </View>
      </PaperModal>
    </Portal>
  );
};

export default Modal;
