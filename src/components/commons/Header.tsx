import { Link } from "react-router-dom";
import Nike from "../../assets/images/Nike.jpg";
import { ROUTES } from "../../constans/routes";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
import { useData } from "../../hooks/useData.hook";
import { Suspense, useState } from "react";
import { SneakersModal } from "../sneakers-modal";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useData();
  
  return (
    <header className="header">
      <Flex display={{base: "none", md: "flex"}}>
        <Link to={"/"}>
          <img src={Nike} alt="Nike" width={150} />
        </Link>
      </Flex>
      <Flex gap={2}>
        <Box>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            Home
          </Link>
        </Box>
        <Box>
          <Link to={ROUTES.PRODUCTS} style={{ textDecoration: "none" }}>
            Products
          </Link>
        </Box>
      </Flex>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignSelf={"center"}
        alignItems={"center"}
        _hover={{cursor: "pointer"}}
        onClick={()=>setOpen(true)}
      >
        <Icon as={MdShoppingCart} w={8} h={8} />
        <span className="counter">{cart.length}</span>
      </Box>
      <Suspense>
        {open && (
          <SneakersModal
            handleClose={() => setOpen(false)}
            isOpen={open}
          />
        )}
      </Suspense>
    </header>
  );
};

export default Header;
