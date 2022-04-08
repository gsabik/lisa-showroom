import { Flex, Heading, HStack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
    <Flex w="full" py={6} justifyContent="space-around" bg="gray.200"> 
        <Link to="/"><Heading>Lisa Showroom</Heading></Link>
        <HStack>
            <Link to="/"><Text px={4}>Home</Text></Link>
            <Link to="/aboutus"><Text px={4}>About us</Text></Link>
            <Link to="/contact"><Text px={4}>Contact</Text></Link>
        </HStack>
        <CartWidget/>
    </Flex>
    )
}

export default NavBar