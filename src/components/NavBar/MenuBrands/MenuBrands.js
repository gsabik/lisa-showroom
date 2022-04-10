import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { IoIosArrowDown } from "react-icons/io"
import { Link } from "react-router-dom"

const MenuBrands = () => {
    return (
        <Menu>
            <MenuButton size="md" as={Button} rightIcon={<IoIosArrowDown/>}>
                Brands
            </MenuButton>
            <MenuList>
                <Link to="/category/Adidas"><MenuItem>Adidas</MenuItem></Link>
                <Link to="/category/Nike"><MenuItem>Nike</MenuItem></Link>
                <Link to="/category/Jordan"><MenuItem>Jordan</MenuItem></Link>
                <Link to="/category/UA"><MenuItem>Under Armour</MenuItem></Link>
            </MenuList>
        </Menu>
    )
}

export default MenuBrands