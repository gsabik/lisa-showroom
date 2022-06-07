import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Container, Flex, Heading} from "@chakra-ui/react";
import ItemList from "./ItemList/ItemList";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const {brandId} = useParams();

    useEffect(() => {
        setLoading(true);
        
        const dataBase = collection(db, "products");
        const q = brandId ? query(dataBase, where("brand", "==", brandId)) : dataBase;
        getDocs(q)
        .then(res => {setProducts(res.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data()
            }
            }))
        })
        .catch(err => console.log(err))
        .finally(() => {
            setLoading(false);})

    },[brandId])

    
    return (
        <Container maxW="container.xl" py={10}>
            <Flex justifyContent="center">
                <Heading pb={6}>Our products</Heading>
            </Flex>
            {
                loading
                ?
                <Loader/>
                :
                <ItemList products={products}></ItemList>
            }
        </Container>
    )
}

export default ItemListContainer