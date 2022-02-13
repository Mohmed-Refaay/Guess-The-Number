import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import colors from "../constants/colors";

const SelectNumberCard = ({ number }) => {
  return (
    <View style={styles.card}>
      <Text>You Selected</Text>
      <Text style={{ ...styles.number, textAlign: "center" }}>{number}</Text>
      <Button title="START GAME!" />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "black",
    shadowRadius: 6,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 5 },
    elevation: 10,
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  number: {
    borderColor: colors.secondary,
    borderWidth: 2,
    color: colors.secondary,
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default SelectNumberCard;
