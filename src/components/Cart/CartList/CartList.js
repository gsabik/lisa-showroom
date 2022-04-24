import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { HStack, Image, Text, Button, Icon } from "@chakra-ui/react"
import { FaTrashAlt } from "react-icons/fa"

const CartList = () => {
    const {cart, cleanItem} = useContext(CartContext);

    return (
        cart.map((item) => (
            <HStack key={item.id} w="full" justifyContent="space-around" borderBottom="1px" borderColor="gray.300">
                <HStack w="50%" justifyContent="space-around">
                    <Button variant="ghost" onClick={() => cleanItem(item.id)}><Icon as={FaTrashAlt}></Icon></Button>
                    <Image src={item.img} w="10rem"></Image>
                    <Text>{item.brand} {item.model}</Text>
                </HStack>
                <Text w="25%" textAlign="center">{item.count}</Text>
                <Text w="25%" textAlign="center">${item.price * item.count},00</Text>
            </HStack>
        ))
    )
}

export default CartList