import App from "./App";
import { NotFound } from "./layout/pages/NotFound";

/**
 * @type {@import ('react-router').RouteObject[]}
 */
export const routes =  [
    {
        path: '/', 
        element : <App />,
        children: [
            {
                /** True indique ==> oui je suis sur la page d'accueil */
                index: true,
                element: <div>Home Page</div>
            },
            {
                path: '/tasks',
                element: <div>Mes tâches à faire</div>
            },
            // {
            //     path: '',
            //     element: <div></div>
            // },

            // Toujours à mettre en dernier
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
]
