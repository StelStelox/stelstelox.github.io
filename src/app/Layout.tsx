import Header from "../shared/ui/Header";
import { Outlet } from "react-router";

function Layout() {
    return (
        <>
            <Header/>
            <main className="grid min-h-[calc(100vh-(70px+1.5rem))]"><Outlet/></main>
        </>
    );
};

export default Layout;
