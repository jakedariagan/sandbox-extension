import { createContext, useContext } from "react";
import { CeramicClient } from "@ceramicnetwork/http-client"
import { ComposeClient } from "@composedb/client";
import { definition } from "@/__generated__/definition.js";
import { RuntimeCompositeDefinition } from "@composedb/types";


/**
 * Configure ceramic Client & create context.
 */
export const ceramic = new CeramicClient("https://experiments.ceramic.dev");

export const composeClient = new ComposeClient({
  ceramic: "https://experiments.ceramic.dev",
  // cast our definition as a RuntimeCompositeDefinition
  definition: definition as RuntimeCompositeDefinition,
});

export const CeramicContext = createContext({ceramic: ceramic, composeClient: composeClient});

export const CeramicWrapper = ({ children }: any) => {
  return (
    <CeramicContext.Provider value={{ceramic, composeClient}}>
      {children}
    </CeramicContext.Provider>
  );
};

/**
 * Provide access to the Ceramic & Compose clients.
 * @example const { ceramic, compose } = useCeramicContext()
 * @returns CeramicClient
 */

export const useCeramicContext = () => useContext(CeramicContext);