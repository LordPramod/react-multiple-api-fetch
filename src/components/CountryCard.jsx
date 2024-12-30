import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

function CountryCard() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchCountryApi = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountryData(data);
      console.log(data);
    };
    fetchCountryApi();
  }, []);
  return (
    <>
          <Flex wrap={'wrap'} direction={'row'} gap={'30px'} padding={'20px'}>
      {countryData.map((country, i) => {
        return (
          <>
              <Card key={i} display={"flex"} width={'380px'}>
                <CardHeader>
                  <Box>
                    <Image src={country.flags.png} mb={'10px'} width={'320px'} height={'250px'}></Image>
                    <Heading as={'h2'} size={'lg'} color={'GrayText'} _hover={{color:'purple.400'}}> {country.name.common}</Heading>
                  </Box>
                </CardHeader>
                <CardBody>
                    <Box color={'gray.700'}>
                        <Text> Population : {country.population.toLocaleString("en-IN") }</Text>
                        <Text> Capital City : {country.capital}</Text>
                        <Text> Languages: {Object.values(country.languages || {}).join(", ")}</Text>
                        <Text> Currencies: {Object.values(country.currencies || {}).map(curr => curr.name).join(", ")}</Text>
                        <Text>Continents : {country.continents}</Text>
                    </Box>
                </CardBody>

                <CardFooter>
                    <Button variant={"outline"} display={'flex'} margin={'0 auto'} colorScheme="purple">View Country</Button>
                </CardFooter>
              </Card>
          </>
        );
    })}
    </Flex>
    </>
  );
}

export default CountryCard;
