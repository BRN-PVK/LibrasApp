import {
    Image,
    Linking,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    Button,
    Alert,
    View,
  } from "react-native";
  import React, { useState, useCallback, useRef} from "react";
  import YoutubePlayer from "react-native-youtube-iframe";
  import TopBar from "../../Components/TopBar";
  
  const Cumprimento = (image, txt, navigation) => {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        Alert.alert("Agora você está preparado para fazer o quiz!");
      }
    }, []);

    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);

    return (
      <ScrollView style={styles.container}>
        <TopBar title={"Cumprimento"} />
  
        <View style={styles.body}>
          <Text style={styles.nothTxtl}>Assista a vídeo-aula a seguir e aprenda os sinais dos cumprimentos em Libras.</Text>

          <View>
      <YoutubePlayer
        height={200}
        play={playing}
        videoId={"JKZRXMoRvPA"}
        onChangeState={onStateChange}
      />
    </View>

          <View style={styles.noth}>
         
            <Text style={styles.nothTxt}>Teste seus conhecimentos acessando o quiz no botão abaixo:</Text>

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
  
  export default Cumprimento;
  
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
      marginBottom: 50,
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
      marginVertical: 20,
    },
    nothTxtl: {
      fontSize: 19,
      fontWeight: "500",
      textAlign: "justify",
      marginVertical: 20,
    }
  });
  