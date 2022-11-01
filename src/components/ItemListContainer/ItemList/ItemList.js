import { Grid } from "@chakra-ui/react";
import Item from "./Item/Item";


const ItemList = ({ products }) => {
    return (
        <Grid 
            display={{
				base:"flex", 
				md:"grid" ,
				lg:"grid"
			}} 
            flexDirection={{base:"column"}}
            gap={10} 
            templateColumns={{
				md:"repeat(2,1fr)", 
				lg:"repeat(3, 1fr)"
			}} 
        >
            {
                products.map(product => (
					<Item 
						key={product.id}
						product={product} 
					/>
					

				))
            }
        </Grid>
    );
}

export default ItemList