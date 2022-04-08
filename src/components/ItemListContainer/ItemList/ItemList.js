import { Grid } from "@chakra-ui/react"
import Item from "./Item/Item"


const ItemList = ({products}) => {
    return (
        <Grid templateColumns="repeat(3, 1fr)" gap={10} justifyItems="center">
            {products.map((product) => <Item product={product} key={product.id}></Item>)}
        </Grid>
    )
}

export default ItemList