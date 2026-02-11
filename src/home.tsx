import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import PageTemplate from "./pagetemplate";
import Resume from "./misc/SameerRizviResume.pdf";
import { ExternalUrlArrow } from './components/icons';
import LinkedInPicture from "./images/LinkedInPicture1.png";

export default class Home extends React.Component
{
    render()
    {
        return (
            <PageTemplate intro_id={"home"} main_id={"homeMain"}
                intro_content={
                <>
                    <h1>Sameer Rizvi</h1>
                    <figure>
                        <a href="https://www.linkedin.com/in/sameer-r-bb788375/" target="_blank" rel="noreferrer"><img src={LinkedInPicture} id="profilepic" className="center" title="Sameer Rizvi" alt="Sameer Rizvi" loading="lazy"/></a>
                        <figcaption>
                            <HashLink smooth to="/#contact" className="textlink" title="The Contact Page">Contact Me</HashLink>
                            <br/>
                            <a href={"https://www.linkedin.com/in/sameer-r-bb788375/"} target={"_blank"} rel="noreferrer" title="My LinkedIn Page">LinkedIn <ExternalUrlArrow/></a>
                        </figcaption>
                    </figure>
                </>
            }
                main_content={this.homeContent()}
            />
        );
    }

    homeContent()
    {
        return (
            <div className={"leftPad"}>
                <p>Welcome to my official Web Portfolio.</p>
                <p>Here, you'll find information pertaining to my academic and professional experiences. This includes, but is not limited to, the following:</p>
                <ul>
                    <li>My <Link to={Resume} title="Link to my Resume" target={"_blank"} rel={"author"}>resume <ExternalUrlArrow/></Link>.</li>
                    <li>An 
                        <HashLink smooth to={"/#about"} title="The About Page" rel="author"> about</HashLink> section, detailing my academic and professional history.
                    </li>
                    <li>My <a href={"https://github.com/samriz"} target={"_blank"} title="My GitHub Page" rel={"noopener noreferrer"}>GitHub page <ExternalUrlArrow/></a>.</li>
                    <li>A way to <HashLink smooth to={"/#contactMain"} title="The Contact Page" rel={"author"}>contact</HashLink> me.</li>
                    {/* <li>
                        <HashLink smooth to={"/#summaryProfessionalSamples"} onClick={this.openProfessionalSamples}>Links</HashLink> to some of my professional work.
                    </li> */}
                    <li>My code for this site can be found on <a href="https://github.com/samriz/sameer-portfolio-site-react-typescript-vite" target="_blank" title="Site's GitHub Repo" rel="noopener noreferrer">GitHub <ExternalUrlArrow/></a>.</li>
                </ul>
            </div>
        );
    }

    openProfessionalSamples(): void
    {
        let summary = document.getElementById("summaryProfessionalSamples") as HTMLElement;
        let details = document.getElementById("samples") as HTMLDetailsElement;
        if(!details.hasAttribute("open")) summary.click();
    }
}