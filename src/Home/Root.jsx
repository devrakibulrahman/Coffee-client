import { Outlet } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import ScrollTop from '../components/ScrollTop';

const Root = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-between">
            <ScrollTop></ScrollTop>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;