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

  const NumerosAtalho = ({ img, txt, navigation }) => {
    return (
      <TouchableOpacity
        style={styles.Cat}
        onPress={() => {
          navigation.navigate("Números", { txt: txt });
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

  const CumprimentoAtalho = ({ img, txt, navigation }) => {
    return (
      <TouchableOpacity
        style={styles.Cat}
        onPress={() => {
          navigation.navigate("Cumprimento", { txt: txt });
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

  const CarPessoaisAtalho = ({ img, txt, navigation }) => {
    return (
      <TouchableOpacity
        style={styles.Cat}
        onPress={() => {
          navigation.navigate("Características Pessoais", { txt: txt });
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

  const CarPsicologicasAtalho = ({ img, txt, navigation }) => {
    return (
      <TouchableOpacity
        style={styles.Cat}
        onPress={() => {
          navigation.navigate("Características Psicológicas", { txt: txt });
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
            "https://i.imgur.com/lwSJIpM.png"
          }
          txt="Aula 01"
          navigation={navigation}
        />

        <CoresAtalho
          img={
            "https://i.imgur.com/3iR46gv.png"
          }
          txt="Aula 02"
          navigation={navigation}
        />

        <NumerosAtalho
          img={
            "https://i0.wp.com/brasil.cambly.com/wp-content/uploads/2019/03/shutterstock_1051829627.jpg?w=1920&ssl=1"
          }
          txt="Aula 03"
          navigation={navigation}
        />

      </View>
      <View style={styles.quizCatDiv}>
        <CumprimentoAtalho
          img={
            "https://i.imgur.com/B4XXVrf.png"
          }
          txt="Aula 04"
          navigation={navigation}
        />

        <CarPessoaisAtalho
          img={
            "https://i.imgur.com/VUQkJL0.png"
          }
          txt="Aula 05"
          navigation={navigation}
        />

        <CarPsicologicasAtalho
          img={
            "https://i.imgur.com/Zx3AQOp.png"
          }
          txt="Aula 06"
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
