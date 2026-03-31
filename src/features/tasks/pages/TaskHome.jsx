import { NavLink } from "react-router"

const TaskHome = () => {
  return (
    <>
        <section className="py-6 px-12 flex items-center gap-6">
            <img className="w-40 " src="./icons/duck_logo.svg" alt="La grosse tête de Ducky" />
            <h1 className="text-3xl text-primary-800 font-chewy">Olala, tu as plein de tâches à faire !</h1>
        </section>

        <section className="flex flex-col px-12">
            {/** TODO : Normalement, il y aura les tâhces d el'API, là on va juste faire des liens vers des tâches inexistantes pour comprendre le routing */}

            <NavLink to="/task/1" className="text-center cursor-pointer py-2 px-4 my-4 border-2 border-amber-500 rounded-lg hover:bg-primary-400">Voir détails de la tâche 1</NavLink>
            <NavLink to="/task/2" className="text-center cursor-pointer py-2 px-4 my-4 border-2 border-amber-500 rounded-lg hover:bg-primary-400">Voir détails de la tâche 2</NavLink>
            <NavLink to="/task/3" className="text-center cursor-pointer py-2 px-4 my-4 border-2 border-amber-500 rounded-lg hover:bg-primary-400">Voir détails de la tâche 3</NavLink>
        </section>
    </>
  )
}

export default TaskHome