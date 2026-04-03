import App from "./App";
import { NotFound } from "./layout/pages/NotFound";
import { Home } from "./layout/pages/Home";
import TaskHome from "./features/tasks/pages/TaskHome";
import { TaskDetails } from "./features/tasks/pages/TaskDetails";
import { About } from "./layout/pages/About";
import { Faq } from "./layout/pages/Faq";
import { Register } from "./features/auth/pages/Register";
import { Login } from "./features/auth/pages/Login";
import { PageProtected } from "./features/auth/components/PageProtected";

/**
 * @type {@import ('react-router').RouteObject}
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
                element: <PageProtected><TaskHome/></PageProtected>
            },
            {
                path: '/promodoro',
                element: <div>Page en +</div>
            },
            {
                path: '/auth/',
                children: [
                    {
                        path: 'register',
                        element: <Register/>
                    }, 
                    {
                        path: 'login',
                        element: <Login/>
                    }
                ]
            },
            {
                path: '/faq',
                element: <Faq/>
            },
            {
                path: '/about',
                element: <About/>           
            },
            {
                path: 'task/:id',
                element: <PageProtected><TaskDetails/></PageProtected>          
            },

            // Toujours à mettre en dernier
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
]
