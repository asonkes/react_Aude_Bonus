import { useAtomValue } from "jotai";
import { NavLink } from "react-router";
import { isConnectAtom } from "../../atoms/auth.atom";
import { BtnLogout } from "../../features/auth/components/BtnLogout";

export const Header = () => {

    const isConnect = useAtomValue(isConnectAtom);

  return (
    <header className="flex justify-between py-4 px-8 bg-primary-100">
        <div className="flex items-center gap-4">
            <img className="w-12" src="/icons/duck_logo.svg" alt="Logo du site représentant un canard"></img>
            <p className="text-primary-800 text-2xl uppercase font-bold font-chewy tracking-wider">
                Pro'
                <span className="text-secondary-400">Duck</span>
                'Tivity'
            </p>
        </div>

        <nav className="flex items-center">
            <ul className="flex items-center gap-6 text-lg font-bold">
                <li>
                    <NavLink className="link" to="/">Accueil</NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/tasks">Tâches</NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/promodoro">Promodoro</NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/faq">Faq</NavLink>
                </li>
                <li>
                    <NavLink className="link" to="/about">About</NavLink>
                </li>
                {
                   !isConnect ? (
                    <div className="btn-grp flex flex-row">
                        <li>
                            <NavLink className="btn" to="/auth/login">Me connecter</NavLink>
                        </li>
                        <li>
                            <NavLink className="btn" to="/auth/register">Créer un compte</NavLink>
                        </li>
                    </div>
                   ) :
                   (
                    <BtnLogout/>
                   )
                }
            </ul>
        </nav>
    </header>
  )
}
