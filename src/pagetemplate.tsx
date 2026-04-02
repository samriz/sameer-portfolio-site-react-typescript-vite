import type { ReactNode } from "react";

interface IntroProps
{
    header_id: string;
    content: ReactNode;
}

export function Intro({ header_id, content }: IntroProps)
{
    return (
        <div id={header_id} className="intro jumbotron">{content}</div>
    );
}

interface PageTemplateProps
{
    intro_id: string;
    intro_content: ReactNode;
    main_id: string;
    main_content: ReactNode;
}

export default function PageTemplate({ intro_id, intro_content, main_id, main_content }: PageTemplateProps)
{
    return (     
        <div className="allButFooter">
            <Intro header_id={intro_id} content={intro_content}/>
            <main id={main_id} className="contents">{main_content}</main>
        </div>
    );
}