import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root";
import AddCoffeePage from "../pages/AddCoffeePage";
import UpdateCoffeePage from "../pages/UpdateCoffeePage";
import CoffeeDetailsPage from "../pages/CoffeeDetailsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
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
    }
]);

export default router;