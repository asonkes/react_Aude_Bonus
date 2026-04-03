import { atom } from "jotai";

// Atom qui stocke le token
export const tokenAtom = atom(null);

// Atom dérivé qui représent l'état de connection
// Renvoie true ou false ==> si la connection à eu lieu ou pas
export const isConnectAtom = atom((get) => {
  const token = get(tokenAtom);
  return token !== null;
});
