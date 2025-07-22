import HomePage from "../pages/HomePage/HomePage";
import AuthPage from "../pages/AuthPage/AuthPage";
const appRoutes = [
    {
        'path':'/',
        'redirect':'/login',
        'element':<AuthPage/>
    },
    {
        'path':'/login',
        'element':<AuthPage/>
    },
    {
        'path':'/home',
        'element':<HomePage/>
    },
  ]


export default appRoutes;