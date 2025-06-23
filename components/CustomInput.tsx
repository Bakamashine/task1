import { FC } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
} from "react-native";

export interface CustomInputInterface extends TextInputProps {
  label: string;
}

const CustomInput: FC<CustomInputInterface> = ({ label, ...rest }) => (
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
  },
});

export default CustomInput;
