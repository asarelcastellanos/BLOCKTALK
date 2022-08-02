import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens

// Modals
import MapModal from "../modals/MapModal";
//import OrganizationModal from "../modals/OrganizationModal";
import MapScreen from "../screens/MapScreen";

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
            <Stack.Group
                screenOptions={{
                    presentation: "modal",
                    headerShown: false,
                    cardStyle: {
                        backgroundColor: "rgba(255, 255, 255, 0)",
                        opacity: 0.99,
                    },
                                     
                }}
                headerLeft ={ () => (
                    <DrawerButton onPress={() => navigation.toggleDrawer()}>Close</DrawerButton>
                  )}
                >
                <Stack.Screen
                    name="Communities"
                    component={MapModal}
                />
                {/* <Stack.Screen name="Organization" component={OrganizationModal} /> */}
            </Stack.Group>
        </Stack.Navigator>
    );
}
