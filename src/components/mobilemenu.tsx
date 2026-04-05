import { useEffect } from "react";
import { MobileMenuItem } from "./menuitem";

const showOrHideList = () => 
{
    let hamburgerList = document.getElementById("hamburgerList") as HTMLUListElement;
    
    if(hamburgerList.hidden) hamburgerList.hidden = false;
    else hamburgerList.hidden = true;
}

export default function MobileMenu()
{
    useEffect(() => {
        let hamburgerList = document.getElementById("hamburgerList") as HTMLUListElement;
        hamburgerList.hidden = true;

        //add an event listener to the document and if something is clicked on the document and it is not the hamburger button then hide the hamburger list
        document.addEventListener("click", (e) => {
            const hamburgerButton = document.getElementById("hamburgerButton");
            let clickedElement = e.target;
            //if the clicked element is not the hamburger button then hide the hamburger list
            if(clickedElement !== hamburgerButton) hamburgerList.hidden = true;
        });
    }, []); //The empty array means that this effect will only run once when the component is mounted(added to DOM). Equivalent to componentDidMount() in class components.

    return (
        <nav className={"menu"}>
            <div id={"divMobileMenuItems"}>
                <button id="hamburgerButton" className={"fas fa-bars"} onClick={showOrHideList} aria-label="Menu">
                    {/* <i id="hamburgerITag" className={"fas fa-bars"}></i> */}
                </button>
                <ul id={"hamburgerList"}>
                    <li className={"hamburgerListItem"}>
                        <MobileMenuItem
                            href={"/"}
                            text={"sameer"}
                        />
                    </li>
                    <li className={"hamburgerListItem"}>
                        <MobileMenuItem
                            href={"/about"}
                            text={"about"}
                        />
                    </li>
                    <li className={"hamburgerListItem"}>
                        <MobileMenuItem
                            href={"/contact"}
                            text={"contact"}
                        />
                    </li>
                </ul>
            </div>
        </nav>
    );
}