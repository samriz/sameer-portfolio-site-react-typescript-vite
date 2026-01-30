import React from 'react';
import Menu from "./components/menu";
import MobileMenu from './components/mobilemenu';
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Footer from "./components/footer";
import "./styles/index.css";

interface IndexState
{
    viewportWidth: number;
}

export class Index extends React.Component<{}, IndexState>
{
    /* state: IndexState = {
        viewportWidth: window.visualViewport.width
    }; */
    
    constructor(props)
    {
        super(props);

        if(window.visualViewport) this.state = { viewportWidth: window.visualViewport.width };
        else this.state = { viewportWidth: 0 };
    }

    render()
    {
        if(this.state.viewportWidth > 640)
        {
            return (
                <>
                    <Menu/>
                    <Home/>
                    <About/>
                    <Contact/>
                    <Footer/>               
                </>
            );
        }
        else
        {
            return (
                <>
                    <MobileMenu/>
                    <Home/>
                    <About/>
                    <Contact/>
                    <Footer/>               
                </>
            );
        }
    }

    componentDidMount()
    {
        window.addEventListener("resize", () => {
            //console.log("resizing");
            if(window.visualViewport) this.setState({viewportWidth: window.visualViewport.width});
            else this.setState({viewportWidth: 0});
        });
    }
}