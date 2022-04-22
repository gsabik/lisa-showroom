import { Flex, VStack, Image, Text, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Item = ({product}) => {
    return (
        <Flex w="100%" flexDirection="column" boxShadow="xl" p={6} _hover={{boxShadow:"2xl"}}>
            <Link to={`/item/${product.id}`}>
                <Image 
                    src={product.img}
                    bg={"gray.50"}
                    w={{base:"100%"}}
                    p={4}
                ></Image>
            </Link>
            <VStack py={4}>
                <Text fontSize="xl" fontWeight="700">{product.brand} {product.model}</Text>
                <Text fontSize="lg">${product.price},00</Text>
                <Link to={`/item/${product.id}`}><Button>See details</Button></Link>
            </VStack>
        </Flex>
    )
}

export default Item