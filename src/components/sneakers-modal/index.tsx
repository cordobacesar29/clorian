import {
  Button,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useData } from "../../hooks/useData.hook";
import SVG from "../../assets/images/shopping-bag.svg";
import { FaTrash } from "react-icons/fa";
import { Colors } from "../../utils/Colors";
import { useSnackbar } from "../../hooks/useSnackbar";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constans/routes";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}
export const SneakersModal = ({ handleClose, isOpen }: Props) => {
  const { cart, removeProductFromCart, setCart, getTotal } = useData();
  const { snackbar } = useSnackbar();
  const totalPurchase = getTotal();
  const navigate = useNavigate()

  const clearCart = () => {
    snackbar({
      type: "info",
      message: "You cleaned the cart!",
    });
    setCart([]);
    localStorage.removeItem("dataCart");
  };

  const handleContinueShopping = () => {
    handleClose()
    navigate(ROUTES.CHECKOUT)
  };

  const RenderContent = () => {
    if (cart.length > 0) {
      return (
        <Flex direction={"column"} gap={4}>
          <Flex mt={4} justify={"space-between"}>
            <Text fontWeight={600} fontSize={24}>
              Total: € {totalPurchase}
            </Text>
            <Button onClick={clearCart} variant={"ghost"} colorScheme="orange">
              Clear
            </Button>
          </Flex>
          <Button
            w={"full"}
            colorScheme="green"
            onClick={handleContinueShopping}
          >
            Continue shopping
          </Button>
        </Flex>
      );
    }
    return (
      <Flex direction={"column"} gap={4} align={"center"} m={4}>
        <img src={SVG} width={60} height={60} />
        <Text>you do not have added products.</Text>
      </Flex>
    );
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      isCentered
      size={{ base: "xs", md: "lg" }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text>Purchase overview</Text>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          {cart.map((product) => {
            return (
              <Flex
                key={product.id}
                direction={{ base: "column", md: "row" }}
                gap={2}
                padding={"12px"}
                borderBottom={"2px solid #f2f2f2"}
                _hover={{ backgroundColor: "#f2f2f2" }}
                justify={"space-between"}
              >
                <img src={product.image} width={120} height={110} />
                <Flex
                  direction={"column"}
                  justify={"space-between"}
                  w={"100%"}
                  px={2}
                >
                  <Text fontWeight={600}>{product.name}</Text>
                  <Flex justify={"space-between"} w={"100%"}>
                    <Text fontWeight={500}>€ {product.price}</Text>
                    <Text fontWeight={500}>
                      {`${product.amount > 1 ? `x(${product.amount})` : ""} € ${
                        product.price * product.amount
                      }`}
                    </Text>
                  </Flex>
                </Flex>
                <Flex alignSelf={"self-start"} _hover={{ cursor: "pointer" }}>
                  <Icon
                    as={FaTrash}
                    color={Colors.danger}
                    onClick={() => removeProductFromCart(product.id)}
                  />
                </Flex>
              </Flex>
            );
          })}
          <RenderContent />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
