import React from "react";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import UserStack from "./UserStack";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import { NavigationContainer } from "@react-navigation/native";

export default function RootNavigation() {
  const { user } = useAuthentication();

  // first, try to use a button to navigate to the user stack
  return user ? <UserStack /> : <AuthStack />;
  // return user ? <HomeStack /> : <AuthStack />;
}
