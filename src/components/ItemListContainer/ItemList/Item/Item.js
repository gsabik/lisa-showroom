import { Button, Flex, Image, Text, VStack } from "@chakra-ui/react"

const Item = ({product}) => {
    return (
        <Flex w="100%" flexDirection="column" boxShadow="xl" p={6}>
            <Image 
                src={product.img}
            ></Image>
            <VStack py={4}>
                <Text fontSize="xl" fontWeight="700">{product.brand + " " + product.model}</Text>
                <Text>{product.color}</Text>
                <Button>See details</Button>
            </VStack>
        </Flex>
    )
}

export default Item