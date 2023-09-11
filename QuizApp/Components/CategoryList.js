import { Image, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";
import Category from "./Category";

const CategoryList = ({ navigation }) => {

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

  return (
    <View style={styles.quizCat}>
      <Text style={styles.quizCatTitle}>Atalhos</Text>
      <View style={styles.quizCatDiv}>
        <AlfabetosAtalho
          img={
            "https://i.imgur.com/DmLYxdd.png"
          }
          txt="Alfabeto"
          navigation={navigation}
        />

        <CoresAtalho
          img={
            "https://i.imgur.com/ftvQgir.png"
          }
          txt="Cores"
          navigation={navigation}
        />

        <Category
          img="https://i.imgur.com/eU5FIIW.png"
          txt="Texto 3"
          api={
            "https://opentdb.com/api.php?amount=10&category=21&type=multiple&encode=url3986"
          }
          navigation={navigation}
        />
      </View>
      <View style={styles.quizCatDiv}>
        <Category
          img={
            "https://i.imgur.com/eU5FIIW.png"
          }
          txt="Texto 4"
          navigation={navigation}
          api={
            "https://opentdb.com/api.php?amount=10&category=31&type=multiple&encode=url3986"
          }
        />
        <Category
          img="https://i.imgur.com/eU5FIIW.png"
          txt="Texto 5"
          api={
            "https://opentdb.com/api.php?amount=10&category=19&type=multiple&encode=url3986"
          }
          navigation={navigation}
        />
        <Category
          img="https://i.imgur.com/eU5FIIW.png"
          txt={"Texto 6"}
          api={
            "https://opentdb.com/api.php?amount=10&category=11&type=multiple&encode=url3986"
          }
          navigation={navigation}
        />
      </View>
    </View>
  );
};

export default CategoryList;

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
  quizCat: {
    paddingHorizontal: 16,
  },
  quizCatTitle: {
    paddingVertical: 16,
    fontSize: 28,
    fontWeight: "600",
  },
  quizCatDiv: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});
