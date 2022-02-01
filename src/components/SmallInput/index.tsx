import React from "react";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { TextInput, TextInputProps } from "react-native";

export function SmallInput({ ...rest }: TextInputProps) {
  return (
    <TextInput
      keyboardType="numeric"
      style={styles.container}
      {...rest}
    ></TextInput>
  );
}
