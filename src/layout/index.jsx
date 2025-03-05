import Header from '../components/header/index'
import { Outlet } from 'react-router';
import Footer from '../components/footer';

function Layout() {
    return(
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}

export default Layout;