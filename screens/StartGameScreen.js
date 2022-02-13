import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import SelectNumberCard from "../components/SelectNumberCard";
import colors from "../constants/colors";

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const numberInputHandler = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setIsConfirmed(false);
  };

  const confirmInputHandler = () => {
    const confirmedNumber = parseInt(enteredValue);
    if (
      isNaN(confirmedNumber) ||
      confirmedNumber <= 0 ||
      confirmedNumber > 99
    ) {
      Alert.alert(
        "Invalid Number!",
        "Please enter a number between 1 and 99!",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    setIsConfirmed(true);
    setSelectedValue(confirmedNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let textOutput;
  if (isConfirmed) {
    textOutput = <SelectNumberCard number={selectedValue} />;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <View style={styles.inputContainer}>
          <Text>Select a Number!</Text>
          <TextInput
            blurOnSubmit
            maxLength={2}
            keyboardType="numeric"
            style={styles.input}
            value={enteredValue}
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.btnWrapper}>
              <Button
                title="Reset"
                color={colors.secondary}
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.btnWrapper}>
              <Button
                title="Guess"
                color={colors.primary}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </View>
        {textOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "black",
    shadowRadius: 6,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 5 },
    elevation: 10,
    padding: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  btnWrapper: {
    width: 100,
  },
  input: {
    borderBottomColor: "black",
    width: 70,
    height: 30,
    borderBottomWidth: 1,
    marginBottom: 20,
    color: "black",
    textAlign: "center",
  },
});

export default StartGameScreen;
