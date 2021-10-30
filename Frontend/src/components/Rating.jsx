import React from 'react'
// import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { Box } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import products from '../products';

function Rating(value, text, color) {
    return (
        <>
            <Box d="flex" mt="2" alignItems="center">
                {Array(5)
                    .fill("")
                    .map((_, i) => (
                        <StarIcon
                            key={i}
                            color={i < products.rating ? "teal.500" : "gray.300"}
                        />
                    ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {products.numReviews}
                </Box>
            </Box>

        </>
    )
}

export default Rating
