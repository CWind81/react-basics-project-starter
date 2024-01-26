import {
  Flex,
  Box,
  Button,
  Heading,
  Image,
  Text,
  Tag,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const RecipePage = ({ recipe, onGoBack }) => {
  return (
    <Flex direction="column" align="center" p={4} bgColor="yellow.300">
      <Button onClick={onGoBack} mb={4}>
        Go Back
      </Button>
      <Box
        maxW="5xl"
        borderWidth="1px"
        minH="100vh"
        borderRadius="md"
        cursor="pointer"
        transition="transform 0.2s"
        _hover={{ transform: "scale(1.05)" }}
        bg="purple.100"
        mb={4}
      >
        <Image
          src={recipe.image}
          alt={recipe.label}
          h="400px"
          w="full"
          objectFit="cover"
        />
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem ml={6} mt={5} colSpan={2}>
            <Text>Meal Type: {recipe.mealType}</Text>
          </GridItem>
          <GridItem ml={6} colSpan={2}>
            <Heading fontSize={25}>{recipe.label}</Heading>
          </GridItem>
          <GridItem ml={6}>
            <Text>Total Cooking Time: {recipe.totalTime}</Text>
            <Text mb={6}>Servings: {recipe.yield}</Text>
            <Text fontFamily="fantasy">Ingredients:</Text>
            <Flex gap={1} alignItems="left" flexDir="column">
              {recipe.ingredientLines.map((Ingredients) => (
                <Tag
                  key={Ingredients}
                  fontFamily="Cursive"
                  size="md"
                  variant="sloid"
                >
                  {" "}
                  {Ingredients}
                </Tag>
              ))}
            </Flex>
          </GridItem>
          <GridItem>
            <Text>Health Labels:</Text>
            {recipe.healthLabels.map((label, index) => (
              <Tag
                key={index}
                size="md"
                variant="solid"
                bgColor="purple.300"
                color="red"
                mr={2}
                mb={2}
              >
                {" "}
                {label}
              </Tag>
            ))}
            <Text>Diet Label:</Text>
            {recipe.dietLabels.map((label, index) => (
              <Tag
                key={index}
                size="md"
                bgColor="green.200"
                color="red.200"
                mr={2}
                mb={2}
              >
                {label}
              </Tag>
            ))}
            <Text>Cautions:</Text>
            {recipe.cautions.map((Cautions) => (
              <Tag
                key={Cautions}
                size="md"
                bgColor="red.200"
                color="black"
                mr={2}
              >
                {Cautions}
              </Tag>
            ))}
            <Text>Total Nutrients:</Text>
            <Text
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  width: "30%",
                  marginBottom: "20px",
                }}
              >
                <div style={{ fontsize: "20px" }}>
                  {recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(0)} kcal
                </div>
                <div>Energy</div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  width: "30%",
                  marginBottom: "20px",
                }}
              >
                <div style={{ fontsize: "20px" }}>
                  {recipe.totalNutrients.PROCNT.quantity.toFixed(0)}g
                </div>
                <div>Protien</div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  width: "30%",
                  marginBottom: "20px",
                }}
              >
                <div style={{ fontsize: "20px" }}>
                  {recipe.totalNutrients.FAT.quantity.toFixed(0)}g
                </div>
                <div>Fat</div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  width: "30%",
                  marginBottom: "20px",
                }}
              >
                <div style={{ fontsize: "20px" }}>
                  {recipe.totalNutrients.CHOCDF.quantity.toFixed(0)}g
                </div>
                <div>Carbs</div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  width: "30%",
                  marginBottom: "20px",
                }}
              >
                <div style={{ fontsize: "20px" }}>
                  {recipe.totalNutrients.CHOLE.quantity.toFixed(0)}mg
                </div>
                <div>Cholesterol</div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  width: "30%",
                  marginBottom: "20px",
                }}
              >
                <div style={{ fontsize: "20px" }}>
                  {recipe.totalNutrients.NA.quantity.toFixed(0)}mg
                </div>
                <div>Sodium</div>
              </div>
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
};

export default RecipePage;
