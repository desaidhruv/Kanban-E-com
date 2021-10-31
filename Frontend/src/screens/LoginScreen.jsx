import {
    Stack,
    Center,
    Box,
    Text,
    Heading,
    Flex,
    useColorModeValue,
    FormControl,
    FormLabel,
    Input,
    Button,
    Form,
    AlertIcon,

} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading';
import Message from '../components/Message';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'


function LoginScreen({location, history}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
    return (
        <>
            {/* <Box shadow="md" w={['360px', '450px']}>
                <Text as={Center}>Login Screen</Text>
            </Box>
            <Heading>
                Sign In
            </Heading> */}
            <Flex
                minH={'75vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                    {error && <Message status="error"><AlertIcon />{error}</Message>}
                    {loading && <Loading />}
                <Stack spacing={4} px={12}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <form onSubmit={submitHandler}>

                            <Stack spacing={4} >
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input
                                        type="email"
                                        placeholder='Enter Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        type="password"
                                        placeholder='Enter Password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </FormControl>
                                <Stack spacing={10}>
                                    <Stack
                                        direction={{ base: 'column', sm: 'row' }}
                                        align={'start'}
                                        justify={'space-between'}>
                                        {/* <Link color={'blue.400'}>Forgot password?</Link> */}
                                        <Text color={'blue.400'}>
                                            New User? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>HELLOo</Link>
                                        </Text>
                                    </Stack>
                                    <Button
                                        type="submit"
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}>
                                        Sign in
                                    </Button>
                                </Stack>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
            </Flex>


        </>
    )
}

export default LoginScreen
