import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from "react-native";
import { Header } from "../../components/Header";
import { ModalView } from "../../components/ModalView";
import { CategorySelect } from "../../components/CategorySelect";
import { theme } from "../../global/styles/theme";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import Guilds from "../Guilds";
import { GuildProps } from "../../components/Guild";
import { Background } from "../../components/Background";

export default function AppoitmentCreate() {
  const [category, setCategory] = useState<string>("");
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
  const [openGuildsModal, setOpenGuildsModal] = useState<boolean>(false);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [description, setDescription] = useState("");

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  function handleOpenGuildsModal() {
    setOpenGuildsModal(true);
  }

  function handleClosenGuildsModal() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }
  console.log(openGuildsModal);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Background>
        <ScrollView>
          <Header title="Agendar partida" />

          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 26, marginBottom: 18 },
            ]}
          >
            Categoria
          </Text>

          <CategorySelect
            hasCheckBox
            setCategory={handleCategorySelect}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuildsModal}>
              <View style={styles.select}>
                {guild.icon ? <View style={styles.image} /> : <GuildIcon />}

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : "Selecione um servidor"}
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>
            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
            </View>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />
            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </ScrollView>
      </Background>
      <ModalView visible={openGuildsModal} closeModal={handleClosenGuildsModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
