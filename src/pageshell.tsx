import React from 'react';
import Menu from "./components/menu";
import MobileMenu from './components/mobilemenu';
import Footer from "./components/footer";
import "./styles/index.css";

interface IndexState
{
    viewportWidth: number;
}

interface PageShellProps
{
    pages: React.ReactNode[];
}

export default class PageShell extends React.Component<PageShellProps, IndexState>
{
    constructor(props)
    {
        super(props);
        window.visualViewport? this.state = { viewportWidth: window.visualViewport.width } : this.state = { viewportWidth: 0 };
    }

    render()
    {
        if(this.state.viewportWidth > 640)
        {
            return (
                <>
                    <Menu/>
                    {this.props.pages}
                    <Footer/>               
                </>
            );
        }
        else
        {
            return (
                <>
                    <MobileMenu/>
                    {this.props.pages}
                    <Footer/>               
                </>
            );
        }
    }

    componentDidMount()
    {
        window.addEventListener("resize", () => {
            //console.log("resizing");
            window.visualViewport? this.setState({viewportWidth: window.visualViewport.width}) : this.setState({viewportWidth: 0});
        });
    }
}