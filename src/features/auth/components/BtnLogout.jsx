import { useSetAtom } from "jotai"
import { tokenAtom } from "../../../atoms/auth.atom"

export function BtnLogout() {

    // Récupère le setter de l'atom
    const setToken = useSetAtom(tokenAtom);

    // Suppression du token
    const handleLogout = () => {
        setToken(null);
    }

    return (
        <button className="btn flex flex-row gap-0.5" onClick={handleLogout}>
            <span className="">Me déconnecter</span>
            <span className="whitespace-nowrap hidden lg:block"></span>
        </button>
    )
}

// Attention ici ne pas mettre useNavigate('/') ==> pour rediriger la personne vers la page d'accueil
// Ca depend si la personne est obligée d'eêtre connectée ou pas...
// Exemple.. pour acheter les produits...