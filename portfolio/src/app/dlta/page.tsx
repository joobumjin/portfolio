import Image from "next/image";
import styles from "../page.module.css";
import WorkLayout from "../components/workPage";

export default function DLTA() {
    let dets = [
        {label: "Role", value: "Undergraduate Teaching Assistant"},
        {label: "Timeline", value: "May '22 - Present"}
    ]
    return (
        <WorkLayout 
            title="TAing CSCI1470/2470 (Graduate) Deep Learning"
            img_src=""
            img_alt="Graphic Overview of my DL TA Work"
            details={dets}
        >
            <a>asdf</a>
        </WorkLayout>
    );
}
