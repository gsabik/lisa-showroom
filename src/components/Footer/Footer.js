import { Flex, VStack, Text } from "@chakra-ui/react"
import FooterSections from "./FooterSections/FooterSections"

const Footer = () => {
    return (
        <Flex
            alignItems="center" 
            bg="gray.50"
            flexDirection={{base:"column", sm:"column", md:"row", lg:"row"}}
            justifyContent="space-around" 
        >
            <VStack
                justifyContent="flex-start"
                p={6}
                w="50%"
            >
                <Text fontSize="2xl" fontWeight="500">Lisa Showroom</Text>
                <Text>© 2022 Lisa Showroom</Text>
            </VStack>
            <FooterSections/>
        </Flex>
    )
}

export default Footer