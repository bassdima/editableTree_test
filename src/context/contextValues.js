import { useContext } from "react";
import { NodeListContext } from "./context";

export const useNodeContext = () => useContext(NodeListContext);
