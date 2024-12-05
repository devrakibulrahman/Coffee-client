import { createBrowserRouter } from "react-router-dom";
import AddCoffeePage from "../pages/AddCoffeePage";
import UpdateCoffeePage from "../pages/UpdateCoffeePage";
import CoffeeDetailsPage from "../pages/CoffeeDetailsPage";
import HomePage from "../pages/HomePage";
import NotFound from "../components/NotFound";
import Root from "../Home/Root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/add coffee',
                element: <AddCoffeePage></AddCoffeePage>
            },
            {
                path: '/update coffee',
                element: <UpdateCoffeePage></UpdateCoffeePage>
            },
            {
                path: '/coffee details',
                element: <CoffeeDetailsPage></CoffeeDetailsPage>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ],
    },
]);

export default router;