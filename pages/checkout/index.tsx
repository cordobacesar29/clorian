import { Button, Flex, Text } from "@chakra-ui/react";
import UnderConstructionDesktopSvg from "../../src/assets/UnderConstructionSvgDesktop.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../src/constans/routes";

export const Checkout = () => {
  return (
    <Flex
      direction={"column"}
      gap={4}
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100%"
    >
      <img src={UnderConstructionDesktopSvg} />
      <Flex width={{ base: "90%", md: "30%" }} direction={"column"} align={"center"} gap={4}>
        <Text
          fontSize={{
            base: "16px",
            md: "24px",
          }}
          fontWeight={600}
          textAlign="center"
        >
          Coming soon! This section is under construction at the moment.
        </Text>
        <Link to={ROUTES.PRODUCTS}><Button>Volver</Button></Link>
      </Flex>
    </Flex>
  );
};
