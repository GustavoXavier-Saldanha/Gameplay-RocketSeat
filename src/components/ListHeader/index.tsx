import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text, View, Image } from "react-native";
import DiscordImage from "../../assets/discord.png";
import { styles } from "./styles";

type Props = RectButtonProps & {
  title: string;
  subTitle: string;
};

export function ListHeader({ title, subTitle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}
