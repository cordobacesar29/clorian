import { Button, Card, Flex, Icon, Text } from "@chakra-ui/react";
import { IProductType } from "../../types/product.type";
import { useState } from "react";
import { useData } from "../../hooks/useData.hook";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { formatDate } from "../../utils/formatDate";

interface Props {
  product: IProductType;
}
export const ShoesCard = ({ product }: Props) => {
  const [count, setCount] = useState<number>(1);

  const { addProductToCart } = useData();
  const validityDate = formatDate(product.validityDate);

  const isDisable = () => validityDate < formatDate(new Date());
  return (
    <Flex padding={"1rem"} width={"full"}>
      <Card
        width={{ base: "full", md: "300px" }}
        minHeight={"360px"}
        padding={{ base: ".5rem", md: "1rem" }}
        _hover={{
          boxShadow: "0 5px 10px #08a05c50",
        }}
        justify={"space-between"}
        align={"center"}
      >
        <img src={product.image} width={250} />
        <Flex direction={"column"} alignItems={"center"} gap={2}>
          <Text fontSize={18} fontWeight={600} textAlign={"center"}>
            {product.name}
          </Text>
          <Flex width={"160px"}>
            <Text
              textAlign={"center"}
              textOverflow={"ellipsis"}
              overflow={"hidden"}
              whiteSpace={"nowrap"}
            >
              {product.description}
            </Text>
          </Flex>
          <Text className="product-price">${product.price}</Text>
        </Flex>
        <Flex gap={4} justify={"space-between"} w={"full"}>
          <Flex
            p={"4px"}
            gap={1}
            border={"1px solid #f2f2f2"}
            align={"center"}
            justify={"center"}
            borderRadius={8}
          >
            <Flex
              _hover={{ cursor: isDisable() ? "not-allowed" : "pointer" }}
              onClick={() =>
                setCount((count) => (count > 1 ? count - 1 : count))
              }
            >
              <Icon as={MdArrowDropDown} boxSize={6} />
            </Flex>
            {count}
            <Flex
              _hover={{ cursor: isDisable() ? "not-allowed" : "pointer" }}
              onClick={() =>
                setCount((count) => (count < 10 ? count + 1 : count))
              }
            >
              <Icon as={MdArrowDropUp} boxSize={6} />
            </Flex>
          </Flex>
          <Button
            isDisabled={isDisable()}
            width={"full"}
            onClick={() => addProductToCart(product.id, count)}
          >
            Añadir
          </Button>
        </Flex>
      </Card>
    </Flex>
  );
};
