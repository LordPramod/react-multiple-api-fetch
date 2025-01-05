import { Search2Icon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/react";

const Search = ({ setQuery }) => {
  const setInput = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <Input
        placeholder="Search Country"
        width={"400px"}
        variant={"filled"}
        color={"custom.300"}
        _placeholder={{ color: "custom.300" }}
        fontSize={"xl"}
        border={"1px solid #0097C7"}
        onChange={setInput}
      />
    </>
  );
};

export default Search;
