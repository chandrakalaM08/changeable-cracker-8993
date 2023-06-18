import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
  Text,
    Image,
  useColorModeValue,
    useToast
  } from '@chakra-ui/react';
  

  import loginImg from "../assets/login.png"
import { NavLink } from 'react-router-dom';

import { LoginType } from '../redux/types';
import { useNavigate,useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { login } from '../redux/AuthReducer/action';
import { useEffect, useRef, useState } from 'react';
 

export default function LoginPage() {
    const navigate = useNavigate()
  const dispatch: Dispatch<any> = useDispatch()
  
    const location = useLocation()
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const toast = useToast()
  const toastIdRef = useRef<string | number | undefined>();
  const {loginToken, isAuth, errorMsg} = useSelector((store:any)=>store.AuthReducer)
  const [loginData, setLoginData] = useState<LoginType>({
    email : '', 
    password : ''
  })

  const [user , setUser] = useState<string>("")

  const handleLogin = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      return toast({
        title: 'Failed!!',
        description: "Please fill all input fields.",
        status: 'error',
        position: 'top',
        duration: 4000,
        isClosable: true,
      })
    }

    dispatch(login(loginData))
    // localStorage.setItem("user", JSON.stringify())
  }

  useEffect(() => {
  
    if(loginToken){
      toastIdRef.current = toast({
        title: 'Welcome back👍',
        description: 'User logged in successfully',
        status: 'success',
        position: 'top',
        duration: 4000,
        isClosable: true,
      }) as string;
      localStorage.setItem("loggedInUser", loginData.email)
       setTimeout(()=>{
         navigate(location.state, { replace: true })
       },500)
    }
  
    
    return () => {
     
      if (toastIdRef.current) {
        toast.close(toastIdRef.current);
      }
    };
  }, [loginToken])

  useEffect(()=>{
    if(errorMsg === "Firebase: Error (auth/wrong-password)."){
      toastIdRef.current = toast({
        title: 'Login Failed!!',
        description: 'Wrong Password, Please try again.',
        status: 'error',
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
   },[errorMsg,toast])


  useEffect(()=>{
    if(errorMsg === "Firebase: Error (auth/user-not-found)."){
      toastIdRef.current = toast({
        title: 'Login Failed!!',
        description: 'User Not found! Please Signup First',
        status: 'error',
        position: 'top',
        duration: 4000,
        isClosable: true,
      }) as string;

      setTimeout(() => {
        navigate('/signup');
      }, 1000)
    }
    return () => {
     
      if (toastIdRef.current) {
        toast.close(toastIdRef.current);
      }
    };
   },[errorMsg])
  
    return (
      <Flex
        minH={'45vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
       
          <Image src={loginImg} width={ "38%"} />
       
        <Stack spacing={8} mx={'auto'} maxW={'xl'} py={12} px={6}>
          <Stack align={'left'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <form onSubmit={handleLogin}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input value={loginData.email} onChange={(e) => setLoginData(prev => ({...prev, email : e.target.value}))} borderRadius={'none'} type="email" placeholder='Enter your email' />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input value={loginData.password} onChange={(e) => setLoginData(prev => ({...prev, password : e.target.value}))} borderRadius={'none'} type="password" placeholder='Enter your password' />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    m={'30px 0 -10px 0'}
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Heading color={'gray.600'} fontWeight={'600'} size={'sm'}>New here?</Heading>
                    <Link href={'/signup'} style={{ fontWeight: '600', color: '#499de2' }}>Signup</Link>
                  </Stack>
                  <Button
                    borderRadius={'5px'}
                    type='submit'
                    bg={'pink.500'}
                    color={'white'}
                    _hover={{
                      bg: 'orange',
                    }}>
                    Sign in
                  </Button>
                </Stack>
              </form>
            </Stack>
            <Stack  p={5}
                    align={'center'}
                style={{paddingTop:"40px"}}>
                  <Text align={'center'}>
                    
                    New to Clothy?
                    <NavLink to="/signup"><Link color={'orange.800'} style={{paddingLeft:"10px"}}>Create Account</Link></NavLink>
                  </Text>
                </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }

