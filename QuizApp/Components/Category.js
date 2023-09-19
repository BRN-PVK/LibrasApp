import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Category = ({ img, txt, api, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.Cat}
      onPress={() => {
        navigation.navigate("Quiz", { api: api, txt: txt });
      }}
    >
      <Image
        source={{
          uri: img,
        }}
        style={{ height: 80, width: 90 }}
      />
      <Text style={styles.CatTxt}>{txt}</Text>
    </TouchableOpacity>
  );
};

const AlfabetosAtalho = ({ img, txt, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.Cat}
      onPress={() => {
        navigation.navigate("Alfabetos", { txt: txt });
      }}
    >
      <Image
        source={{
          uri: img,
        }}
        style={{ height: 80, width: 90 }}
      />
      <Text style={styles.CatTxt}>{txt}</Text>
    </TouchableOpacity>
  );
};

const CoresAtalho = ({ img, txt, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.Cat}
      onPress={() => {
        navigation.navigate("Cores", { txt: txt });
      }}
    >
      <Image
        source={{
          uri: img,
        }}
        style={{ height: 80, width: 90 }}
      />
      <Text style={styles.CatTxt}>{txt}</Text>
    </TouchableOpacity>
  );
};

export default (Category);

const styles = StyleSheet.create({
  Cat: {
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    padding: 5,
  },

  CatTxt: {
    fontWeight: "500",
    paddingVertical: 5,
  },
});
