import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { 
    Flex, 
    Center, 
    HStack, 
    VStack, 
    Image, 
    Heading, 
    Text, 
    Button, 
    Divider 
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, brand, model, color, price, img, description, stock }) => {
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
            position:"bottom-right",
            description: "Added product",
            status: "success",
            duration: 3000,
        });
    }
    
    return (
        <>
            <Flex justifyContent="center">
                <Heading pb={6}>{brand} {model}</Heading>
            </Flex>
            <Center 
				display={{md:"flex"}}
				py={{
					base: 0, 
					md: 10, 
					lg: 15
				}} 
			>
                <VStack 
                    bg="gray.50"
                    h="full"
                    justifyContent="center" 
                    p={10}
                    spacing={10} 
                    w="full"
                >
                    <Image src={img}/>
                </VStack>
                <VStack
                    h="full"
                    justifyContent="stretch"
                    p={10}
                    spacing={10} 
                    w="full"
                >
                    <Text fontSize="lg" fontWeight="500">ID: {id}</Text>
                    <Text fontSize="xl" lineHeight={10}>{description}</Text>
                    <HStack>
                        <Text fontSize="lg">{color}</Text>
                        <Divider
                            borderColor="black"
                            h="20px"
                            orientation="vertical" 
                        />
                        <Text fontSize="lg" fontWeight="500">${price},00</Text>
                        <Divider
                            borderColor="black"
                            h="20px"
                            orientation="vertical"
                        />
                        <Text fontSize="lg">Stock: {stock}</Text>
                    </HStack>
                        {
                            isInCart(id)
                            ?
                            <HStack spacing={6}> 
                                <Link to="/"><Button>View more products</Button></Link>
                                <Link to="/cart">
                                    <Button
                                        bg="blackAlpha.900"
                                        color="whiteAlpha.900" 
                                        _hover={{bg:"blackAlpha.900", color:"white"}}
                                    >Go to cart</Button>
                                </Link>
                            </HStack>
                            :
                            <ItemCount
                                stock={stock}
                                count={count} 
                                setCount={setCount} 
                                handleAdd={handleAdd}
                            />
                        }
                    <VStack>
                        <Text fontWeight="500">All methods of payment</Text>
                        <Text fontWeight="500">Arrives in 7 business days</Text>
                    </VStack>
                </VStack>
            </Center>
        </>
    );
}

export default ItemDetail