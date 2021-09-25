import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react"

function Message({ status, children }) {
    return (
        <Alert status={status}>
            {children}
        </Alert>
    )
}

export default Message
