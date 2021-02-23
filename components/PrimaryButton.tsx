import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PrimaryButtonParams } from "../types";

const PrimaryButton = ({ callback, title, style }: PrimaryButtonParams) => {
  return (
    <TouchableOpacity onPress={callback} style={style}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
