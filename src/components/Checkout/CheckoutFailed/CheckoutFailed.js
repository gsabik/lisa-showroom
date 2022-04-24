import { Center, VStack, Heading, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const CheckoutFailed = () => {
    return (
        <Center h="90vh">
            <VStack spacing={6}>
                <Heading p={4}>Your cart is empty, there is nothing to pay. Go home to add products!</Heading>
                <Link to="/"><Button>Home</Button></Link>
            </VStack>
        </Center>
    )
}

export default CheckoutFailed