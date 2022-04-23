import { Flex, VStack, Text} from "@chakra-ui/react"
import FooterSections from "./FooterSections/FooterSections"

const Footer = () => {
    return (
        <Flex h="20rem" flexDirection={{base:"column", md:"row", lg:"row"}} justifyContent="space-around" alignItems="center" bg="gray.50">
            <VStack justifyContent="flex-start" p={6}>
                <Text fontSize="2xl" fontWeight="500">Lisa Showroom</Text>
                <Text>© 2022 Lisa Showroom - All rights reserved</Text>
            </VStack>
            <FooterSections/>
        </Flex>
    )
}

export default Footer