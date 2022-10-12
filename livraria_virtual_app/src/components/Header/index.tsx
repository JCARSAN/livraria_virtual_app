import { Flex, HStack, VStack, Text } from "@chakra-ui/react";
import { AiOutlineSearch } from 'react-icons/ai';
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';

export function Header(){
    return(
        <Flex 
            as="header" 
            backgroundColor="blue.300" 
            width="100%" 
            alignItems="center" 
            justifyContent="center"
            padding="32px 0"
        >
            <HStack width="100%" maxWidth={1440} justifyContent="space-between">
                <Logo />
                <SearchBar />
                <HStack spacing={10}>
                    <VStack position="relative">
                        <Flex 
                            width="29px" 
                            height="29px" 
                            backgroundColor="yellow.500" 
                            position="absolute" 
                            borderRadius="50%"
                            color="#191919"
                            justifyContent="center"
                            fontWeight="bolder"
                            top="-15px"
                            left="60px"
                            fontSize="1.1rem"
                        >
                            0
                        </Flex>
                        <FaShoppingCart fontSize="1.5rem"/>
                        <Text>Minhas Compras</Text>
                    </VStack>
                    <VStack>
                        <FaUserAlt fontSize="1.5rem"/>
                        <Text>Entrar</Text>
                    </VStack>
                </HStack>
            </HStack>
        </Flex>
    )
}