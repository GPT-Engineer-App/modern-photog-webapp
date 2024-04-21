import React from "react";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

function Gallery() {
  return (
    <SimpleGrid columns={3} spacing={10}>
      {}
      <Box boxShadow="lg" _hover={{ boxShadow: "xl" }}>
        <Image src="https://via.placeholder.com/150" alt="Gallery Image 1" />
        <Text p={2}>Image 1</Text>
      </Box>
      <Box boxShadow="lg" _hover={{ boxShadow: "xl" }}>
        <Image src="https://via.placeholder.com/150" alt="Gallery Image 2" />
        <Text p={2}>Image 2</Text>
      </Box>
      <Box boxShadow="lg" _hover={{ boxShadow: "xl" }}>
        <Image src="https://via.placeholder.com/150" alt="Gallery Image 3" />
        <Text p={2}>Image 3</Text>
      </Box>
    </SimpleGrid>
  );
}

export default Gallery;
