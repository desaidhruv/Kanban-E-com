import React from 'react'
import { 
    VStack,
    Center,
    HStack,

} from '@chakra-ui/react';

function FormContainer({children}) {
    return (
        <>
            <HStack as={Center} direction={['column', 'column', 'column', 'row']} mt="10px">
                <VStack>
                    {children}
                </VStack>
            </HStack>
        </>
    )
}

export default FormContainer
