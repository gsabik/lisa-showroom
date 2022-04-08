import { VStack, Image, Text, Heading } from "@chakra-ui/react"

const ItemDetail = ({id, brand, model, color, price, img, description, stock}) => {
    return (
        <>
            <VStack w="full" h="full" p={10} spacing={10} alignItems="center">
                <Image src={img}></Image>
            </VStack>
            <VStack w="full" h="full" bg="gray.50" p={10} spacing={10} alignItems="center">
                <Heading>{brand + " " + model}</Heading>
                <Text fontSize="xl" lineHeight={10}>{description}</Text>
                <Text fontSize="lg">{color}</Text>
                <Text fontSize="lg" fontWeight="500">${price},00</Text>
                <Text></Text>
            </VStack>
        </>
    )
}

export default ItemDetail