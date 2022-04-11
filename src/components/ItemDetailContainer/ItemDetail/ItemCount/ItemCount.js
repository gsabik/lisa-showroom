import { Button, HStack, Icon, Text } from "@chakra-ui/react"
import {BsPlus, BsDash} from "react-icons/bs"

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
        <HStack px={10}>
            <Button variant="outline" borderColor="gray.500" onClick={handleDecrement}><Icon as={BsDash}/></Button>
            <Text w="2rem" textAlign="center">{count}</Text>
            <Button variant="outline" borderColor="gray.500" onClick={handleIncrement}><Icon as={BsPlus}/></Button>
        </HStack>
        <Button w="15rem" colorScheme="blackAlpha" bgColor="blackAlpha.900" color="white" _hover={{ bgColor:"blackAlpha" }} onClick={handleAdd}>Add to cart</Button>
    </HStack>
    )
}

export default ItemCount