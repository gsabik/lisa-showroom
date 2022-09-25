import { Link } from "react-router-dom";
import { 
    Center, 
    VStack, 
    Heading, 
    Text, 
    Button 
} from "@chakra-ui/react";

const CheckoutSucces = ({ orderId }) => {
    return (
        <Center h="90vh">
            <VStack spacing={6}>
                <Heading>Thanks for your purchase!</Heading>
                <Text fontSize="xl">The ID of your purchase is: {orderId}.</Text>
                <Link to="/"><Button>Home</Button></Link>
            </VStack>
        </Center>
    );
}

export default CheckoutSucces