import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    width: "100%",
    height: 90,
    paddingTop: 30,
  },
  headerTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "500",
  },
});

export default Header;
