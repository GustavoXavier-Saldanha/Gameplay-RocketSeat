import React from "react";
import { styles } from "./styles";
import { Image } from "react-native";

export function GuildIcon() {
  const uri =
    "https://play-lh.googleusercontent.com/Wq15hCMPJW-eUz-c4DtnUxHkk2s-pVra14td-E4b05Eo-Cu8Koj6BqPUNULbh9HfjpkC";
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
