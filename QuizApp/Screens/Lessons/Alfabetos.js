import {
    Image,
    Linking,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  
  import TopBar from "../../Components/TopBar";
  
  const Alfabetos = (image, txt, navigation) => {
    return (
      <ScrollView style={styles.container}>
        <TopBar title={"Alfabeto Libras"} />
  
        <View style={styles.body}>
          <View style={styles.noth}>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://i.imgur.com/6x9HO8P.jpg",
              }}
              style={{ width: 300, height: 300 }}
            />
            <Text style={styles.nothTxt}>Teste seus conhecimentos no quiz abaixo:</Text>
            <TouchableOpacity
              style={styles.optionBtn}
              onPress={() => {
                Linking.openURL("https://github.com/BRN-PVK/LibrasApp");
              }}
            >
              <Text style={styles.option}>Acessar Quiz</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default Alfabetos;
  
  const styles = StyleSheet.create({

    container: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  
      height: "100%",
      backgroundColor: "white",
    },
    body: {
      paddingHorizontal: 20,
  
      marginVertical: 30,
      flex: 1,
    },
    optionBtn: {
      borderColor: "blue",
      padding: 10,
      marginVertical: 15,
      justifyContent: "space-between",
      backgroundColor: "blue",
      borderWidth: 2,
      borderRadius: 12,
      flexDirection: "row",
      alignItems: "center",
    },
    option: {
      fontSize: 20,
      fontWeight: "500",
      color: "white",
      paddingHorizontal: 10,
    },
  
    noth: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    nothTxt: {
      fontSize: 19,
      fontWeight: "500",
      textAlign: "center",
      fontStyle: "italic",
      marginVertical: 20,
    },
  });
  