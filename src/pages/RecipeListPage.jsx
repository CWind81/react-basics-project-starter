import { useState } from "react";
import {
  Flex,
  SimpleGrid,
  Input,
  Card,
  Image,
  Box,
  Text,
  Tag,
  CardBody,
  Stack,
} from "@chakra-ui/react";

const RecipeListPage = ({ onSelectRecipe, data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = data.hits.filter((recipe) => {
    const nameMatch = recipe.recipe.label
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const sanitizedHealthLabels = recipe.recipe.healthLabels.map((label) =>
      label.toLowerCase().replace(/-/g, " ")
    );

    const healthLabelMatch = sanitizedHealthLabels.some((label) =>
      label.includes(searchTerm.toLowerCase())
    );

    const sanitizedDietLabels = recipe.recipe.dietLabels.map((label) =>
      label.toLowerCase().replace(/-/g, " ")
    );

    const dietLabelMatch = sanitizedDietLabels.some((label) =>
      label.includes(searchTerm.toLowerCase())
    );

    return nameMatch || healthLabelMatch || dietLabelMatch;
  });

  return (
    <Flex flexDir="column" align="center" p={2} bgColor="cyan">
      <Text fontSize={40} fontWeight="bold">
        Conrad his Recipe Checker
      </Text>
      <Input
        placeholder="Search by recipe name or healthlabel"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        mb={4}
        width="18%"
      />
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        width="75%"
      >
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipe.uri}
            recipe={recipe.recipe}
            onSelect={onSelectRecipe}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export const RecipeCard = ({ recipe, onSelect }) => {
  return (
    <Card
      maxW="xl"
      minH="400px"
      borderRadius="md"
      cursor="pointer"
      onClick={() => onSelect(recipe)}
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)" }}
      bg="purple.100"
      mb={4}
    >
      <Image
        src={recipe.image}
        alt={recipe.label}
        height="200px"
        objectFit="cover"
        width="full"
      />
      <CardBody>
        <Stack mt="6" spacing="3" alignItems="center">
          <Text>{recipe.mealType}</Text>
          <Text fontSize="lg" fontWeight="bold">
            {recipe.label}
          </Text>
          <Flex gap={1} alignItems="center" flexDir="column">
            <Flex gap={1}>
              {recipe.healthLabels.includes("Vegan") && (
                <Box>
                  <Tag key="vegan" size="md" bgColor="blue" color="white">
                    Vegan
                  </Tag>
                </Box>
              )}
              {recipe.healthLabels.includes("Vegetarian") && (
                <Box>
                  <Tag key="vegetarian" size="md" bgColor="blue" color="white">
                    Vegetarian
                  </Tag>
                </Box>
              )}
              {recipe.healthLabels.includes("Pescatarian") && (
                <Box>
                  <Tag key="pescatarian" size="md" bgColor="blue" color="white">
                    Pescatarian
                  </Tag>
                </Box>
              )}
            </Flex>
            <Flex gap={1} alignItems="center" flexDir="row">
              {recipe.dietLabels.map((dietLabels) => (
                <Box key={dietLabels}>
                  <Tag size="md" bgColor="Yellow" colorScheme="black">
                    {dietLabels}
                  </Tag>
                </Box>
              ))}
            </Flex>
            <Text>Dish: {recipe.dishType}</Text>
            <Text>Cautions</Text>
            <Flex gap={1} alignItems="center" flexDir="row">
              {recipe.cautions.map((label, index) => (
                <Tag key={index} size="md" bgColor="red.200" color="grey.200">
                  {label}
                </Tag>
              ))}
            </Flex>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default RecipeListPage;
