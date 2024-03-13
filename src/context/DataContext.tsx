import { createContext } from "react";
import { ICartType, IProductType } from "../types/product.type";

export interface DataContextProps {
  products: IProductType[]
  cart: ICartType[]
  setCart: React.Dispatch<React.SetStateAction<ICartType[]>>
  addProductToCart: (id: number, amount: number) => void
  removeProductFromCart: (id: number) => void
  getTotal: () => number
}

export const DataContext = createContext<DataContextProps>({
  products: [],
  cart: [],
  addProductToCart: ()=> null,
  setCart: ()=> null,
  removeProductFromCart: ()=>null,
  getTotal: () => 0
})