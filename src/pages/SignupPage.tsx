import React, { useEffect, useState, useRef } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Image,
  Button,
  Heading,
  Link,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
 import { SignupInit, Signuptype } from '../redux/types';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
 import { signup } from '../redux/AuthReducer/action';
import { Dispatch } from 'redux';

import signupPicture from "../assets/signup.avif"

const Signup = () => {
  const toast = useToast();
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();
  // const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const toastIdRef = useRef<string | number | undefined>();
  const { isError, tokenId , signUpAuth} = useSelector((store: any) => store.AuthReducer);
  const [formData, setFormData] = useState<Signuptype>({
    name: '',
    email: '',
    password: ''
  })

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      return toast({
        title: 'Failed!!',
        description: "Please fill all input fields.",
        status: 'error',
        position: 'top',
        duration: 4000,
        isClosable: true,
      })
    }

    if (formData.password.length < 6) {
      return toast({
        title: 'Failed!!',
        description: "Password must be of at least six characters.",
        status: 'error',
        position: 'top',
        duration: 4000,
        isClosable: true,
      })
    }

    // if (!formData.password.split('').includes('@') || !formData.password.split('').includes('#') || !formData.password.split('').includes('%') || !formData.password.split('').includes('&')) {
    //   return toast({
    //     title: 'Warning!!',
    //     description: "Password must contain a special charater.",
    //     status: 'warning',
    //     position: 'top',
    //     duration: 4000,
    //     isClosable: true,
    //   })
    // }

    dispatch(signup(formData));
    setEmail(formData.email)
    setName(formData.name)
    setFormData({name: '', email: '', password: ''});
  }

  console.log(signUpAuth, "checking signupAuth inside handlesubmit")


  useEffect(() => {
    const emailId = email
    console.log("here calling inside useeffect")
    if(tokenId){
      toastIdRef.current = toast({
        title: 'Success',
        description: 'User Registered Successful',
        status: 'success',
        position: 'top',
        duration: 4000,
        isClosable: true,
      }) as string;

      let userData = JSON.parse(localStorage.getItem("users") || "[]")
      userData.push({ [email]: name })
      localStorage.setItem("users", JSON.stringify(userData))
        navigate('/login');
    }
    
    return () => {
     
      if (toastIdRef.current) {
        toast.close(toastIdRef.current);
      }
    };
  }, [tokenId])


useEffect(()=>{
    if(isError){
      toastIdRef.current = toast({
        title: 'User Already registered.',
        description: 'Please login to continue!!',
        status: 'warning',
        position: 'top',
        duration: 4000,
        isClosable: true,
      }) as string;
    }
    return () => {
     
      if (toastIdRef.current) {
        toast.close(toastIdRef.current);
      }
    };
   },[isError])


  return (
    <Flex
      minH={'70vh'}
      align={'center'}
      justify={'space-around'}
      width={"100%"}
      bg={useColorModeValue('gray.50', 'gray.800')}
    marginBottom={-10}>

      <Flex gap={'20px'} direction={{ base: 'column-reverse', sm: 'column-reverse', md: 'column-reverse', lg: 'row', xl: 'row', '2xl': 'row' }} w={'90%'} m={'auto'} justifyContent={'space-around'}>
       
        <Box w={{ base: '90%', sm: '90%', md: '90%', lg: '45%', xl: '45%', '2xl': '45%' }} m={'auto'}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Let's Join Clothy.</Heading>
          </Stack>
          <Box
            mt={'10px'}
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <form onSubmit={handleSubmit}>
                <FormControl id="name">
                  <FormLabel>Name <span style={{ color: 'red' }}>*</span></FormLabel>
                  <Input value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} borderRadius={'none'} type="text" placeholder='Name' />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email address <span style={{ color: 'red' }}>*</span></FormLabel>
                  <Input value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} borderRadius={'none'} type="email" placeholder='E-mail' />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password <span style={{ color: 'red' }}>*</span></FormLabel>
                  <Input value={formData.password} onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))} borderRadius={'none'} type="password" placeholder='Create Password' />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    m={'30px 0 -10px 0'}
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Heading color={'gray.600'} fontWeight={'600'} size={'sm'}>Already have an account?
                      <br/><Link href={'/login'} style={{ fontWeight: '600', color: 'orange' }}>So Let's Login</Link></Heading>
                    
                  </Stack>
                  <Button
                    borderRadius={'5px'}
                    type='submit'
                    bg={'#d7b256'}
                    color={'white'}
                    _hover={{
                      bg: 'pink',
                    }}>
                    Sign up
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Box>
         <Box w={{ base: '90%', sm: '90%', md: '90%', lg: '45%', xl: '45%', '2xl': '45%' }} m={'auto'}>
          <Image w={'100%'} src={signupPicture} alt='signup-img' />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Signup;