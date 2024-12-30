import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, HStack, Image, Text, useToast, } from '@chakra-ui/react';
import { useEffect, useState } from 'react';


function ProductCard() {
    let [apiData, setApiData] = useState([]);
    let [isFetched, setIsFetched] = useState(false);
    useEffect(() => {
        const fetchApi = async () => {
            if (!isFetched) {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setApiData(data);
                setIsFetched(true);
                console.log(data);
            }
        };
        fetchApi();
    }, [isFetched]);

    const toast = useToast()


    const btnClicked = () => {
        toast({
            title : "Clicked",
            duration : 5000,
            isClosable: true,
            description : 'Buy button Clicked',
            position : 'top-right'


        })

    }

    return (
        <>
        <Flex wrap="wrap" margin={'10px'}>
        {apiData.map((product) => {
            return (
                <Flex key={product.id} m={7}>
                <Card color={'gray.500'} width={'350px'} maxHeight={'auto'}  borderTop={'8px'} borderTopColor={'purple.400'}>
                <CardHeader key={product.id}>
                <Flex gap={6}>
                <Avatar src={product.image}/>
                <Box>

                    <Heading size={'sm'}>{product.title}</Heading>
                </Box>
                </Flex>
                </CardHeader>
                <CardBody >
                    <Box display="flex" justifyContent="center" mb={8}>
                        <Image src={product.image} maxH={'200px'} width={'200px'} />
                    </Box>
                    <Text>{product.description}</Text>  

                </CardBody>
                <CardFooter>
                    <HStack  spacing={'20px'}>
                <Text fontSize={'lg'}>Price : $ {product.price}</Text>
                <Button variant={'ghost'} size={'lg'} bg='purple.400' color={'gray.100'} _hover={{bg: 'purple.600'}} onClick={(()=> {
                    toast({
                        description : "Product View Button Clicked",
                        isClosable: true,
                        title : "View Product",
                        duration : 5000

                    })
                })} width={"120px"}> View Product</Button>
                <Button variant={'ghost'} size={'lg'} bg='purple.400' color={'gray.100'} _hover={{bg: 'purple.600'}} onClick={btnClicked}> Buy Now </Button>
                    </HStack>
                </CardFooter>
            </Card>
                </Flex>
            )
        })}
        </Flex>
        </>
    );
}

export default ProductCard