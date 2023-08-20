import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Category from "./Category";

const CategoryList = ({ navigation }) => {
  return (
    <View style={styles.quizCat}>
      <Text style={styles.quizCatTitle}>Atalhos</Text>
      <View style={styles.quizCatDiv}>
        <Category
          img={
            "https://i.imgur.com/eU5FIIW.png"
          }
          txt="Texto 1"
          api={
            "https://opentdb.com/api.php?amount=10&category=23&type=multiple&encode=url3986"
          }
          navigation={navigation}
        />
        <Category
          img="https://i.imgur.com/eU5FIIW.png"
          txt="Texto 2"
          api={
            "https://opentdb.com/api.php?amount=10&category=17&type=multiple&encode=url3986"
          }
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
