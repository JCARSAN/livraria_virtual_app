import { VStack, Heading, Text, Spinner, SimpleGrid } from "@chakra-ui/react";
import { Product, useGetHighlightedProductsQuery } from '@/saleor/api';
import { BoxProduto } from "../BoxProduto";
import {Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function SectionDestaques(){

    const {loading, error, data} = useGetHighlightedProductsQuery();

    const products = data?.collection?.products?.edges || [];
    
    if(error){
        return <Text>Ocorreu um erro! =( Tente recarregar a página.</Text>
    }

    return(      
        <VStack as="section" alignItems='flex-start'>
            <Heading as="h2" fontFamily={'IBM Plex Serif'}>Destaques</Heading>
            {loading? 
                <Spinner size='lg' color="#191919"/> 
              :
              
              <SimpleGrid columns={3} columnGap={2} rowGap={5}>
                    {products.map(({node}) => 
                        {   
                            console.log("ID: ",node.id);
                            return (
                                <BoxProduto key={node.id} {...node as Product} />
                            )
                        }
                    )}
              </SimpleGrid>
                /*
               { 
                <Swiper 
                    slidesPerView={4} 
                    spaceBetween={10} 
                    pagination={{clickable:true}} 
                    modules={[Pagination,Navigation]}
                    navigation={true}
                >
                    {products.map(({node}) => 
                        {
                            return (
                                <SwiperSlide>
                                    <BoxProduto key={node.id} {...node as Product} />
                                </SwiperSlide>
                            )
                        }
                    )}
                </Swiper>
                }
                */
            }
        </VStack>         
    );
}