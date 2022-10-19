import { VStack } from "@chakra-ui/react";
import { SectionDestaques } from "./SectionDestaques";

export function Main(){
    /*
    if(loading){
        return <Spinner size='lg' color="#191919"/>
    }
    */

    return(
        <VStack as="main" 
            width="100%" 
            maxWidth="1280px"
        >
            <SectionDestaques />
        </VStack>
    )
}