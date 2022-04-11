import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { Container, Flex, HStack, Image, Heading, Text, Button, Icon, Center, VStack } from "@chakra-ui/react"
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
    <Container maxW="container.xl">
        <Flex justifyContent="center">
            <Heading py={6}>Cart</Heading>
        </Flex>
        {
            cart.map((item) => (
                    <HStack key={item.id} justifyContent="space-around" borderBottom="1px" borderColor="gray.300">
                        <Button variant="ghost" onClick={() => cleanItem(item.id)}><Icon as={FaTrashAlt}></Icon></Button>
                        <Image src={item.img} w="10rem"></Image>
                        <Text>{item.brand} {item.model}</Text>
                        <Text>{item.count}</Text>
                        <Text>${item.price * item.count},00</Text>
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