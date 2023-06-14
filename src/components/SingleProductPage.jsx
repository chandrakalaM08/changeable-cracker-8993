import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";

const SingleProductPage = () => {
  return (
    <Box maxW="400px" m="auto" p={4}>
      <Image
        src="product-image.jpg"
        alt="Product Image"
        borderRadius="md"
        mb={4}
      />
      <Heading as="h2" size="lg" mb={2}>
        Product Title
      </Heading>
      <Text fontSize="md" mb={4}>
        Product Description
      </Text>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        $49.99
      </Text>
      <Button colorScheme="blue" size="lg">
        Add to Cart
      </Button>
    </Box>
  );
};

export default SingleProductPage;