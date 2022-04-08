import { Button, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Filter = () => {
    return (
        <Flex>
            <Link to="/category/Adidas"><Button>Adidas</Button></Link>
            <Link to="/category/Nike"><Button>Nike</Button></Link>
            <Link to="/category/Jordan"><Button>Jordan</Button></Link>
            <Link to="/category/UA"><Button>Under Armour</Button></Link>
        </Flex>
    )
}

export default Filter