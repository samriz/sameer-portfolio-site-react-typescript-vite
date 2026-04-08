import { Link } from "react-router-dom";
//import { HashLink } from 'react-router-hash-link';
import PageTemplate from "./pagetemplate";
import Resume from "./misc/SameerRizviResume.pdf";
import { ExternalUrlArrow } from './components/icons';
import LinkedInPicture from "./images/LinkedInPicture1.png";

export default function Home()
{
    return (
        <PageTemplate intro_id={"home"} main_id={"homeMain"}
            intro_content = {
                <>
                    <h2 style={{textDecoration: "underline"}}>Sameer Rizvi's Personal Site</h2>
                    <figure>
                        <a href="https://www.linkedin.com/in/sameer-r-bb788375/" target="_blank" rel="noreferrer"><img src={LinkedInPicture} id="profilepic" className="center" title="Sameer Rizvi" alt="Sameer Rizvi" loading="lazy"/></a>
                        <figcaption>
                            <Link to="/contact" className="pageLink" title="The Contact Page">Contact Me</Link>
                            <br/>
                            <a href={"https://www.linkedin.com/in/sameer-r-bb788375/"} className="pageLink" target={"_blank"} rel="noreferrer" title="My LinkedIn Page">LinkedIn <ExternalUrlArrow/></a>
                        </figcaption>
                    </figure>
                </>
            }
            main_content={homeContent()}
        />
    );
}

const homeContent = () => {
    return (
        <div className={"leftPad"}>
            <p>Welcome to my official Web Portfolio.</p>
            <p>Here, you'll find information pertaining to my academic and professional experiences. This includes, but is not limited to, the following:</p>
            <ul>
                <li>My <Link to={Resume} className="pageLink" title="Link to my Resume" target={"_blank"} rel={"author"}>resume <ExternalUrlArrow/></Link>.</li>
                <li>An 
                    <Link to="/about" className="pageLink" title="The About Page" rel="author"> about</Link> section, detailing my academic and professional history.
                </li>
                <li>My <a href={"https://github.com/samriz"} className="pageLink" target={"_blank"} title="My GitHub Page" rel={"noopener noreferrer"}>GitHub page <ExternalUrlArrow/></a>.</li>
                <li>A way to <Link to="/contact" className="pageLink" title="The Contact Page" rel={"author"}>contact</Link> me.</li>
                {/* <li>
                    <HashLink smooth to={"/#summaryProfessionalSamples"} onClick={this.openProfessionalSamples}>Links</HashLink> to some of my professional work.
                </li> */}
                <li>My code for this site can be found on <a href="https://github.com/samriz/sameer-portfolio-site-react-typescript-vite" className="pageLink" target="_blank" title="Site's GitHub Repo" rel="noopener noreferrer">GitHub <ExternalUrlArrow/></a>.</li>
            </ul>
            <p>Feel free to explore the site and reach out if you have any questions or opportunities!</p>
        </div>
    );
}