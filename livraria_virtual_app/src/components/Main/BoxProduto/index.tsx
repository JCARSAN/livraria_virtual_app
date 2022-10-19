import { Image, VStack, Text, HStack } from "@chakra-ui/react";
import { AdicionarAoCarrinhoButton } from "src/components/AdicionarAoCarrinhoButton";
import { SaibaMaisButton } from "src/components/SaibaMaisButton";
import { Product } from '@/saleor/api';

interface BoxProdutoProps extends Product {}

export function BoxProduto(props : BoxProdutoProps){

    console.log('Box Produto props: ',props)

    return(
        <VStack  
            backgroundColor="light.100" 
            borderRadius="20px"
            justifyContent="space-between"
            width="100%"
            padding="10px"
        >
            <Image src={props.thumbnail?.url} objectFit="cover" width="100%" height="auto"/>
            <VStack spacing={5} alignItems="flex-start" width="100%">
                <Text>{props.name}</Text>
                <HStack><Text color="#0000FF">Autor: </Text> <Text>{props.attributes[0].values[0].name}</Text></HStack>
                <AdicionarAoCarrinhoButton />
                <SaibaMaisButton />
            </VStack>
        </VStack>
    );
}