import {
  Image,
  KeyboardAvoidingView,
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
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { useGlobalContext } from "../Function/Context";
import Loader from "../Components/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const Register = ({ navigation }) => {
  const { loader, loaderF, storeData } = useGlobalContext();
  const [email, emailF] = useState("");
  const [name, nameF] = useState("");
  const [password, passwordF] = useState("");
  const [confirmpassword, confirmpasswordF] = useState("");

  const [notification, notificationF] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      notificationF("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [notification]);

  // useEffect(() => {
  //   const unsub = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       navigation.navigate("Main", { user: user });
  //     }
  //   });

  //   return unsub;
  // }, []);

  // FUCNTION TO VALIDATE EMAIL

  const isValidEmail = (email) => {
    // Simple email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // REGISTER NEW USERS

  const RegisterUser = async () => {
    // TRIM ALL DETAILS
    const trimmedEmail = email.trim();
    const trimmedName = name.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmpassword.trim();

    // - CHECK IF EMAIL IS VALID
    if (!isValidEmail(trimmedEmail)) {
      notificationF("Por favor insira um e-mail válido.");
      return loaderF(false);
    }

    // - CHECK IF PASSWORD MATCHED
    if (trimmedPassword !== trimmedConfirmPassword) {
      notificationF("As senhas não coincidem.");
      return loaderF(false);
    }

    // - CHECK IF EMAIL, NAME, AND PASSWORD ARE PRESENT
    if (!trimmedEmail || !trimmedName || !trimmedPassword) {
      notificationF("Todos os campos precisam ser preenchidos!");
      return loaderF(false);
    }

    loaderF(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        trimmedEmail,
        trimmedPassword
      );
      const user = userCredential.user; // user info from firebase

      await updateProfile(user, {
        displayName: trimmedName,
      });

      await SaveToAsyncStorage(user);

      loaderF(false);
    } catch (error) {
      const errorMessage = error.message;
      notificationF(errorMessage);
      console.log(error);
      loaderF(false);
    }
  };

  const SaveToAsyncStorage = async (value) => {
    const jsonValue = JSON.stringify(value);

    try {
      await AsyncStorage.setItem("user", jsonValue);
      Alert.alert("Quiz App", "Usuário atualizado", [
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

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <ScrollView style={styles.container}>
          <View style={styles.floews}>
            <View>
              <Image
                style={{
                  width: 200,
                  height: 200,

                  left: 0,
                }}
                source={{
                  uri: "https://i.imgur.com/x1ba6Xm.png",
                }}
              />
            </View>
          </View>

          <View style={styles.caption}>
            <Text style={styles.captionTitile}>Criar conta</Text>
            <Text style={styles.captionTxt}>Comece a aprender agora mesmo!</Text>

            <KeyboardAvoidingView behavior="padding">
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
                  autoComplete="name"
                  keyboardType="default"
                  style={styles.txtInput}
                  onChangeText={(e) => nameF(e)}
                  placeholder="Nome"
                  value={name}
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
              <View style={styles.txtInputDiv}>
                <TextInput
                  style={styles.txtInput}
                  secureTextEntry={true}
                  onChangeText={(e) => confirmpasswordF(e)}
                  placeholder="Confirme sua senha"
                  value={confirmpassword}
                />
              </View>
            </KeyboardAvoidingView>
            <Text style={{ color: "red", padding: 5 }}>{notification}</Text>

            <View>
              <TouchableOpacity style={styles.button} onPress={RegisterUser}>
                <Text style={styles.buttonTet}>Criar conta</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttom}>
              <Text>Possui uma conta? </Text>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text
                  style={{ color: "blue", fontSize: 14, fontWeight: "800" }}
                >
                  Entrar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default Register;

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
  },

  caption: {
    alignItems: "center",

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
