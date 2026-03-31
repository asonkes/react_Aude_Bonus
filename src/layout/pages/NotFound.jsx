export const NotFound = () => {
  return (
    <section className="flex flex-col items-center py-4">
        <h1 className="text-9xl gap-4 py-4 text-primary-800">404</h1>
        <h2 className="text-xl">La ressource que vous cherchez n'existe pas!</h2>
        <img className="h-120" src="/images/duck.webp" alt="Image d'un canard" />
    </section>
  )
}
