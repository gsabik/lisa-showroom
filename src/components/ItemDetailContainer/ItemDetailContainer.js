import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Container } from "@chakra-ui/react";
import ItemDetail from "./ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";

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
                setLoading(false);
            })
    }, [itemId]);

    return (
        <Container maxW="container.xl" p={10}>
            {
                loading
                ?
                <Loader/>
                :
                <ItemDetail {...item}/>
            }     
        </Container>
    );
}

export default ItemDetailContainer