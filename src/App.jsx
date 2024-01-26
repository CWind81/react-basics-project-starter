import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import RecipeListPage from "./pages/RecipeListPage";
import RecipePage from "./pages/RecipePage";
import { data } from "./utils/data";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleGoBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <ChakraProvider>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} onGoBack={handleGoBack} />
      ) : (
        <RecipeListPage data={data} onSelectRecipe={handleRecipeSelect} />
      )}
    </ChakraProvider>
  );
};
