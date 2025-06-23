import BlueButton from "@/components/BlueButton";
import CustomInput2 from "@/components/CustomInput2";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Signup = () => {
  const [step, setStep] = useState(0);
  const [progressStep, setProgressStep] = useState(0);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [old, setOld] = useState("");
  const steps = [
    {
      content: (
        <CustomInput2
          label="What's your email?"
          placeholder="Email Address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      ),
    },
    {
      content: (
        <CustomInput2
          label="Create a Password"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      ),
    },
    {
      content: (
        <CustomInput2
          label="How old are you?"
          placeholder="Age"
          value={old}
          onChangeText={(text) => setOld(text)}
        />
      ),
    },
  ];

  const handleNext = () => {
    step < steps.length - 1 ? setStep(step + 1) : router.push("/");
  };

  useEffect(() => {
    setProgressStep(progressStep + 0.35);
  }, [step]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.form}>
        <View>{steps[step].content}</View>
        <View style={styles.statusbar}>
          <Text>
            {step + 1} of {steps.length}
          </Text>
          <Progress.Bar progress={progressStep} width={200} />
        </View>
        <View>
          <BlueButton text="Next" onPress={handleNext} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 20,
  },
  statusbar: {
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    textAlign: "right",
  },
});

export default Signup;
