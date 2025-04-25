import Header from "../shared/ui/Header";
import { Outlet } from "react-router";

function Layout() {
    return (
        <>
            <Header />
            <main className="flex-grow flex items-center justify-center"><Outlet /></main>
        </>
    );
};

export default Layout;
