import { HStack, Menu, MenuItem, MenuList, Link, MenuButton, Text } from "@chakra-ui/react";
import { BsChevronDown } from 'react-icons/bs';
import { CategoriasMenu } from "./CategoriasMenu";
import { SocialMediaLinks } from "./SocialMediaLinks";

export function NavMenu(){
    return(
        <HStack as="nav" width="100%" backgroundColor="#473790" justifyContent="center">
            <HStack width="100%" maxWidth="1440px" padding="15px" alignItems="center" justifyContent="space-between">
                <HStack as="ul" spacing={5}>                
                    <li>
                        <CategoriasMenu />
                    </li>
                    <li><Link href="#maisvendidos">Mais Vendidos</Link></li>
                    <li><Link href="#lancamentos">Lançamentos</Link></li>
                    <li><Link href="#promocoes">Promoçoes</Link></li>
                    <li><Link href="mailto:suportelivrariavirtual@gmail.com">Contato</Link></li>           
                </HStack>
                <SocialMediaLinks />
            </HStack>
        </HStack>
    )
}