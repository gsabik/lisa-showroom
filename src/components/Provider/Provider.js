import { Container, Flex, Heading, Text, HStack, VStack, Image, Stat, StatLabel, StatNumber, StatHelpText, Divider } from "@chakra-ui/react"
import providerLogo from "../../assets/foot-locker.svg"

const Provider = () => {
    return (
        <Container maxW="container.xl" py={10} >
            <Flex justifyContent="center">
                <Heading pb={6}>Provider</Heading>
            </Flex>
            <HStack display={{md:"flex"}}>
                <VStack w={{md:"100%", lg:"40%"}} h="full" p={10} spacing={10} justifyContent="center">
                    <Image src={providerLogo}></Image>
                </VStack>
                <VStack w={{md:"100%", lg:"60%"}} h="full" py={10} spacing={10} justifyContent="center">
                    <Heading fontSize="3xl">About Foot Locker Inc.</Heading>
                    <Text fontSize="lg" lineHeight={10}> Foot Locker, Inc. leads the celebration of sneaker and youth culture around the globe through a portfolio of brands including Foot Locker, Kids Foot Locker, Champs Sports, Eastbay, atmos, WSS, Footaction, and Sidestep. With approximately 2,900 retail stores in 28 countries across North America, Europe, Asia, Australia and New Zealand, as well as websites and mobile apps, the Company's purpose is to inspire and empower youth culture around the world, by fueling a shared passion for self-expression and creating unrivaled experiences at the heart of the global sneaker community. Foot Locker, Inc. has its corporate headquarters in New York. 
                    </Text>
                    <Divider borderColor="black"/>
                    <HStack spacing={8} alignItems="flex-start">
                        <Stat>
                            <StatLabel>Number of stores</StatLabel>
                            <StatNumber>2998</StatNumber>
                            <StatHelpText>(in worldwide) </StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel>Number of stores</StatLabel>
                            <StatNumber>2002</StatNumber>
                            <StatHelpText>(in USA) </StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel>Net sales worlwides</StatLabel>
                            <StatNumber>7.6 USD</StatNumber>
                            <StatHelpText>(in million U.S. dollars) </StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel>Net sales United States</StatLabel>
                            <StatNumber>5.58 USD</StatNumber>
                            <StatHelpText>(in million U.S. dollars) </StatHelpText>
                        </Stat>
                    </HStack>
                </VStack>
            </HStack>
        </Container>
    )
}

export default Provider