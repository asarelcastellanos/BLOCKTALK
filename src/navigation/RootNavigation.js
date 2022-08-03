import React from "react";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import UserStack from "./UserStack";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import { NavigationContainer } from "@react-navigation/native";
import IntroStack from "../navigation/IntroStack";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function RootNavigation() {
  const { user } = useAuthentication();

  // return user ? <IntroStack /> : <AuthStack />;

  return user ? <UserStack /> : <AuthStack />;
}
