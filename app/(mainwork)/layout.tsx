import { Navbar } from "./_components/navbar";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({children}: MainLayoutProps) => {
    return(
        <div>
            <Navbar/>
            {children}
        </div>
    );
}

export default MainLayout;