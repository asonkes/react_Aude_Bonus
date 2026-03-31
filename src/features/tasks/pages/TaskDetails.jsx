import { NavLink, useParams } from "react-router"

export const TaskDetails = () => {

  // Pour récupérer les paramètres de route
  // useParams() est une hook qui renvoie un objet contenant tous les paramètres de la route actuelle
  // On doit en extraire celui qui nous intéresse via le petit nom qu'on lui a donné après les : dans notre fichier de routes

  const {id} = useParams();

  return (
    <>
        <section>
            <NavLink>Revenir à la liste des tâches</NavLink>
            <h1>Tâche n° {id}</h1>
        </section>
    </>
  )
}
