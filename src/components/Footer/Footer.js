import { Flex, Grid, GridItem, Text, UnorderedList, ListItem, Center, Heading } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Flex w="full" h="5rem" bg="gray.100">
           <Center w="full">
               <Heading fontSize="xl">©2022 Copyright - Lisa Showroom</Heading>
           </Center>
        </Flex>
    )
}

export default Footer