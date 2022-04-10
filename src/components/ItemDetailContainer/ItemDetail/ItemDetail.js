import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { VStack, Image, Text, Heading, HStack, Button } from "@chakra-ui/react"
import ItemCount from "./ItemCount/ItemCount"
import { Link } from "react-router-dom";

const ItemDetail = ({id, brand, model, color, price, img, description, stock}) => {
    const [count, setCount] = useState(1);
    const {cart, addToCart, isInCart} = useContext(CartContext);
    
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
    }

    return (
        <>
            <VStack w="full" h="full" p={10} spacing={10} alignItems="center">
                <Image src={img}></Image>
            </VStack>
            <VStack w="full" h="full"p={10} spacing={10} alignItems="center">
                <Heading>{brand} {model}</Heading>
                <Text fontSize="xl" lineHeight={10}>{description}</Text>
                <Text fontSize="lg">{color}</Text>
                <Text fontSize="lg" fontWeight="500">${price},00</Text>
                {
                    isInCart(id)
                    ?
                    <HStack>
                        <Link to="/"><Button colorScheme="blackAlpha" color="blackAlpha" variant="outline">View more products</Button></Link>
                        <Link to="/cart"><Button colorScheme="blackAlpha" bgColor="blackAlpha.900" color="white" _hover={{ bg:"blackAlpha" }}>Go to cart</Button></Link>
                    </HStack>
                    :
                    <ItemCount stock={stock} count={count} setCount={setCount} handleAdd={handleAdd}/>
                }
            </VStack>
        </>
    )
}

export default ItemDetail