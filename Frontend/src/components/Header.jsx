import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Spacer,
    Button,
    Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {Link as ReLink} from 'react-router-dom';



export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                {/* <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            <Link href="/">Logo</Link>
                            <Link href="/cart">Cart</Link>
                            <Link href="/login">Login</Link>
                        </HStack>
                    </HStack>
                </Flex> */}

                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <Box p="2">
                        <Heading to="/" as={ReLink} size="md">Logo</Heading>
                    </Box>
                    <Spacer />
                    <Box display={{ base: 'none', md: 'flex' }}>
                        <Button colorScheme="green" mr="4">
                            Sign Up
                        </Button>
                        <Button as={ReLink} colorScheme="green" to="/login">Log in</Button>
                    </Box>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                        <Button colorScheme="green">
                            Sign Up
                        </Button>
                        <Button colorScheme="green">Log in</Button>
                        </Stack>
                    </Box>
                ) : null}
            </Box>

        </>
    );
}