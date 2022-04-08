import { db } from "../../firebase/config"
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Flex, Text } from "@chakra-ui/react"
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const {itemId} = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, "products", itemId);
        getDoc(docRef)
            .then(doc => {
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(() => {
                setLoading(false);})

    },[])

    return (
        <Container maxW="container.xl" p={0}>
            <Flex h="100vh" py={20}>
            {
                loading
                ?
                <Text>loading...</Text>
                :
                <ItemDetail {...item}/>
            }     
            </Flex>
        </Container>
    )
}

export default ItemDetailContainer