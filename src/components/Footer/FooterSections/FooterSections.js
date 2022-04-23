import { Flex, Stack, Text, UnorderedList, ListItem} from "@chakra-ui/react"
import { Link } from "react-router-dom"

const FooterSections = () => {
    return (
        <Flex w="50%" py={6} flexDirection={{base:"column", sm:"column", md:"row", lg:"row"}} alignItems="center">
            <Stack flex="1" pt={6} >
                <Text fontSize="2xl" fontWeight="500">About</Text>
                <UnorderedList styleType="none" m={0} pt={2} spacing={2}>
                    <Link to="/provider"><ListItem>Provider</ListItem></Link>
                    <ListItem>Terms of use</ListItem>
                </UnorderedList>
            </Stack>
            <Stack flex="1" pt={6} >
                <Text fontSize="2xl" fontWeight="500">Social</Text>
                <UnorderedList styleType="none" m={0} pt={2} spacing={2}>
                    <ListItem>Instagram</ListItem>
                    <ListItem>Twitter</ListItem>
                    <ListItem>Youtube</ListItem>
                    <ListItem>Others social</ListItem>
                </UnorderedList>
            </Stack>
            <Stack flex="1" pt={6} >
                <Text fontSize="2xl" fontWeight="500">More</Text>
                <UnorderedList styleType="none" m={0} pt={2} spacing={2}>
                    <ListItem>History</ListItem>
                    <ListItem>Work with us</ListItem>
                </UnorderedList>
            </Stack>
        </Flex>
    )
}

export default FooterSections