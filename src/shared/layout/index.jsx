import Header from '../components/header/index'
import { Outlet } from 'react-router';
import Footer from '../components/footer';
import './index.css';

function Layout() {
    return(
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <div className='footerLayout'>
                <Footer/>
            </div>
        </>
    );
}

export default Layout;