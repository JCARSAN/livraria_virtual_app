import { HStack, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


export function CategoriasMenu(){
    return(
        <Menu>
            <MenuButton as="button">
                <HStack>
                    <Text>Categorias</Text>
                    <BsChevronDown />
                </HStack>
            </MenuButton>
            <MenuList backgroundColor="purple.700" color="light.100" inset="6px auto auto -6px">
                <MenuItem _focus={{backgroundColor:'transparent', textDecoration:'none', opacity:0.75 }}><Link href="#">Administração & Finanças</Link></MenuItem>
                <MenuItem _focus={{backgroundColor:'transparent', textDecoration:'none', opacity:0.75 }}><Link href="#">Arquitetura</Link></MenuItem>
                <MenuItem _focus={{backgroundColor:'transparent', textDecoration:'none', opacity:0.75 }}><Link href="#">Artes</Link></MenuItem>
                <MenuItem _focus={{backgroundColor:'transparent', textDecoration:'none', opacity:0.75 }}><Link href="#">Computação</Link></MenuItem>
                <MenuItem _focus={{backgroundColor:'transparent', textDecoration:'none', opacity:0.75 }}><Link href="#">Direito</Link></MenuItem>
                <MenuItem _focus={{backgroundColor:'transparent', textDecoration:'none', opacity:0.75 }}><Link href="#">Filosofia</Link></MenuItem>
            </MenuList>
        </Menu>
    )
}