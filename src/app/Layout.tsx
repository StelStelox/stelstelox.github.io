import Header from "../shared/ui/Header";
import { Outlet } from "react-router";

function Layout() {
    return (
        <>
            <Header/>
            <main className="grid min-h-[100vh]"><Outlet/></main>
        </>
    );
};

export default Layout;
