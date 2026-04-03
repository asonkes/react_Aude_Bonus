import { useAtomValue } from "jotai";
import { isConnectAtom } from "../../../atoms/auth.atom";
import { Navigate } from "react-router";

// Si on veut un composant ouvrant/fermant, il faut mettre 'children' en props
export function PageProtected ({children}) {

    const isConnect = useAtomValue(isConnectAtom);

    // Si le token existe ou pas...
    if(!isConnect) {
        return <Navigate to="/auth/login" replace/>
    }

  return (
    children
  )
}
