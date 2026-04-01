import { RegisterForm } from "../components/RegisterForm"

export const Register = () => {
  return (
    <>
        <section className="py-6 px-12 flex items-center gap-6">
            <h1 className="text-3xl text-primary-800 font-chewèy">Créer un compte</h1>
        </section>

        <section className="flex flex-col px-12 ">
            <RegisterForm/>
        </section>
    </>
  )
}
