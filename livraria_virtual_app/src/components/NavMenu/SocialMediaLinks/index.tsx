import { HStack, Link } from "@chakra-ui/react";
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

export function SocialMediaLinks(){
    return(
        <HStack as="ul" spacing={5}>          
            <li><Link href="#"><BsFacebook fontSize="1.1rem"/></Link></li>
            <li><Link href="#"><BsInstagram fontSize="1.1rem"/></Link></li>
            <li><Link href="#"><BsTwitter fontSize="1.1rem"/></Link></li>         
        </HStack>
    )
}