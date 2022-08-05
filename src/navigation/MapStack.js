import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens

// Modals
import MapModal from "../modals/MapModal";
//import OrganizationModal from "../modals/OrganizationModal";
import MapScreen from "../screens/MapScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileStack from "./ProfileStack";
const Stack = createStackNavigator();

export default function MapStack(navigation) {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen
                    name="MapScreen"
                    component={MapScreen}
                    options={{ headerShown: false }}
                />

                {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
                {/* <Stack.Screen name="ProfileStack" component={ProfileStack} options={{ headerShown: false }} /> */}
            </Stack.Group>
            <Stack.Group>
                 <Stack.Screen name="ProfileStack" component={ProfileStack} options={{ headerShown: false }} />
                 {/* <Stack.Screen name="Organization" component={OrganizationModal} /> */}
            </Stack.Group>
        </Stack.Navigator>
    );
}
