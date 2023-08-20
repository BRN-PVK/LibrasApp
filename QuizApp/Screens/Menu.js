import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Category from "../Components/Category";
import CategoryList from "../Components/CategoryList";
import { useGlobalContext } from "../Function/Context";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Function/Firebase";

const Menu = () => {
  const { user, navigation } = useGlobalContext();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (!user) {
  //       navigation.navigate("Home");
  //     }
  //   });
  // }, []);

  console.log(user);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.profile}>
          <Text style={styles.profiletxt}>
            Olá,{" "}
            {!user || user?.displayName === null
              ? "Desconhecido"
              : `${user?.displayName}`}
          </Text>
        </View>
      </View>
      <View style={styles.adBar}>
        <Image
          source={{
            uri: "https://i.imgur.com/QZU4Ip5.png",
          }}
          style={{ height: 180, width: 180 }}
        />
        <View style={styles.adBarDiv}>
          <Text style={styles.adBarTitle}>Explore! </Text>
          <Text style={styles.adBarCaption}> Continue estudando</Text>
          <Text style={styles.adBarCaption}> e aprenda mais ainda! </Text>
          <Text style={styles.adBarCaption}></Text>
        </View>
      </View>

      <>
        <CategoryList navigation={navigation} />
      </>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    height: "100%",
    backgroundColor: "white",
  },
  topBar: {
    backgroundColor: "blue",
    height: 200,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    padding: 20,
  },
  profiletxt: {
    color: "white",
    fontSize: 28,
    fontWeight: "600",
    flexDirection: "row",
  },
  adBar: {
    backgroundColor: "rgb(38, 50, 56)",
    height: 200,
    borderRadius: 16,

    padding: 10,
    marginHorizontal: 16,
    marginTop: -110,
    flexDirection: "row",
  },
  adBarDiv: {
    justifyContent: "center",
  },
  adBarTitle: {
    color: "white",
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 20,
  },

  adBarCaption: {
    fontSize: 14,
    color: "white",

    fontWeight: "400",
  },
});
