import { FC } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { CustomInputInterface } from "./CustomInput";

const CustomInput2: FC<CustomInputInterface> = ({label, ...rest}) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <TextInput style={styles.input} {...rest} />
  </View>
);

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#CFCFCF",
  },
  label: {
    color: "#14304A",
    fontSize: 28
  },
});

export default CustomInput2;
