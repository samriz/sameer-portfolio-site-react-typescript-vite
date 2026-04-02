import { useEffect } from "react";
import SocialMediaBanner from "./socialmediabanner";

export default function Footer()
{
    useEffect(() => {
        let yearElement = document.getElementById("fullyear") as HTMLSpanElement;
        yearElement.innerHTML = new Date().getFullYear().toString();
    }, []); //The empty array means that this effect will only run once when the component is mounted(added to DOM). Equivalent to componentDidMount() in class components.
    
    return (
        <footer>
            {/* <hr/> */}
            <div>
                <SocialMediaBanner/>
                <p>Copyright &copy; <span id="fullyear"></span> Sameer Rizvi</p>
            </div>
        </footer>
    );
}