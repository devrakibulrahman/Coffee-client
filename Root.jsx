import { Outlet } from "react-router-dom";
import Header from "./src/layouts/Header";
import Footer from "./src/layouts/Footer";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;