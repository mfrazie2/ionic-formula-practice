"use client";

import { Provider } from "react-redux";
import ChakraProviders from "./chakra-providers";
import { store } from "../store";

export default function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <ChakraProviders>
        {children}
      </ChakraProviders>
    </Provider>
  )
}
