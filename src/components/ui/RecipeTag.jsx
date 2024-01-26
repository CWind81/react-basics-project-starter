import { Flex, Tag } from "@chakra-ui/react";

export const RecipeHealthLabels = ({ healthLabels }) => {
  const healthLabelsTags = healthLabels.map((label) => (
    <Tag key={label} size="md" bgColor="blue" colorScheme="red">
      {label}
    </Tag>
  ));

  return <Flex gap={2}>{healthLabelsTags}</Flex>;
};
