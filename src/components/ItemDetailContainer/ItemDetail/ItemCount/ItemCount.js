import { Button, HStack, Input, Text } from "@chakra-ui/react"

const ItemCount = ({stock, count, setCount, handleAdd}) => {

    const handleDecrement = () => {
        if(count > 1){
            setCount(count - 1);
        }
        
        else if(count <= 1);
    }

    const handleIncrement = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }

    return (
    <HStack>
        <Button variant="outline" borderColor="gray.500" onClick={handleDecrement}>-</Button>
        <Text w="2rem" textAlign="center">{count}</Text>
        <Button variant="outline" borderColor="gray.500" onClick={handleIncrement}>+</Button>
        <Button w="15rem" colorScheme="blackAlpha" bgColor="blackAlpha.900" color="white" _hover={{ bgColor:"blackAlpha" }} onClick={handleAdd}>Add to cart</Button>
    </HStack>
    )
}

export default ItemCount