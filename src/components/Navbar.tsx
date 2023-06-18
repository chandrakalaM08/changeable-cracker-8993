import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Container,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

import { useNavigate} from "react-router-dom"

import logo from "../assets/logo.jpg"
import { DeskTop } from './DeskTop';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

    const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate("/")
  };

  
  return (
    <div style={{ position: "sticky",
      zIndex: "5",
    top:"0",
      width: "100%",
    background:"white"}}>
       
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
         >
        <Flex
          background={"white"}
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'center' }}>
         <img src={logo} alt='logo' width={130} style={{marginTop:"-15px" , marginLeft:"70px"}} onClick={handleLogoClick} /> 
          <Flex display={{ base: 'none', md: 'flex' }} ml={10} w={"100%"}>
             <DesktopNav />  
       
            <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
     >
              
          
        </Stack>
          </Flex>
               <DeskTop/>
        </Flex>
<hr/>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </div>
   
  );
}

const DesktopNav = () => {

  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('pink.400', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
      <Flex align={'start'} style={{background : "white" , width:"full"}}>
        <Stack direction={'row'} spacing={4} width={"100%"}>
          
          {NAV_ITEMS.map((navItem) => (
        
        <Box key={navItem.label} style={{background : "white"}}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                    p={6}
                href={navItem.href}
                fontSize={'md'}
                fontWeight={600}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                          minW={'3xl'}
                          alignContent={"start"}
               >
                <Stack marginRight={300}>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
          
        </Stack>
    </Flex>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} justify={'center'} style={{background:"white"}}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'center'}
          align={'flex-start'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'BestSellers',
    href: '/products',
    },
  {
    label: 'Men',
     href: '/products?gender=men',
    children: [
    {
        label: 'T-Shirt',
        href: '#',
      },
      {
        label: 'Jeans',
        href: '#',
        },
      {
        label: 'Shirts',
        href: '#',
        },
       {
        label: 'Sweaters',
        href: '#',
      }
    ],
  },
  {
    label: 'Women',
     href: '/products?gender=women',
    children: [
      {
        label: 'T-Shirt',
        href: '#',
      },
      {
        label: 'Jeans',
        href: '#',
        },
      {
        label: 'Dresses',
        href: '#',
      },
    ],
  },
  {
    label: 'Beauty',
    href: '/products?categories=beautycare',
  },
  
  {
    label: 'Sale',
    href:"/products",
    children: [
    {
        label: 'T-Shirt',
        href: '#',
      },
      {
        label: 'Jeans',
        href: '#',
        },
      {
        label: 'Shirts',
        href: '#',
        },
       {
        label: 'Sweaters',
        href: '#',
        },
           {
        label: 'Dresses',
        href: '#',
      },
    ]
  }
];




