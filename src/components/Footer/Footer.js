import { Flex, Box, Center, Heading, Text, Grid, GridItem, UnorderedList, ListItem, Divider, AspectRatio, VStack } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Flex h="20rem" flexDirection={{base:"column", md:"row", lg:"row"}} justifyContent="space-around" alignItems="center" bg="gray.50">
            <VStack justifyContent="flex-start" p={6}>
                <Text fontSize="2xl" fontWeight="500">Lisa Showroom</Text>
                <Text>© 2022 Lisa Showroom - All rights reserved</Text>
            </VStack>
            <Flex py={6}>
                <Box>
                    <Grid templateColumns="repeat(4, 1fr)" gap={6} flexDirection={{base:"column", md:"row", lg:"row"}}>
                        <GridItem>
                            <Text fontSize="2xl" fontWeight="500">About</Text>
                            <UnorderedList styleType="none" m={0} pt={2} spacing={2}>
                                <ListItem>History</ListItem>
                                <ListItem>Provider</ListItem>
                                <ListItem>Privacy statement</ListItem>
                                <ListItem>Terms of use</ListItem>
                            </UnorderedList>
                        </GridItem>
                        <GridItem>
                            <Text fontSize="2xl" fontWeight="500">CS</Text>
                            <UnorderedList styleType="none" m={0} pt={2} spacing={2}>
                                <ListItem>Stores</ListItem>
                                <ListItem>Coupons</ListItem>
                                <ListItem>Affiliates</ListItem>
                                <ListItem>Discounts</ListItem>
                            </UnorderedList>                        
                        </GridItem>
                        <GridItem>
                            <Text fontSize="2xl" fontWeight="500">Social</Text>
                            <UnorderedList styleType="none" m={0} pt={2} spacing={2}>
                                <ListItem>Instagram</ListItem>
                                <ListItem>Twitter</ListItem>
                            </UnorderedList>
                        </GridItem>
                        <GridItem>
                            <Text fontSize="2xl" fontWeight="500">More</Text>
                            <UnorderedList styleType="none" m={0} pt={2} spacing={2}>
                                <ListItem>Jobs</ListItem>
                            </UnorderedList>
                        </GridItem>
                    </Grid>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Footer