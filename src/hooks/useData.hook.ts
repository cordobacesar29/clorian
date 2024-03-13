import { useContext } from "react";

import { DataContext } from "../providers/DataProvider";

export const useData = () => {
  return useContext(DataContext)
}