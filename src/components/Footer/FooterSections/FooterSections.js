import { Link } from "react-router-dom";
import { 
    Flex, 
    Stack, 
    Text, 
    UnorderedList, 
    ListItem 
} from "@chakra-ui/react";

const FooterSections = () => {
    return (
        <Flex w="50%" py={6}>
            <Flex
                alignItems="flex-start"
                justifyContent="space-evenly" 
                w="full"
            >
                <Stack flex="1" pt={6}>
                    <Text fontSize="2xl" fontWeight="500">About</Text>
                    <UnorderedList styleType="none" m={0} pt={2} spacing={2}>
                        <Link to="/provider"><ListItem>Provider</ListItem></Link>
                        <ListItem>History</ListItem>
                        <ListItem>Terms of use</ListItem>
                    </UnorderedList>
                </Stack>       
                <Stack flex="1" pt={6}>
                    <Text fontSize="2xl" fontWeight="500">Social</Text>
                    <UnorderedList styleType="none" m={0} pt={2} spacing={2}>
                        <ListItem>Instagram</ListItem>
                        <ListItem>Twitter</ListItem>
                    </UnorderedList>
                </Stack>       
                <Stack flex="1" pt={6}>
                    <Text fontSize="2xl" fontWeight="500">More</Text>
                    <UnorderedList styleType="none" m={0} pt={2} spacing={2}>
                        <ListItem>Work on LS</ListItem>
                        <ListItem>Others</ListItem>
                    </UnorderedList>
                </Stack>       
            </Flex>        
        </Flex>
    );
}

export default FooterSections