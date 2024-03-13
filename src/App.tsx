import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/features/Layout";
import { ROUTES } from "./constans/routes";
import { DataProvider } from "./providers/DataProvider";

function App() {
  return (
    <DataProvider>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={"/"} element={<HomelLazy />} />
            <Route path={ROUTES.PRODUCTS} element={<ProductsListLazy />} />
            <Route path={ROUTES.CHECKOUT} element={<ProductDetailLazy />} />
          </Route>
        </Routes>
      </Suspense>
    </DataProvider>
  );
}

const ProductsListLazy = lazy(() =>
  import("../pages/products").then((el) => ({ default: el.Products }))
);
const ProductDetailLazy = lazy(() =>
  import("../pages/checkout").then((el) => ({
    default: el.Checkout,
  }))
);
const HomelLazy = lazy(() =>
  import("../pages/home").then((el) => ({
    default: el.HomePage,
  }))
);
export default App;
