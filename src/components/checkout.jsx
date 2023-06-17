import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  Image
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const Checkout=()=>{




  return (
    <Box bg="gray.100" marginBottom={-10}>
     
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        py={8}
        marginTop={120}
      >
        <Container maxW="8xl">
          <Stack spacing={8} p={6} bg="white" rounded="lg" boxShadow="lg">
              <Stack spacing={4} align="center">
                <Heading as="h2" size="lg">
                  Thank you for your order.
                </Heading>
                <Text variant="subtitle1" textAlign="center" fontSize="lg">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Text>
                <Image src={"https://www.creativefabrica.com/wp-content/uploads/2021/12/20/Delivery-Truck-Icon-logo-Graphics-21991701-1-1-580x387.jpg"} w={250} />
              </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Checkout;