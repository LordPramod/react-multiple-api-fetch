import { Button, Card, CardBody, CardFooter, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function RandomDog() {
  const [dogData, setDogData] = useState([]);

  useEffect(() => {
    const dogFetch = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogData(data.message);
      console.log(data.message);
    };
    dogFetch();
  }, []);

  const handleClick = () => {
    setDogData([]);
  };
  return (
    <>
      <Card>
        <CardBody width={"420px"} height={"600px"}>
          <Image src={dogData}></Image>
        </CardBody>
        <CardFooter>
          <Button colorScheme="purple" onClick={handleClick}>
            Generate Another
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default RandomDog;
