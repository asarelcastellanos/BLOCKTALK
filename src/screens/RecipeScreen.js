import React from "react";
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { Box, Text } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { ImageBackground } from "react-native";

export default function RecipesScreen({
  recipe = {
    servings: 5,
    calories: 500,
    tags: [],
    name: "The Potato Bowl",
    ingredients: [
      {
        name: "Potatoes",
        amount: 6,
      },
      {
        name: "Avocadoes",
        amount: 4,
      },
      {
        name: "Red Onion",
        amount: 1,
      },
      {
        name: "Bell Peppers",
        amount: 3,
      },
    ],
    steps: [
      "Dice onion, bell peppers, and potatoes",
      "Add olive oil to a large pot and saute until the onions are soft ",
      "Then add veg stock, simmer on med heat until liquid evaporates and potatoes are soft",
      "Add eggs to the same pot, with dry seasonings scramble egg and potatoes together ",
      "Then add to bowl, top with avocado slices",
    ],
  },
}) {
  return (
    <>
      {/* <SafeAreaView> */}
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Box alignItems={"center"} marginTop={60}>
          {/* Recipe Image */}
          <View
            style={{
              width: "100%",
              aspectRatio: 1 / 1,
              backgroundColor: "red",
              borderRadius: 20,
            }}
          ></View>
        </Box>
        {/* Tags */}
        <View style={styles.ingredients}>
          <Tag name={`Servings: ${recipe.servings}`} />
          <Tag name={`Calories: ${recipe.calories}`} />
          {recipe.tags.map((tag) =>
            tag ? <Tag name={tag[0].toUpperCase + tag.slice(1)} /> : null
          )}
        </View>
        {/* Recipe Name */}
        <Box px={2}>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            {recipe.name.toUpperCase()}
          </Text>
        </Box>
        {/* Ingredients */}
        <ScrollView horizontal={true}>
          {recipe.ingredients.map((ingredient) => (
            <Ingredient
              name={ingredient.name}
              image={ingredient.image}
              amount={ingredient.amount}
            />
          ))}
        </ScrollView>
        {/* Find Ingredients/Map Preview */}
        <MapPreview />
        {/* Ingredients */}
        <Box mt={4} p={5} borderRadius="md" bg="white" shadow={1}>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            INSTRUCTIONS
          </Text>
          {recipe.steps.map((step, i) => (
            <Box pb={2}>
              <Text fontSize={"md"} fontWeight="bold">{`Step ${i + 1}.`}</Text>
              <Text>{`${step}`}</Text>
            </Box>
          ))}
        </Box>
      </ScrollView>
    </>
  );
}

function Tag({ name }) {
  return (
    <Box
      bg={"white"}
      height={8}
      shadow={2}
      paddingX={2}
      borderRadius={10}
      marginBottom={5}
      justifyContent={"center"}
      alignItems={"center"}
      margin={1}
    >
      <Text>{name}</Text>
    </Box>
  );
}

function Ingredient({ image, name = "aspargus", amount = 1 }) {
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      margin={1}
    >
      <Box
        backgroundColor={"gray.500"}
        borderRadius={10}
        width={120}
        aspectRatio={1 / 1}
        shadow={2}
      ></Box>
      <Box marginTop={2}>
        <Text fontSize={"md"}>{`${amount} ${name}`}</Text>
      </Box>
    </Box>
  );
}

function MapPreview() {
  return (
    <Box
      width={"100%"}
      padding={4}
      aspectRatio={4 / 2}
      bg={"green.500"}
      borderRadius={10}
      shadow={2}
    >
      <Text color={"white"} fontSize={"xl"} fontWeight={"bold"}>
        Find Ingredients
      </Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
  },
  ingredients: {
    paddingTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },

  card: {},
});
