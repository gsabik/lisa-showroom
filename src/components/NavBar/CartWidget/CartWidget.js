import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { Flex, Text, Icon} from "@chakra-ui/react"
import { FaShoppingCart } from "react-icons/fa"

const CartWidget = () => {
    const {cart, countCart} = useContext(CartContext);

    if (cart.length === 0) {
        return
    }

    return (
        <Flex>
            <Icon as={FaShoppingCart} w={6} h={6}></Icon>
            <Text px={2}>{countCart()}</Text>
        </Flex>
    )
}

export default CartWidget