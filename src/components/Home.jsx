import { Box, Button, Container, Flex, FormLabel, Input, List, ListItem, Text } from "@chakra-ui/react"
import { useState } from "react"

const Home = () => {

    const [details, setDetails] = useState([{name: 'Ram'}])
    const [typeValue, setTypedValue] = useState('')
  
    const setValue = () => {
      setDetails([...details, {name: typeValue}])
    }
  
    const handleDelete = (index) => {
      const newDetails = details.filter((_, i) => i !== index);
      setDetails(newDetails);
    }
  return (
    <>
    <Box margin={'60px auto'} justifyContent={''} width={'500px'} padding={'30px'} shadow={'base'} bg={'whitesmoke'}>
        
    <FormLabel fontSize={'xl'}> Enter Something....</FormLabel>
    <Flex gap={'20px'} mb={'20px'} >
        <Input fontSize={'xl'} type='text' border={'1px solid purple'} width={'350px'} colorScheme="purple" variant={'filled'} onChange={(e) => {setTypedValue(e.target.value)}}/>
        <Button colorScheme="purple" width={'90px'} ml={'15px'} variant={'solid'} onClick={setValue}>Add</Button>
      </Flex>
      
      <Flex mb={'20px'}>
        <Text fontSize={'xl'} ml={'10px'}> Currently Typing: {typeValue}</Text>
      </Flex>

      <Container >
        {details.map((detail, index) => { 
            return (
                <Box key={index}> 
              <List gap={'20px'} display={'flex'} > 
                <ListItem fontSize={'3xl'} textAlign={'center'} alignItems={'center'} mb={'14px'}>

                {detail.name}
                </ListItem>
                <List> <Button colorScheme="purple" onClick={() => handleDelete(index)}>Delete</Button></List>
              </List>
            </Box>
          );
        })}
      </Container>
        </Box>
    </>
  )
}

export default Home