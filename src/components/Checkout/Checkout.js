import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Container, Center, Flex, VStack, Heading, Text, FormControl, FormLabel, Input, Button, Checkbox } from "@chakra-ui/react"
import { Link } from "react-router-dom";

const Checkout = () => {
    const {cart, totalPriceCart, cleanCart} = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);

    const sendOrder = () => {
        const order = {
            buyer: values,
            items: cart,
            date: Timestamp.fromDate(new Date()),
            total: totalPriceCart()
        }

        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
            .then((doc) => {
                setOrderId(doc.id);
                cleanCart();
            })
    }

    const [values, setValues] = useState({
        name: "",
        email: "",
        phone:""
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        sendOrder();
    }

    if (orderId) {
        return (
            <Center h="75vh">
                <VStack spacing={4}>
                    <Heading>Thanks for your purchase {values.name}!</Heading>
                    <Text fontSize="xl">The ID of your purchase is: {orderId}.</Text>
                    <Link to="/"><Button>Home</Button></Link>
                </VStack>
            </Center>
        )
    }

    return ( 
        <Container maxW="container.xl" py={10}>
            <Flex justifyContent="center">
                <Heading py={6}>Checkout</Heading>
            </Flex>
            
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    <FormControl isRequired>
                        <FormLabel>First name</FormLabel>
                        <Input
                            type="text"
                            placeholder="First name"
                            value={values.name}
                            onChange={handleInputChange}
                            name="name"
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Email adress</FormLabel>
                        <Input
                            type="email"
                            placeholder="Email adress"
                            value={values.email}
                            onChange={handleInputChange}
                            name="email"
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Phone number</FormLabel>
                        <Input
                            type="tel"
                            placeholder="Phone number"
                            value={values.phone}
                            onChange={handleInputChange}
                            name="phone"
                        />
                    </FormControl>
                    <Checkbox required>I understand that once the purchase is completed, I have a 30-day return period in case of regret of purchase or manufacturing defects.</Checkbox>
                    <Button type="submit">Submit</Button>
                </VStack>
            </form>
        </Container>
    )
}

export default Checkout