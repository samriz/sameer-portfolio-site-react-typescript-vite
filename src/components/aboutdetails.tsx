export function EducationDetails() 
{
    return (
        <details className="aboutDetails">
            <summary>Education</summary>
            <table id="educationtable" cellSpacing="5" cellPadding="5" width="90%" border={0}>
                <tbody>
                    <tr className="aboutTableRow">
                        <td>2021</td>
                        <td>
                            Syracuse University &mdash; Syracuse, NY
                            <br />
                            <strong>M.S. in Computer Science</strong>
                            <br />
                        </td>
                    </tr>
                    <tr className="aboutTableRow">
                        <td>2015</td>
                        <td>
                            Loyola University Chicago &mdash; Chicago, IL
                            <br />
                            <strong>B.S. in Computer Science</strong>
                            <br />
                        </td>
                    </tr>
                </tbody>
            </table>
        </details>
    );
}

export function ProfessionalExperienceDetails() 
{
    return (
        <details className="aboutDetails">
            <summary>Professional experience</summary>
            <table id="employmenttable" cellSpacing="5" cellPadding="5" width="90%" border={0}>
                <tbody>
                    <tr className="aboutTableRow">
                        <td>2022-2025</td>
                        <td>
                            <strong>Consilio &mdash; Remote</strong><br />
                            <strong>Software Engineer</strong>
                            <br />
                            <ul>
                                <li>Managed multiple concurrent technical investigations and requests as Level 3 Support, prioritizing issues based on disruption to company processes.</li>
                                <li>Supported and developed new features for Sightline &ndash; Consilio's proprietary web-based eDiscovery platform &ndash; including a more practical searching mechanism, which increased Sightline-use productivity by 10%.</li>
                                <li>Participated in the full software lifecycle including requirements analysis, solution design, development, and testing.</li>
                                <li>Tech Stack: .NET, C#, JavaScript, NodeJS, React, HTML, CSS, SQL.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr className="aboutTableRow">
                        <td>2021-2022</td>
                        <td>
                            <strong>Spinutech, LLC &mdash; Remote</strong><br />
                            <strong>Web Developer</strong>
                            <br />
                            <ul>
                                <li>Worked in a fast-paced marketing setting, where tasks revolved around developing new features and improving existing ones in several clients&apos; websites including implementing new forms and modals, hiding/unhiding specific components based on a set of criteria, etc.</li>
                                <li>Cross-collaborated with Project Managers and clients to discuss software feature updates through self-lead project update meetings.</li>
                                <li>Oversaw the implementation and maintenance of reCAPTCHA v3 to all forms in clients&apos; websites, which averaged 3 forms per site in over 50 sites.</li>
                                <li>Tech Stack: .NET, VB, C#, JavaScript, HTML, CSS, SQL.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr className="aboutTableRow">
                        <td>2018</td>
                        <td>
                            <strong>American Hotel Register Company &mdash; Vernon Hills, IL</strong><br />
                            <strong>Junior Software Developer</strong>
                            <br />
                            <ul>
                                <li>Assisted in the development and maintenance of American Hotel Register Company&apos;s e-commerce platform and collaborated with developers to produce and maintain optimal performance.</li>
                                <li>Researched, investigated, and resolved user issues through support requests and system troubleshooting pertaining to API connection issues.</li>
                                <li>Assisted and taught other web developers to use Postman to help diagnose systemic issues related to API requests.</li>
                                <li>Tech Stack: .NET, C#, JavaScript, HTML, CSS, SQL.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr className="aboutTableRow">
                        <td>2016-2018</td>
                        <td>
                            <strong>ACS Group &mdash; New Berlin, WI</strong>
                            <br />
                            <strong>Information Systems Specialist</strong>
                            <br />
                            <ul>
                                <li>Implemented a rule-based configuration system for 30+ products, enabling Sales and Engineering teams to generate precise quotes, reducing pricing errors by 40% and saving company revenue, all while improving and providing customer service and satisfaction.</li>
                                <li>Researched, informed, worked with, and/or requested requirements from Sales, Engineering, and Production teams/departments to help develop and deliver software solutions.</li>
                                <li>Provided training and technical support to salespeople and engineers for use of configuration systems within Microsoft Dynamics CRM.</li>
                            </ul>
                        </td>
                    </tr>
                    <tr className="aboutTableRow">
                        <td>2014-2015</td>
                        <td>
                            <strong>Parker Hannifin Corporation &mdash; Lincolnshire, IL</strong>
                            <br />
                            <strong>Software Development Intern</strong>
                            <br />
                            <ul>
                                <li>Built an ASP.NET webforms application, for a team of mechanical engineers, to serve as a front-end for a SQL Server database of various tools and parts pertaining to hydraulic cartridge valves.</li>
                                <li>Resolved internal help desk tickets related to a wide array of IT issues; which included investigating and resolving software bugs, diagnosing connection issues, investigating failing peripherals, etc.</li>
                                <li>Tech Stack: .NET, C#, JavaScript, HTML, CSS, SQL.</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </details>
    );
}

export function SkillsDetails() 
{
    return (
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
                        <th>Tools (including build tools)</th>
                    </tr>
                    {/* </thead> */}
                    <tr>
                        <td>
                            <ul>
                                <li className="floatingListItem">Visual Studio</li>
                                <li className="floatingListItem">Visual Studio Code</li>
                                <li className="floatingListItem">GitHub Desktop</li>
                                <li className="floatingListItem">SQL Server Management Studio</li>
                                <li className="floatingListItem">Vite</li>
                                <li className="floatingListItem">Create React App</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </details>
    );
}