import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { Container, Flex, Center, HStack, VStack, Image, Heading, Text, Button, Icon } from "@chakra-ui/react"
import { FaTrashAlt } from "react-icons/fa"

const Cart = () => {
    const {cart, totalPriceCart, cleanCart, cleanItem} = useContext(CartContext);

    if (cart.length === 0) {
        return(
            <Center h="100vh">
                <VStack>
                    <Heading p={4}>You cart is empty. Go to home to add products!</Heading>
                    <Link to="/"><Button>Home</Button></Link>
                </VStack>
            </Center>
        )
    }

    return (
        <Container h={{lg:"100vh"}} maxW="container.xl" py={10}>
            <Flex justifyContent="center">
                <Heading pb={6}>You cart</Heading>
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
                <Link to="/"><Button>View more products</Button></Link>
                <Link to="/checkout"><Button bg="blackAlpha.900" color="whiteAlpha.900" _hover={{bg:"blackAlpha.900", color:"white"}}>Checkout</Button></Link>
                <Text fontSize="lg" fontWeight="500">Total: ${totalPriceCart()},00</Text>
            </HStack>
        </Container>
    )
}

export default Cart