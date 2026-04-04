import { useEffect, useState } from 'react';
import Menu from "./components/menu";
import MobileMenu from './components/mobilemenu';
import Footer from "./components/footer";
import "./styles/index.css";

interface PageShellProps
{
    pages: React.ReactNode[];
}

export default function PageShell({pages}: PageShellProps)
{
    const [viewportWidth, setViewportWidth] = useState(window.visualViewport? window.visualViewport.width : 0);

    useEffect(() => {
        window.addEventListener("resize", () => {
            //console.log("resizing from page shell");
            setViewportWidth(window.visualViewport? window.visualViewport.width : 0);
        });
    }, []); //The empty array means that this effect will only run once when the component is mounted(added to DOM). Equivalent to componentDidMount() in class components.
    
    return (
        <>
            {viewportWidth > 640? <Menu/> : <MobileMenu/>}
            {pages}
            <Footer/>
        </>
    );
}