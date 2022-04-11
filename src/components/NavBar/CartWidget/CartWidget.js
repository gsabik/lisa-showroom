import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Text, Icon, Flex } from "@chakra-ui/react"
import { FaShoppingCart } from "react-icons/fa"

const CartWidget = () => {
    const {countCart} = useContext(CartContext)

    return (
        <Flex pt={2}>
            <Icon as={FaShoppingCart} w={6} h={6}></Icon>
            <Text px={2}>{countCart()}</Text>
        </Flex>
    )
}

export default CartWidget