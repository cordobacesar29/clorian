import { useData } from "../../src/hooks/useData.hook";
import { ShoesCard } from "../../src/components/card";
import { IProductType } from "../../src/types/product.type";
import { useEffect, useState } from "react";
import { Button, Flex, Input, Text } from "@chakra-ui/react";

export const Products = () => {
  const { products } = useData();
  const [sortedData, setSortedData] = useState<IProductType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Function to sort products by name or description
  const sortData = (key: "name" | "description") => {
    const sorted = [...products].sort((a, b) => a[key].localeCompare(b[key]));
    setSortedData(sorted);
  };

  // Function to perform product search
  const searchProduct = (term: string) => {
    const searchTermLower = term.toLowerCase();
    // Filter products by name or description that match the search term
    const filteredData = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTermLower) ||
        product.description.toLowerCase().includes(searchTermLower)
    );
    setSortedData(filteredData); // Update the sorted product list with the filtered results
  };

  // Handle changes in the search input field
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    searchProduct(term); // Automatically perform search while typing
  };

  // Effect to initially sort products alphabetically by name
  useEffect(() => {
    const initialSortedData = [...products].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setSortedData(initialSortedData);
  }, [products]);

  return (
    <Flex direction={"column"} align={"center"} w={"full"} my={8}>
      <Flex
        gap={2}
        w={"full"}
        justify={"center"}
        direction={{ base: "column", md: "row" }}
        align={"center"}
      >
        <Button width={"fit-content"} onClick={() => sortData("name")}>
          Order by name
        </Button>
        <Button width={"fit-content"} onClick={() => sortData("description")}>
          Order by description
        </Button>
        <Input
          w={"fit-content"}
          placeholder="Search"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Flex>
      <Flex wrap={"wrap"} justify={"center"}>
        {sortedData.length > 0 ? (
          sortedData.map((prod) => (
            <Flex key={prod.id} width={{ base: "full", md: "fit-content" }}>
              <ShoesCard key={prod.id} product={prod} />
            </Flex>
          ))
        ) : (
          <h1>sin datos</h1>
        )}
      </Flex>
    </Flex>
  );
};
