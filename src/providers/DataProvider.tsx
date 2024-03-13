import { useState, useEffect, ReactNode } from "react";
import { ICartType, IProductType } from "../types/product.type";
import { DataContext } from "../context/DataContext";
import { mockData } from "../constans/mock-data";
import { useSnackbar } from "../hooks/useSnackbar";

interface Props {
  children: ReactNode;
}

export const DataProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<IProductType[]>([]);
  const [cart, setCart] = useState<ICartType[]>(() => {
    const cartData = localStorage.getItem("dataCart");
    return cartData ? JSON.parse(cartData) : [];
  });

  const { snackbar } = useSnackbar()

  const addProductToCart = (id: number, amount: number) => {
    const isProductInCart = cart.some((item: IProductType) => item.id === id);

    if (!isProductInCart) {
      const productToAdd = products.find((p: IProductType) => p.id === id);

      if (productToAdd) {
        setCart([...cart, {...productToAdd, amount}]);
        snackbar({
          type: 'success',
          message: 'Product added to cart',
        })
      } else {
        snackbar({
          type: 'warning',
          message: 'The product was not found in the product list.',
        })
      }
    } else {
      snackbar({
        type: 'info',
        message: 'The product is already in the cart.',
      })
    }
  };

  const removeProductFromCart = (id: number) => {
    snackbar({
      type: 'success',
      message: 'the product was removed.',
    })
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("dataCart", JSON.stringify(updatedCart));
  };

  const getTotal = (): number => {
    return cart.reduce((total, item) => total + item.price * item.amount, 0);
  };

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    setProducts(mockData);
  }, []);

  return (
    <DataContext.Provider
      value={{
        products,
        cart,
        setCart,
        addProductToCart,
        removeProductFromCart,
        getTotal
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export { DataContext };
