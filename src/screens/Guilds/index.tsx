import React from "react";
import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { GuildProps } from "../../components/Appoitment";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export default function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    { id: "1", name: "Lendários", icon: null, owner: true },
    { id: "2", name: "Lendários", icon: null, owner: true },
    // { id: "3", name: "Lendários", icon: null, owner: true },
    // { id: "4", name: "Lendários", icon: null, owner: true },
    // { id: "5", name: "Lendários", icon: null, owner: true },
    // { id: "6", name: "Lendários", icon: null, owner: true },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild onPress={() => handleGuildSelect(item)} data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
      />
    </View>
  );
}
