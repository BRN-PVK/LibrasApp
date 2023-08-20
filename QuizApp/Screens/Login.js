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
import { auth } from "../Function/Firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { useGlobalContext } from "../Function/Context";

const Login = ({ navigation }) => {
  const { loader, loaderF, setuser } = useGlobalContext();

  const [email, emailF] = useState("");

  const [password, passwordF] = useState("");

  // NOTIFICATION

  const [notification, notificationF] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      notificationF("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [notification]);

  // FUNCTION TO HANDLE LOG IN

  // FUCNTION TO VALIDATE EMAIL

  const isValidEmail = (email) => {
    // Simple email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleLogin = async () => {
    // TRIM ALL DETAILS
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // CHECK IF EMAIL IS VALID
    if (!isValidEmail(trimmedEmail)) {
      notificationF("Please enter a valid email address");
      return loaderF(false);
    }

    // CHECK IF EMAIL AND PASSWORD ARE PRESENT
    if (!trimmedEmail || !trimmedPassword) {
      notificationF("All fields must be filled!");
      return loaderF(false);
    }

    loaderF(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setuser(user);

      await SaveToAsyncStorage(user);

      loaderF(false);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      notificationF(errorMessage);
      loaderF(false);
    }
  };

  const SaveToAsyncStorage = async (value) => {
    const jsonValue = JSON.stringify(value);

    try {
      await AsyncStorage.setItem("user", jsonValue);
      Alert.alert("Quiz App", "User Updated", [
        {
          text: "Cancel",
          // onPress: () => console.log('Cancel Pressed'),
          style: "cancel",
        },
        // {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      console.log(jsonValue, "saved to react storage 120");
    } catch (error) {
      console.error("Error saving array of objects:", error);
    }
  };
  ``;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.caption}>
        <Text style={styles.captionTitile}>Olá</Text>
        <Text style={styles.captionTxt}>Sentimos sua falta!</Text>

        <View>
          <View style={styles.txtInputDiv}>
            <TextInput
              autoComplete="email"
              keyboardType="email-address"
              style={styles.txtInput}
              onChangeText={(e) => emailF(e)}
              placeholder="Email"
              value={email}
            />
          </View>

          <View style={styles.txtInputDiv}>
            <TextInput
              autoComplete="password"
              secureTextEntry={true}
              style={styles.txtInput}
              onChangeText={(e) => passwordF(e)}
              placeholder="Senha"
              value={password}
            />
          </View>
        </View>

        <Text style={{ color: "red", padding: 5 }}>{notification}</Text>

        <View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonTet}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.floews}>
          <View>
            <Image
              style={{
                width: 200,
                height: 200,

                left: 0,
              }}
              source={{
                uri: "https://i.imgur.com/tiR5p4u.png",
              }}
            />
          </View>
        </View>

        <View style={styles.buttom}>
          <Text>Não possui conta? </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={{ color: "blue", fontSize: 14, fontWeight: "800" }}>
              Crie sua conta
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

  function newFunction() {
    useEffect(() => {
      let timer = setTimeout(() => {
        notificationF("");
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }, []);
  }
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: "white",
  },

  floews: {
    position: "relative",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  caption: {
    alignItems: "center",
    marginTop: 90,
    justifyContent: "center",
    flex: 1,
  },
  captionTitile: {
    fontSize: 40,
    fontWeight: "600",
  },
  captionTxt: {
    marginTop: 10,
    fontSize: 20,
    color: "rgb(116, 115, 115)",
    textAlign: "center",
    lineHeight: 23,
    fontWeight: "400",
  },
  txtInputDiv: {
    paddingVertical: 10,
    marginTop: 20,
    justifyContent: "space-between",
    borderBottomColor: "rgb(233, 229, 226)",
    borderBottomWidth: 2,
    width: 300,
  },
  txtInput: {
    fontSize: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "blue",
    width: 300,
    padding: 16,
    borderRadius: 16,
    alignItems: "center",

    marginTop: 30,
  },
  buttonTet: {
    fontSize: 20,
    fontWeight: "300",
    color: "white",
    textTransform: "capitalize",
  },
  buttom: {
    flexDirection: "row",

    marginTop: 30,
  },
});
