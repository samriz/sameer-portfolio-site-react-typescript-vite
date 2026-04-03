import PageTemplate from "./pagetemplate.tsx";
import Resume from "./misc/SameerRizviResume.pdf";
import { DownloadButton } from './components/buttons.tsx';
import { EducationDetails, ProfessionalExperienceDetails, SkillsDetails } from "./components/aboutdetails.tsx";

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
                    <EducationDetails/>
                    <ProfessionalExperienceDetails/>
                    <SkillsDetails/>
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