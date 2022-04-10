import { Text, Icon, Flex } from "@chakra-ui/react"
import { FaShoppingCart } from "react-icons/fa"

const CartWidget = () => {
    return (
        <Flex pt={2}>
            <Icon as={FaShoppingCart} w={6} h={6}></Icon>
            <Text px={2}>0</Text>
        </Flex>
    )
}

export default CartWidget