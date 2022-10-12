import { Flex, HStack, Input } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";


export function SearchBar(){
    return(
        <HStack position="relative">
            <Flex 
                backgroundColor="yellow.500" 
                position="absolute" 
                width="48px" 
                height="48px" 
                zIndex={2} 
                right={0}
                alignItems="center"
                justifyContent="center"
                bottom={0}
                cursor="pointer"
            >
                <AiOutlineSearch fontSize="1.5rem" fontWeight="bolder" color="#191919"/>
            </Flex>
            <Input 
                placeholder="O que você está buscando?" 
                size="lg" width="100%" 
                minWidth={{md:500}} 
                backgroundColor="#FDFDFD" 
                color="#191919"
            />
        </HStack>
    )
}