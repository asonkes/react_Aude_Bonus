import App from "./App";
import { NotFound } from "./layout/pages/NotFound";
import { Home } from "./layout/pages/Home";
import TaskHome from "./features/tasks/pages/TaskHome";
import { TaskDetails } from "./features/tasks/pages/TaskDetails";

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
                element: <Home/>
            },
            {
                path: '/tasks',
                element: <TaskHome/>
            },
            {
                path: '/promodoro',
                element: <div>Page en +</div>
            },
            {
                path: 'task/:id',
                element: <TaskDetails/>             
            },

            // Toujours à mettre en dernier
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
]
