export default function isMobileDevice(): boolean
{
    if(window.visualViewport) return window.visualViewport.width < 640;
    else return false;
}