export const Home = () => {
  return (
    <>
    <section className="py-12 px-4 flex flex-col gap-4 text-primary-800 items-start">
        <h1 className="text-4xl">
            Bienvenue sur
            <span className="text-secondary-400"> Pro' </span>
            Duck
            <span className="text-secondary-400"> 'Trivity </span>
            !
        </h1>
        <h2 className="text-2xl">Le site pour booster ta productivité.</h2>
        <button className="btn">Demander de l'aide à Ducky</button>
    </section>
    </>
  )
}
