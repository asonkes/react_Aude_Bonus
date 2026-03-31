export const NotFound = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-4 grow">
        <h1 className="text-9xl text-primary-800 drop-shadow-sm font-extrabold font-chewy">404</h1>
        <h2 className="font-chewy text-xl">La ressource que vous cherchez n'existe pas!</h2>
        <img className="h-120" src="/images/duck.webp" alt="Image d'un canard" />
    </section>
  )
}
