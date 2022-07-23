import React from 'react'

// Import User 
import { User } from "../utils/hooks/useAuthentication";

// Import Auth and User stacks
import AuthStack from "./AuthStack";
import UserStack from "./UserStack";

export default function RootNavigation() {
  return (
    // If User exists than go to UserStack otherwise go to AuthStack
    User ? <UserStack /> : <AuthStack />
  )
}