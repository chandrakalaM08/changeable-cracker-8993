import { Box, Button, Flex, Grid, Image, Stack, Text, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

interface Product {
  categories: string,
  description: string,
  images: {
    "image1": string,
                "image2": string,
                "image3":string,
                "image4":string
  },
  price: number,
  title: string,
  id: string,
  rating: number,
  sizes:string[],
  off_price:number,
  discount_percentage:number,
  brand:string,
  count:number
}

const SingleProductPage = () => {
  const {id}=useParams()
  console.log(id);
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const toast = useToast();

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`https://vast-red-fawn-cuff.cyclic.app/products/${id}`);
      const firstProduct = response.data;
      setProduct(firstProduct);
      // setSizes(firstProduct.sizes);
    } catch (error) {
      console.log(error);
    }
    
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      // Perform the add to cart logic
      const cartItem = {
        id: product?.id,
        title: product?.title,
        size: selectedSize,
      };
      console.log('Adding to cart:', cartItem);

      // Display a toast notification
      toast({
        title: 'Successfully Added',
        description: 'This product has been added to your cart.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Size not selected',
        description: 'Please select a size before adding to cart.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
    }
  };
  
  return (
    <div style={{ width: "100%", border: "0px solid red", margin: "auto" }}>
    <Box border={"0px solid black"} display={{base:"flex",sm:"flex",md:"none",lg:"npne"}} mt={"75px"} mb={"-60px"} width={"85%"} mx={"auto"} >
    
    </Box>
    <div style={{ width: "100%", border: "0px solid red", margin: "auto" }}>
      <Box
        mb={"4rem"}
        width={"100%"}
        margin={"auto"}
        mt={100}
        border={"0px solid black"}
      >
        <Flex
          flexDirection={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
          }}
          alignItems={"flex-start"}
          m={"auto"}
          width={{ base: "98%", sm: "80%", md: "98%", lg: "70%" }}
          border={"0px solid black"}
        >
          <Box
            w={{ base: "100%", sm: "100%", md: "100%", lg: "44%" }}
            boxShadow={
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            }
            m={"auto"}
            mt={0}
            border={"0px solid red"}
          >
            <Image
              src={product?.images.image2}
              borderRadius={20}
              m={"auto"}
              w={"100%"}
              p={"0.5rem"}
            />
          </Box>

          <Stack
            spacing={5}
            w={{ base: "100%", sm: "100%", md: "55%", lg: "55%" }}
            m="auto"
            mt={0}
            p={"0 2rem"}
            boxShadow={
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            }
            border={"0px solid green"}
          >
            <Text
              pt={"1rem"}
              textAlign={"left"}
              fontSize={"1.2rem"}
              fontWeight={500}
              color={"gray.500"}
              noOfLines={{ base: 1, sm: 1 }}
            >
              {product?.title}
            </Text>

            <Flex alignItems={"baseline"}>
            <Text
                  display={"inline-block"}
                  fontWeight={700}
                >
                  {product?.price}
                </Text>
              <Text pl={"1.2rem"} fontSize={"0.9rem"}>
                MRP{" "}
                <Text
                  display={"inline-block"}
                  textDecoration={"line-through"}
                >
                  {"₹"}{product?.off_price}
                </Text>
              </Text>
              <Text pl={"1.2rem"} fontWeight={700} color={"tomato"}>
                {product?.discount_percentage}{"%"} 
              </Text>
            </Flex>

            <Text
              fontSize={"0.9rem"}
              fontWeight={700}
              textAlign={"left"}
              color={"#3bbaa1"}
            >
              inclusive of all taxes
            </Text>

            <Box textAlign={"left"} mt={"1rem"} borderTop={"2px solid gray"}>
              <Text m={" 0.5rem 0"} fontWeight={"500"} fontSize={"1rem"}>
                Select Size
              </Text>
              <Grid
                gridTemplateColumns={{
                  base: "repeat(4,1fr)",
                  sm: "repeat(7,1fr)",
                  md: "repeat(7,1fr)",
                  lg: "repeat(10,1fr)",
                }}
                gap={"0.5rem"}
              >
                {product?.sizes.map((size, index) => (
                  <Button
                    key={index}
                    backgroundColor={
                      selectedSize === size ? 'pink.500' : '#fff'
                    }
                    color={selectedSize === size ? '#fff' : 'black'}
                    border={'1px solid gray'}
                    borderRadius={'50%'}
                    p={'1.5rem'}
                    onClick={() => handleSizeSelection(size)}
                  >
                    {size}
                  </Button>
                ))}
              </Grid>
            </Box>

            <Stack
              spacing={4}
              textAlign={"left"}
              mt={-1}
              borderTop={"2px solid gray"}
            >
              <Text m={"0.5rem 0"} fontWeight={"500"} fontSize={"1rem"}>
                Product Details
              </Text>
              <Flex
              >
                <Text color={"gray.600"} display={"inline-block"}>
                  Category : <span style={{color:"gray"}} >
                    {product?.categories}
                    </span>
                  </Text>
              </Flex>
              <Flex
              >
                <Text color={"gray.600"} display={"inline-block"}>
                  Brand : <span style={{color:"gray"}} >
                    {product?.brand}
                    
                    </span>
                </Text>
              </Flex>

              <Flex
              >
                 <Text color={"gray.600"} display={"inline-block"}>
                  Description : <span style={{color:"gray"}} >
                    {product?.description}
                    </span>
                  </Text>
              </Flex>
              <Flex
              >
                 <Text color={"gray.600"} display={"inline-block"}>
                  Rating : <span style={{color:"gray"}} >
                    {product?.rating}
                    </span>
                  </Text>
              </Flex>
              <Flex
              >
            <Text color={"gray.600"} display={"inline-block"}>
                  Review : <span style={{color:"gray"}} >
                    {product?.count}
                  </span>
                  </Text>
              </Flex>
            </Stack>
            <Box
              textAlign={"left"}
              w={"100%"}
              mt={0}
              borderTop={"2px solid gray"}
              p={"1rem"}
              display={{
                base: "inlibe-block",
                md: "inline-block",
                lg: "inline-block",
              }}
            >
              <Flex
                gap={"0.5rem"}
                justifyContent={"center"}
                mt={3}
                direction={{
                  base: "column",
                  sm: "row",
                  md: "row",
                  lg: "row",
                }}
              >
                <Button
                  _hover={{
                    backgroundColor: "white",
                    color: "pink.500",
                    outlineColor: "pink.500",
                  }}
                  borderRadius={"0.2rem"}
                  color={"#fff"}
                  backgroundColor={"pink.500"}
                  onClick={handleAddToCart}
                  fontSize={"1.2rem"}
                  fontWeight={700}
                  //border={'2px solid gray'}
                  px={2}
                >
                  Add To Bag
                </Button>
              </Flex>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </div>
  
  </div>

  )
}

export default SingleProductPage