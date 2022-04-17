import { Flex, Heading, HStack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import MenuBrands from "../MenuBrands/MenuBrands"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <Flex w="full" p={6} justifyContent="space-around" alignItems="center" bg="gray.50"> 
            <Link to="/"><Heading fontSize={{base:"xl", md:"2xl", lg:"4xl"}}>Lisa Showroom</Heading></Link>
            <HStack direction={{base:"column", md:"column"}} spacing={6}>
                <Link to="/"><Text fontWeight="500">Home</Text></Link>
                <Link to="/aboutus"><Text fontWeight="500">About us</Text></Link>
                <Link to="/provider"><Text fontWeight="500">Provider</Text></Link>
                <MenuBrands/>
            </HStack >
            <Link to="/cart"><CartWidget/></Link>
        </Flex>
    )
}

export default NavBar