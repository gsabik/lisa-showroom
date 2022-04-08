import { db } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Flex, Heading, Text } from "@chakra-ui/react"
import ItemList from "./ItemList/ItemList";
import Filter from "../Filter/Filter"

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const {brandId} = useParams();

    useEffect(() => {
        setLoading(true);
        
        const dataBase = collection(db, "products");
        const q = brandId ? query(dataBase, where("brand", "==", brandId)) : dataBase
        getDocs(q)
        .then(res => {setProducts(res.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data()
            }
            }))
        })
        .catch((err) => console.log(err))
        .finally(() => {
            setLoading(false);})

    },[brandId])

    
    return (
        <Container maxW="container.xl">
            <Flex justifyContent="center">
                <Heading py={6}>Our products</Heading>
            </Flex>
            {
                loading
                ?
                <Text>Loading...</Text>
                :
                <ItemList products={products}></ItemList>
            }
        </Container>
    )
}

export default ItemListContainer