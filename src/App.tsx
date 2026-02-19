import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import PageShell from "./pageshell";

export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route index element={<Index/>}/> */}
                <Route index element={<PageShell pages={[<Home/>]}/>}/>
                <Route path="/about" element={<PageShell pages={[<About/>]}/>}/>
                <Route path="/contact" element={<PageShell pages={[<Contact/>]}/>}/> 
                {/* <Route index element={<PageShell pages={[<Home/>, <About/>, <Contact/>]}/>}/> */}
            </Routes>
        </BrowserRouter>
    );
}
