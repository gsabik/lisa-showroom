import { collection, addDoc, Timestamp } from "firebase/firestore"
import { db } from "../../firebase/config"
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Container, Flex, VStack, Heading, FormControl, FormLabel, Input, Button, Checkbox } from "@chakra-ui/react"
import CheckoutSucces from "./CheckoutSucces/CheckoutSucces"
import CheckoutFailed from "./CheckoutFailed/CheckoutFailed"

const Checkout = () => {
    const {cart, totalPriceCart, cleanCart} = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [values, setValues] = useState({
        name: "",
        email: "",
        tel:""
    });
    
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

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        sendOrder();
    }

    if (orderId) {
        return (
            <CheckoutSucces orderId={orderId}/>
        )
    }

    if (cart.length === 0) {
        return (
        <CheckoutFailed/>
        )
    }

    return ( 
        <Container h={{lg:"100vh"}} maxW="container.xl" py={10}>
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
                            value={values.tel}
                            onChange={handleInputChange}
                            name="tel"
                        />
                    </FormControl>
                    <Checkbox required lineHeight={8}>I understand that once the purchase is completed, I have a 30-day return period in case of regret of purchase or manufacturing defects.</Checkbox>
                    <Button type="submit">Submit</Button>
                </VStack>
            </form>
        </Container>
    )
}

export default Checkout