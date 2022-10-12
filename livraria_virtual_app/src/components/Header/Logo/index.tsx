import { VStack, Image, Heading } from "@chakra-ui/react";


export function Logo(){
    return(
        <VStack spacing={0}>
            <Image src='/images/logo.svg' maxWidth={210} height="75px"/>
            <Heading as="h1" fontFamily='Caveat Brush' fontSize="1.8rem">Livraria Virtual</Heading>
        </VStack>
    )
}