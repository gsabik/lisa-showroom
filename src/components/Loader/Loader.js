import { Center, Spinner } from "@chakra-ui/react";

const Loader =  () => {
    return (
        <Center h="75vh">
            <Spinner
                color="BlackAlpha.500"
                emptyColor="gray.200"
                size="lg"
                thickness="5px"
            />
        </Center>
    );
}

export default Loader