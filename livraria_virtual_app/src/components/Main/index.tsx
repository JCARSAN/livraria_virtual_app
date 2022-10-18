import { VStack, Text, Spinner } from "@chakra-ui/react";
import { Product, useGetHighlightedProductsQuery } from '@/saleor/api';

export function Main(){
    const {loading, error, data} = useGetHighlightedProductsQuery();

    /*
    if(loading){
        return <Spinner size='lg' color="#191919"/>
    }
    */
    if(error){
        return <Text>Ocorreu um erro!</Text>
    }
    if(data){
        console.log("Data: ",data)
    }

    return(
        <VStack as="main" alignItems="center" justifyContent="center">
            {loading ? <Spinner size='lg' color="#191919"/> : <h2>Main Container</h2>}
        </VStack>
    )
}