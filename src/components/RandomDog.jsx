import { Button, Card, CardBody, CardFooter, Image } from "@chakra-ui/react";
import { useState } from "react";

function RandomDog() {
  const [dogData, setDogData] = useState([]);

  const dogFetch = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setDogData(data.message);
    console.log(dogData);
  };
  return (
    <>
      <Card>
        <CardBody width={"420px"} height={"600px"}>
          <Image src={dogData}></Image>
        </CardBody>
        <CardFooter>
          <Button colorScheme="purple" onClick={dogFetch}>
            Generate Another
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default RandomDog;
