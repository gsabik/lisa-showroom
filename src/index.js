import React from "react"
import { createRoot } from "react-dom/client"
import { ChakraProvider } from "@chakra-ui/react"
import App from "./App";
import "./index.css";

const divRoot = document.getElementById("root");
const root = createRoot(divRoot);

root.render(
    <ChakraProvider>
      <App/>
    </ChakraProvider>
);
