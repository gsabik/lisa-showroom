import { Flex, Heading, HStack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import MenuBrands from "../MenuBrands/MenuBrands"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
    <Flex w="full" py={6} justifyContent="space-around" bg="gray.50"> 
        <Link to="/"><Heading>Lisa Showroom</Heading></Link>
        <HStack>
            <Link to="/"><Text fontWeight="500" px={4}>Home</Text></Link>
            <Link to="/aboutus"><Text fontWeight="500" px={4}>About us</Text></Link>
            <Link to="/providers"><Text fontWeight="500" px={4}>Providers</Text></Link>
            <MenuBrands/>
        </HStack>
        <Link to="/cart"><CartWidget/></Link>
    </Flex>
    )
}

export default NavBar