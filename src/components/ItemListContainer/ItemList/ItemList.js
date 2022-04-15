import { Grid } from "@chakra-ui/react"
import Item from "./Item/Item"


const ItemList = ({products}) => {
    return (
        <Grid templateColumns={{md:"repeat(2,1fr)",lg:"repeat(3, 1fr)"}} gap={10} display={{base:"flex", md:"grid" ,lg:"grid"}} flexDirection={{base:"column"}}>
            {products.map((product) => <Item product={product} key={product.id}></Item>)}
        </Grid>
    )
}

export default ItemList