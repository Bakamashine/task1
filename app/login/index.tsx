import BlueButton from "@/components/BlueButton";
import CustomInput from "@/components/CustomInput";
import main_styles from "@/includes/main_styles";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.wrapper}>
        {/* Buttons */}
        <View style={styles.buttons}>
          <BlueButton text="Continue with Facebook" />
          <BlueButton text="Continue with Google" />
          <BlueButton text="Continue with Apple" />
        </View>
        <Text style={[main_styles.textCenter]}>OR: </Text>

        {/* Form */}
        <View style={styles.inputs}>
          <CustomInput placeholder="Enter Your Email" label="Email Address" />
          <CustomInput placeholder="Enter Your Password" label="Password" />
        </View>

        {/* Button Login */}
        <View>
          <BlueButton text="Login" />
        </View>

        {/* Post Button Login */}
        <View style={styles.post_login}>
          <Text style={main_styles.textCenter}>
            By continuing, you agree to Haruki Terms of Service and Privacy
            Policy
          </Text>
          <Text style={StyleSheet.flatten([main_styles.textCenter, styles.forgotten])}>Forgotten your password ?</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    marginRight: 'auto',
    marginLeft: "auto"
  },
  wrapper: {
    gap: 20,
    marginTop: 20,
  },

  buttons: {
    gap: 10,
  },

  inputs: {},
  post_login: {
    gap: 10,
  },
  forgotten: {
    fontWeight: 'bold'
  }
});
