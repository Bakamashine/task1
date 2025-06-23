import BlueButton from "@/components/BlueButton";
import main_styles from "@/includes/main_styles";
import { router } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Main = () => {
  return (
    <ImageBackground style={styles.body} source={require("../img/meme.jpg")}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.wrapper}>
          <Image style={styles.img} source={require("../img/box.jpg")} />
          <Text style={main_styles.h1}>Welcome to Haruki</Text>
          <BlueButton
            text="Signup"
            onPress={() => {
              router.push("/Signup");
            }}
          />

          <BlueButton
            text="Login"
            onPress={() => {
              router.push("/login");
            }}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: "flex-end",
  },
  wrapper: {
    padding: 30,
    gap: 10,
    backgroundColor: "white", 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  img: {
    borderRadius: 1000,
    width: 100,
    height: 100,
    marginRight: 'auto',
    marginLeft: 'auto',
  }
});

export default Main;
