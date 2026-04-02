import { LoginForm } from "../components/LoginForm"

export const Login = () => {
  return (
    <div>
        <section>
            <p className="font-chewy py-12 text-primary-800 text-4xl">Formulaire de Connexion</p>
        </section>
        <section>
            <LoginForm/>
        </section>
    </div>
  )
}
