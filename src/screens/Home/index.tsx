import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appoitment } from "../../components/Appoitment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const [category, setCategory] = useState("");

  const navegation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  const appoitments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20: 40",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

  function handlerAppoitmentDetails() {
    navegation.navigate("AppoitmentDetails");
  }

  function handlerAppoitmentCreate() {
    navegation.navigate("AppoitmentCreate");
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handlerAppoitmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
        hasCheckBox={true}
      />

      <ListHeader title="Partidas Agendadas" subTitle="Total" />

      <FlatList
        data={appoitments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Appoitment onPress={handlerAppoitmentDetails} data={item} />
        )}
        style={styles.matches}
        contentContainerStyle={{ paddingBottom: 69 }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
      />
    </Background>
  );
}
