import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const CountryDetail = () => {
  const params = new URLSearchParams(location.search).get("name");
  const countryName = params;

  const [countryDetail, setCountryDetail] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const [data] = await response.json();
      console.log(data);
      console.log(Object.values(data.name.nativeName)[0].common);
      setCountryDetail({
        name: data.name.common,
        image: data.flags.svg,
        capital: data.capital,
        currencies: Object.values(data.currencies)
          .map((currency) => currency.name)
          .join(","),
        population: data.population.toLocaleString("en-US"),
        region: data.region,
        nativeName: Object.values(data.name.nativeName)[0].common,
      });
    };
    fetchApi();
  }, [countryName]);

  return (
    <>
      <Box margin={""} padding={"32px"} border={"1px"} height={"100vh"}>
        <Button
          leftIcon={<ArrowBackIcon />}
          w={"100px"}
          fontSize={"xl"}
          colorScheme={"purple"}
          onClick={() => {
            history.back();
          }}
        >
          Back
        </Button>
        <Box marginTop={"10px"}>
          <Heading mb={"20px"}>{countryDetail.name}</Heading>
        </Box>
        <HStack gap={"30px"}>
          <Box>
            <Image
              src={countryDetail.image}
              border={"1px solid red"}
              w={"450px"}
              maxH={"450px"}
              marginTop={"10px"}
            ></Image>
          </Box>
          <Box ml={"30px"}>
            <Text fontSize={"x-large"} mb={"10px"}>
              Native Name : {countryDetail.nativeName}
            </Text>
            <Text fontSize={"x-large"} mb={"10px"}>
              Capital : {countryDetail.capital}
            </Text>
            <Text fontSize={"x-large"} mb={"10px"}>
              Population : {countryDetail.population}
            </Text>
            <Text fontSize={"x-large"} mb={"10px"}>
              Sub Region : {countryDetail.region}
            </Text>
            <Text fontSize={"x-large"} mb={"10px"}>
              Currencies : {countryDetail.currencies}
            </Text>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default CountryDetail;
