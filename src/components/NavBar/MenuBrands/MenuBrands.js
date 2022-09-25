import { Link } from "react-router-dom";
import { 
    Button, 
    Menu, 
    MenuButton, 
    MenuList, 
    MenuItem 
} from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

const MenuBrands = ({ listBrands }) => {
    return (
        <Menu>
            <MenuButton size="md" as={Button} rightIcon={<IoIosArrowDown/>}>
                Brands
            </MenuButton>
            <MenuList>
                {
                    listBrands.map(({ url, brand }) => (
                    <Link key={brand} to={url}>
                        <MenuItem>{brand}</MenuItem>
                    </Link>
                ))
                }
            </MenuList>
        </Menu>
    );
}

export default MenuBrands