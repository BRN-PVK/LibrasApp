import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const TopBar = ({ title, txt, display }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{ height: 30, width: 30, display: display }}
          source={{
            uri: "https://i.imgur.com/bVxrGhh.png",
          }}
        />
      </TouchableOpacity>

      <Text style={{ fontSize: 23, color: "white", marginLeft: 30 }}>
        {" "}
        {txt} {title}
      </Text>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: "blue",
    height: 90,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
});
