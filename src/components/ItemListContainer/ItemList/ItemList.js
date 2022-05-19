import { Grid } from "@chakra-ui/react"
import Item from "./Item/Item"


const ItemList = ({ products }) => {
    return (
        <Grid 
            display={{base:"flex", md:"grid" ,lg:"grid"}} 
            flexDirection={{base:"column"}}
            templateColumns={{md:"repeat(2,1fr)",lg:"repeat(3, 1fr)"}} 
            gap={10} 
        >
            {
                products.map(product => 
                <Item 
                    key={product.id}
                    product={product} 
                >
                </Item>
                )
            }
        </Grid>
    )
}

export default ItemList