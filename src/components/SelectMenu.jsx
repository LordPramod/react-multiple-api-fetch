import { Select } from "@chakra-ui/react";

export default function SelectMenu({ setQuery }) {
  return (
    <Select
      width={"400px"}
      color={"custom.300"}
      variant={"filled"}
      fontSize={"xl"}
      border={"1px solid #0097C7"}
      onChange={(e) => setQuery(e.target.value.toLowerCase())}
    >
      <option hidden>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </Select>
  );
}
