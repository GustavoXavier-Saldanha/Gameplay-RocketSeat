import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import AppoitmentDetails from "../screens/AppoitmentDetails";
import AppoitmentCreate from "../screens/AppoitmentCreate";
const { Navigator, Screen } = createStackNavigator();
import { theme } from "../global/styles/theme";
export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="AppoitmentDetails" component={AppoitmentDetails} />
      <Screen name="AppoitmentCreate" component={AppoitmentCreate} />
    </Navigator>
  );
}
