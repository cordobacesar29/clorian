import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { SnackbarProvider } from "./providers/SnackBarProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
