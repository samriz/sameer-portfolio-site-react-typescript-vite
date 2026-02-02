import PageTemplate from "./pagetemplate";
import ContactForm from "./components/contactform";

export default function Contact()
{
    return (
        <PageTemplate intro_id={"contact"} main_id={"contactMain"}
            intro_content={<h1>Contact Me</h1>}
            main_content={
                <>
                    <p style={{textAlign:"center",}}>To contact me, please fill out and submit the form below.</p>
                    {/* <TableForm/> */}
                    <ContactForm/>
                </>
            }
        />
    );
}