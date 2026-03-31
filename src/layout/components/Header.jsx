import { NavLink } from "react-router"

export const Header = () => {
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
                    <NavLink className="btn" to="/login">Me connecter</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
