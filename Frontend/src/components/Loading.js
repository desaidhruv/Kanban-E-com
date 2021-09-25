import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText, Stack, SimpleGrid } from "@chakra-ui/react"

function Loading() {
    return (
        <SimpleGrid pt="20px" spacing="100px" columns={[1, 2, 3, 4]}>

            <Stack w='300px' h="250px">
                <Skeleton height="180px" borderRadius="20px" />
                <Skeleton height="35px" />
                <Skeleton height="35px" />
            </Stack>
            <Stack w='300px' h="250px">
                <Skeleton height="180px" borderRadius="20px" />
                <Skeleton height="35px" />
                <Skeleton height="35px" />
            </Stack>
            <Stack w='300px' h="250px">
                <Skeleton height="180px" borderRadius="20px" />
                <Skeleton height="35px" />
                <Skeleton height="35px" />
            </Stack>
        </SimpleGrid>
    )
}

export default Loading
