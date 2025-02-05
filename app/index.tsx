import { Colors } from "@/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const WelComeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.black,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "white",
        }}
      >
        WelComeScreen
      </Text>
    
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.black,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonTitle: {
    fontSize: 16,
    color: Colors.white,
    textAlign: "center",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 22,
    backgroundColor: Colors.gray,
    height: 44,
    width: "50%",
  },
});

export default WelComeScreen;
