import { ReactNode } from 'react';

import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';


const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'8xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Text color={useColorModeValue('gray.700', 'white')} >Clothy.</Text>
                            <Text align={'left'}>Discover our wide range of stylish clothing for men, women, and kids. From casual wear to formal attire, we have it all. With fast shipping and hassle-free returns, Clothy ensures a seamless online shopping experience. Stay fashionable with Clothy today!</Text>
                        </Box>
                      
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Home</ListHeader>
                        <Link href={'#'}>Men</Link>
                        <Link href={'#'}>Women</Link>
                        <Link href={'#'}>Accessories</Link>
                        <Link href={'#'}>Winter</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Link href={'#'}>About</Link>
                        <Link href={'#'}>Community</Link>
                        <Link href={'#'}>Reviews</Link>
                        <Link href={'#'}>FAQ</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Support</ListHeader>
                        <Link href={'#'}>Help Center</Link>
                        <Link href={'#'}>Terms of Service</Link>
                        <Link href={'#'}>Legal</Link>
                        <Link href={'#'}>Privacy Policy</Link>
            
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Social</ListHeader>
                        <Link href={'#'}>Facebook</Link>
                        <Link href={'#'}>Twitter</Link>
                        <Link href={'#'}>Instagram</Link>
                        <Link href={'#'}>LinkedIn</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
              <Text fontSize={'sm'}>
                All rights reserved © 2023 Clothy 
                <br/>
                Made with ❤️
            </Text>
        </Box>
    );
}