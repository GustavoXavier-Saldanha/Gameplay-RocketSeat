import React from "react";
import { Text, View, Image } from "react-native";
import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";
import { useAuth } from "../../hooks/auth";

export default function SignIn() {
  const { user, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (erro) {}
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{"\n"} e organize suas{"\n"} jogatinas
          </Text>
          <Text style={styles.subTitle}>
            Crie grupos para jogar seus games{"\n"} favoritos com seus amigos
          </Text>
          <ButtonIcon
            title="Entrar com Discord"
            activeOpacity={0.7}
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  );
}