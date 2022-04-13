import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import { VStack, Image, Text, Heading, HStack, Button, Center, Divider } from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount"
import BackButton from "../../BackButton/BackButton";

const ItemDetail = ({id, brand, model, color, price, img, description, stock}) => {
    const [count, setCount] = useState(1);
    const {addToCart, isInCart} = useContext(CartContext);
    const toastAdd = useToast();
    
    const handleAdd = () => {
        if(!isInCart(id)) {
            const addItem = {
                id,
                brand, 
                model,
                price, 
                img,
                count
            }
            addToCart(addItem);
        }
        toastAdd({
            position:"bottom",
            description: "Added product",
            status: "success",
            duration: 3000,
        })
    }

    return (
        <Center h="100vh" py={20}>
            <VStack w="full" h="full" p={10} spacing={10} justifyContent="center">
                <Image src={img} h="75%"></Image>
            </VStack>
            <VStack w="full" h="full" p={10} spacing={10} justifyContent="center">
                <Heading>{brand} {model}</Heading>
                <Text fontSize="xl" lineHeight={10}>{description}</Text>
                <HStack>
                    <Text fontSize="lg">{color}</Text>
                    <Divider borderColor="black" orientation="vertical" h="20px"/>
                    <Text fontSize="lg" fontWeight="500">${price},00</Text>
                </HStack>
                <ItemCount stock={stock} count={count} setCount={setCount} handleAdd={handleAdd}/>
                    {
                        isInCart(id)
                        &&
                        <HStack > 
                            <Link to="/"><Button bg="whiteAlpha.900">View more products</Button></Link>
                            <Link to="/cart"><Button bg="blackAlpha.900" color="whiteAlpha.900" _hover={{bg:"blackAlpha.900", color:"white"}}>Go to cart</Button></Link>
                        </HStack>
                    }
                <Text fontWeight="500">All methods of pay.</Text>
            </VStack>
        </Center>
    )
}

export default ItemDetail