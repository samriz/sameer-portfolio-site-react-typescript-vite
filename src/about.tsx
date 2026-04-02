import PageTemplate from "./pagetemplate.tsx";
import Resume from "./misc/SameerRizviResume.pdf";
import { DownloadButton } from './components/buttons.tsx';

export default function About()
{
    return (
        <PageTemplate intro_id={"about"} main_id={"aboutMain"}
        intro_content={
            <>
            <h2>About</h2>
            </>
        }
        main_content={
            <>
            <p>Click each header to expand it's section:</p>
                <div className={"leftPad"} id={"divAboutDetails"}>
                    <details className="aboutDetails">
                        <summary>Education</summary>
                        <table id="educationtable" cellSpacing="5" cellPadding="5" width="90%" border={0}>
                        <tbody>
                            <tr className="aboutTableRow">
                                <td>2021</td> 
                                <td>
                                    Syracuse University &mdash; Syracuse, NY
                                    <br/>              
                                    <strong>M.S. in Computer Science</strong>
                                    <br/>
                                </td>
                            </tr>
                            <tr className="aboutTableRow">
                                <td>2015</td> 
                                <td>
                                    Loyola University Chicago &mdash; Chicago, IL 
                                    <br/>              
                                    <strong>B.S. in Computer Science</strong>, Cum Laude
                                    <br/>
                                </td> 
                            </tr>
                        </tbody>
                        </table>
                    </details>

                    <details className="aboutDetails">
                        <summary>Professional experience</summary>
                        <table id="employmenttable" cellSpacing="5" cellPadding="5" width="90%" border={0}>
                        <tbody>
                            <tr className="aboutTableRow">
                                <td>2022-2025</td> 
                                <td>
                                    <strong>Consilio &mdash; Remote</strong><br/>              
                                    <strong>Software Engineer</strong>
                                    <br/>
                                    <ul>
                                        <li>Researched, diagnosed, troubleshooted, and identified solutions to resolve software application issues associated with Consilio’s web-based eDiscovery platform, “Sightline”.</li>
                                        <li>Collaborated with team members to maintain and improve the components of Sightline.</li>
                                        <li>Identified areas of improvement related to the efficiency of Sightline and saw it through all phases of the project lifecycle: requirements gathering, solution design, application development, and testing.</li>
                                        <li>Leveraged agile methodologies like Scrum and full stack development in HTML, CSS, JavaScript, React, TypeScript, ASP.NET MVC, C#, and SQL to bring about solutions for law firms and their clients.</li>
                                    </ul>                        
                                </td>
                            </tr>
                            <tr className="aboutTableRow">
                                <td>2021-2022</td> 
                                <td>
                                    <strong>Spinutech, LLC &mdash; Remote</strong><br/>              
                                    <strong>Web Developer</strong>
                                    <br/>     
                                    <ul>
                                        <li>New development and maintenance of ASP.NET web applications including applications built using MVC and Webforms frameworks; languages that include C#, VB.NET, JavaScript, HTML, VBScript, and razor; and MySQL and Microsoft SQL Server databases for data storage.</li>
                                        <li>Utilized Git and Subversion for Version Control.</li>
                                        <li>Development of custom solutions related to proprietary web-based CMS called “Spinternet”.</li>
                                        <li>Coordinated with Project Managers to deliver products and solutions to clients.</li>
                                        <li>Collaborated with other developers/team members to improve efficiency and timely delivery of solutions.</li>
                                        <li>Wrote clean, consistent code matching established guidelines and patterns.</li>
                                        <li>Leveraged work, from website maintenance tasks to new development on existing sites, for several different clients and deliver quality solutions within deadlines.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="aboutTableRow">
                                <td>2018</td> 
                                <td>
                                    <strong>American Hotel Register Company &mdash; Vernon Hills, IL</strong><br/>              
                                    <strong>Junior Software Developer</strong>
                                    <br/>     
                                    <ul>
                                        <li>Assisted in new development and maintenance of ASP.NET MVC e-commerce website (C# as back-end).</li>
                                        <li>New development included implementing HTML forms with client-side and server-side validation, implementing asynchronous operations in controller, retrieving information (using ADO.NET Entity Data Models and LINQ) from SQL Server database, etc.</li>
                                        <li>Maintenance included product support by responding to user requests and investigating user concerns.</li>
                                        <li>Other tasks included code refactorings and adding comments in code files.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="aboutTableRow">
                                <td>2016-2018</td> 
                                <td>
                                    <strong>ACS Group &mdash; New Berlin, WI</strong>
                                    <br/>              
                                    <strong>Information Systems Specialist</strong>
                                    <br/>      
                                    <ul>
                                        <li>Constructed a separate <q>Configurator</q> &mdash; an application that allows Sales and Engineering to configure any product offered by the company, generate quotes and sales orders - for each product offered by the company.</li>
                                        <li>Tested inside of Microsoft Dynamics which is the platform used to launch the <q>Configurator</q>, while providing Microsoft Dynamics training to end users.</li>
                                        <li>Interacted, introduced, and reviewed requirements with Sales, Engineering and Production departments to ensure proper solution is delivered in a timely manner.</li>
                                    </ul>
                                </td> 
                            </tr>
                            <tr className="aboutTableRow">
                                <td>2014-2015</td> 
                                <td>
                                    <strong>Parker Hannifin Corporation &mdash; Lincolnshire, IL</strong> 
                                    <br/>              
                                    <strong>Software Development Intern</strong>
                                    <br/>      
                                    <ul>
                                        <li>Built ASP.NET webforms application (C# for backend) for a Microsoft SQL Server database.</li>
                                        <li>Hosted web application on Windows Server 2012 via IIS.</li>
                                        <li>Designed barcode labels using Zebra Designer Pro software.</li>
                                        <li>Answered help desk tickets and addressed any technical employee concerns related to software and/or hardware.</li>
                                    </ul>
                                </td> 
                            </tr>
                        </tbody>
                        </table>
                    </details>

                    <details className="aboutDetails">
                        <summary>Skills</summary>
                        <table id="skillstable" cellSpacing="5" cellPadding="5" width="90%" border={0}>
                            <tbody>
                                {/* <thead> */}
                                    <tr>
                                        <th>Programming and Scripting Languages</th>
                                    </tr>
                                {/* </thead> */}
                                <tr>
                                    <td>
                                        <ul>                                            
                                            <li className="floatingListItem">HTML</li>
                                            <li className="floatingListItem">CSS</li>
                                            <li className="floatingListItem">JavaScript</li>
                                            <li className="floatingListItem">TypeScript</li>
                                            <li className="floatingListItem">C#</li>
                                            <li className="floatingListItem">Visual Basic</li>
                                        </ul>
                                    </td>
                                </tr>

                                {/* <thead> */}
                                    <tr>
                                        <th>Frameworks/Libraries/Runtimes</th>
                                    </tr>
                                {/* </thead> */}
                                <tr>
                                    <td>
                                        <ul>
                                            <li className="floatingListItem">JavaScript Libraries
                                                <ul>
                                                    <li>React (this site is built using React)</li>
                                                    <li>jQuery</li>                                                    
                                                </ul>
                                            </li>
                                            <li className="floatingListItem">ASP.NET
                                                <ul>
                                                    <li>MVC</li>
                                                    <li>Web Forms</li>
                                                </ul>
                                            </li>                                                                                        
                                            <li className="floatingListItem">nodeJS
                                                <ul>
                                                    <li>Frameworks/Libraries
                                                        <ul>
                                                            <li>Express</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>

                                {/* <thead> */}
                                    <tr>
                                        <th>Databases</th>
                                    </tr>
                                {/* </thead> */}
                                <tr>
                                    <td>
                                        <ul>
                                            <li className="floatingListItem">SQL Server</li>
                                            <li className="floatingListItem">MySQL</li>
                                            <li className="floatingListItem">MongoDB</li>
                                        </ul>
                                    </td>
                                </tr>

                                {/* <thead> */}
                                    <tr>
                                        <th>Tools</th>
                                    </tr>
                                {/* </thead> */}
                                <tr>
                                    <td>
                                        <ul>
                                            <li className="floatingListItem">Visual Studio</li>
                                            <li className="floatingListItem">Visual Studio Code</li>
                                            <li className="floatingListItem">GitHub Desktop</li>
                                            <li className="floatingListItem">Internet Information Services (IIS) Manager</li>
                                            <li className="floatingListItem">SQL Server Management Studio</li>
                                            <li className="floatingListItem">MySQL Workbench</li>
                                            {/* <li className="floatingListItem">MongoDB Compass</li> */}
                                            <li className="floatingListItem">Notepad++</li>
                                            <li className="floatingListItem">BeyondCompare</li>
                                            <li className="floatingListItem">FileZilla</li>
                                            <li className="floatingListItem">Event Viewer</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </details>
                </div>
                <br/>
                <div style={{textAlign: "center",}}>
                    <DownloadButton file={Resume} buttonText={"DOWNLOAD RESUME"} downloadedFileName="SameerRizviResume"/>
                    <br/>
                    <br/>
                </div>                
            </>
        }
    />);
}