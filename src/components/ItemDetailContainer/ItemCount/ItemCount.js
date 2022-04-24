import { HStack, Text, Button, Icon } from "@chakra-ui/react"
import { BsPlus, BsDash } from "react-icons/bs"

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
            <HStack spacing={6}>
                <HStack>
                    <Button variant="outline" borderColor="gray.500" onClick={handleDecrement}><Icon as={BsDash}/></Button>
                    <Text w="2rem" textAlign="center">{count}</Text>
                    <Button variant="outline" borderColor="gray.500" onClick={handleIncrement}><Icon as={BsPlus}/></Button>
                </HStack>
                <Button onClick={handleAdd}>Add to cart</Button>
            </HStack>
        </HStack>
    )
}

export default ItemCount