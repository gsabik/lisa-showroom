import { Center, Spinner } from "@chakra-ui/react"

const Loader =  () => {
    return (
        <Center h="75vh">
            <Spinner
                thickness="5px"
                emptyColor="gray.200"
                color="BlackAlpha.500"
                size="lg"
            />
        </Center>
    )
}

export default Loader