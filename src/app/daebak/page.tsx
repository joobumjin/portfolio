import Image from "next/image";
// import styles from "../page.module.css";
import {WorkLayout, CaptionedImage} from "../components/workPage";
import workStyles from "../components/work.module.css"

export default function DAEBAK() {
    let daebakdets = [
        {label: "Role", value: "Vice Director, Performer"},
        {label: "Timeline", value: "Fall '21 - Spring '25"},
        {label: "Location", value: "Brown University"},
        {label: "Skills", value: "Management of Logisitcs and Members, Spreadsheets"}
    ]
    return (
        <WorkLayout 
            title="DAEBAK Dance Team"
            img_src="/daebaklogo.jpg"
            img_alt="DAEBAK Logo Projection"
            details={daebakdets}
        >
            <span className={workStyles.section}>
                <h1 className={workStyles.sectionHeader}>
                    Overview
                </h1>
                <p className={workStyles.sectionText}>
                    DAEBAK is Brown University and Rhode Island School of Design's Kpop dance team! 
                </p>

                <p className={workStyles.sectionText}>    
                    With over 30 different performers and up to 40 performances per year, DAEBAK is a surprisingly challenging complex operation behind the scenes.

                    To keep up with the workload, we had an Executive Board (EB) of up to 14 members.
                </p>

                <p className={workStyles.sectionText}>    
                    Over my several years as a member, I have worn many different hats and been under a couple different official titles - perfomer, communications chair, secretary, and vice director.
                </p>
            </span>

            <span className={workStyles.section}>
                <h1 className={workStyles.sectionHeader}>
                    Logsitics and Management
                </h1>

                <p className={workStyles.sectionText}>
                    Most recently, as first a Secretary and then a Vice Director, I was responsible for the logistics of the DAEBAK operation!
                </p>

                <p className={workStyles.sectionText}>
                    Most simply, I scheduled and officially booked every room and space from Brown University campus used by DAEBAK and made countless Google Forms and Google Spreadsheets.
                </p>

                <p className={workStyles.sectionText}>
                    To book rooms and spaces, I first needed to ensure that all my requests complied with Brown's Student Activities Office's regulations and prerequisites, as outlined through their handbook. 

                    With rules and restrictions changing yearly, it was important that I stayed up to date with the documentation throughout the years, making sure to reference specific sections to make sure DAEBAK was using the right tools in the right circumstances.
                </p>

                <p className={workStyles.sectionText}>
                    The remainder of my responsibilities revolved around forms and data. 
                </p>
            </span>            

            <span className={workStyles.section}>
                <h1 className={workStyles.sectionHeader}>
                    Spreadsheets and Forms
                </h1>

                <p className={workStyles.sectionText}>
                    In DAEBAK, EB used Google Forms and Google Sheets as a free service which allows us to collect and aggregate important responses in real time.
                </p>

                <p className={workStyles.sectionText}>
                    Historically, data aggregation across all of these forms was an intensive, manual process. However, as I watched the club grow in member count, audience size, and budget, I developed a personal initiative to automate this process in order to simultaneously reduce the manual workload and reduce the chance for mistakes.
                </p>

                <p className={workStyles.sectionText}>
                    Thus, between Fall 2023 and Spring 2025, I ultimately developed a system of Google Sheets for our Performer Casting List, Performer Practice Availability Aggregation, and Audience Member Ticket Aggregation. 

                    These spreadsheets would take in responses from their relevant Google Forms in real time and organize the information in those responses into important and relevant visualizations / representations.
                </p>

                <p className={workStyles.sectionText}>
                    In order to organize and aggregate these form responses, I often used extensive code and functions in Google Sheets.

                    I became very familiar with tools like mapping, filtering, querying, RegEx matching, and conditional formatting as I manipulated arrays and tables full of text, numbers, and dates.
                </p>

                <p className={workStyles.sectionText}>
                    With so much code that supported DAEBAK EB throughout essential tasks, I also developed internal documentation to pass down for future generations of EB members.
                </p>
            
                <CaptionedImage 
                    img_src="/sample_sched.png"
                    img_alt="Example Schedule Generated Through Google Form Responses and Sheets Code"
                    caption="asdf"
                />

            </span>  
            

            <span className={workStyles.section}>
                <h1 className={workStyles.sectionHeader}>

                </h1>

                <p className={workStyles.sectionText}>

                </p>
            </span>                      

        </WorkLayout>
    );
}
