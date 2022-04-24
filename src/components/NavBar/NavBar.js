import { useState } from "react"
import { Flex, HStack, VStack, Heading, Text, IconButton } from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom"
import MenuBrands from "./MenuBrands/MenuBrands"
import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
    const [display, setDisplay] = useState("none");

    const listBrands = [
        {url:"/category/Adidas", brand:"Adidas"},
        {url:"/category/Nike", brand:"Nike"},
        {url:"/category/Jordan", brand:"Jordan"},
        {url:"/category/UA", brand:"Under Armour"}
    ]
    
    return (
        <Flex w="full" bg="gray.50" p={6}>
            {/* Desktop */}
            <Flex display={['none', 'none', 'flex','flex']} w="full" justifyContent="space-between">
                <Link to="/"><Heading fontSize="4xl" px={6}>Lisa Showroom</Heading></Link>
                <HStack direction={{base:"column", md:"column"}} spacing={6} alignItems="center">
                    <Link to="/"><Text fontWeight="500">Home</Text></Link>
                    <Link to="/provider"><Text fontWeight="500">Provider</Text></Link>
                    <MenuBrands listBrands={listBrands}/>
                    <Link to="/cart"><CartWidget/></Link>
                </HStack >
            </Flex>

            <Flex display={{base:"flex", md:"none", lg:"none"}} w="full" justifyContent="space-between">
                <Link to="/"><Heading fontSize="2xl" px={6}>Lisa Showroom</Heading></Link>
                <IconButton icon={<GiHamburgerMenu/>} onClick={() => setDisplay("flex")}/>
            </Flex>

            {/* Mobile */}
            <Flex
                w="100vw"
                display={display}
                bgColor="gray.50"
                h="50vh"
                position="fixed"
                top="0"
                left="0"
                zIndex={20}
                overflowY="auto"
                flexDirection="column"
            >
                <Flex w="full" justifyContent="flex-end" p={6}>
                    <IconButton
                        mr={4}
                        aria-label="Open Menu"
                        icon={<AiOutlineClose/>}
                        onClick={() => setDisplay("none")}
                    />
                </Flex>
                <VStack spacing={10} alignItems="center">
                    <Link to="/"><Text fontWeight="500">Home</Text></Link>
                    <Link to="/provider"><Text fontWeight="500">Provider</Text></Link>
                    <MenuBrands listBrands={listBrands}/>
                    <Link to="/cart"><CartWidget/></Link>
                </VStack>
            </Flex>
        </Flex>
    )
}

export default NavBar