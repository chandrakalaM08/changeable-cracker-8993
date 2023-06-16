import React from 'react'
import { Link } from 'react-router-dom'
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  border,
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';


interface RatingProps {
  rating: number;
  numReviews: number;
}

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  );
}


const ProductCard = ({ id, title, brand, price, images, rating, count }: any) => {
  
function truncateWords(title : string) {
  const words = title.split('');

  if (words.length > 2) {
    const truncatedWords = words.slice(0, 20);
    return truncatedWords.join('') + '...';
  }

  return title;
}



  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="left" >
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        border={"1px solid gray"}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
      
        <Image
          src={images.image1}
          alt={`Picture of ${title}`}
          roundedTop="md"
          width={200}
        />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
              <Badge rounded="full" px="8" fontSize="0.6em" colorScheme="red" textAlign={'left'}>
             {count} left
              </Badge>
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {truncateWords(title)}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'0.6em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={rating} numReviews={count*3} />
            <Box fontSize="md" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="sm">
                ₹
              </Box>
              {price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

export default ProductCard


