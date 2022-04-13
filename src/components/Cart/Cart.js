import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { Container, Flex, HStack, Image, Heading, Text, Button, Icon, Center, VStack, Divider } from "@chakra-ui/react"
import { FaTrashAlt } from "react-icons/fa"

const Cart = () => {
    const {cart, totalPriceCart, cleanCart, cleanItem} = useContext(CartContext);

    if (cart.length === 0) {
        return(
            <Center h="75vh">
                <VStack>
                    <Heading pb={4}>You cart is empty. Go to home to add products!</Heading>
                    <Link to="/"><Button>Home</Button></Link>
                </VStack>
            </Center>
        )
    }

    return (
        <Container maxW="container.xl" py={10}>
            <Flex justifyContent="center">
                <Heading pb={6}>Cart</Heading>
            </Flex>
            <HStack w="full" justifyContent="space-around" pb={6}>
                <Text fontSize="lg" fontWeight="500" w="50%" textAlign="center">Product</Text>
                <Text fontSize="lg" fontWeight="500" w="25%" textAlign="center">Quantity</Text>
                <Text fontSize="lg" fontWeight="500" w="25%" textAlign="center">Price</Text>
            </HStack>
            {
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
            }
            <HStack justifyContent="space-around" pt={6}>
                <Button onClick={cleanCart}>Clean</Button>
                <Link to="/checkout"><Button>Checkout</Button></Link>
                <Text fontSize="lg" fontWeight="500">Total: ${totalPriceCart()},00</Text>
            </HStack>
        </Container>
    )
}

export default Cart