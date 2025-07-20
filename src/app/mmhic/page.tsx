// import Image from "next/image";
// import styles from "../page.module.css";
import WorkLayout from "../components/workPage";
import workStyles from "../components/work.module.css"

export default function MMHIC() {
    let mmhicdets = [
        {label: "Role", value: "Student"},
        {label: "Timeline", value: "Fall '24"},
        {label: "Class", value: "Deep Learning in Genomics"},
        {label: "Skills Used", value: "Deep Learning in Genomics"}
    ]
    return (
        <WorkLayout 
            title="Multimodal HiC Matrix Reconstruction"
            img_src="/pred_chr17_hic_vis.png"
            img_alt="Graphic Overview of MMHIC Project"
            details={mmhicdets}
        >
            <span className={workStyles.section}>
                <h1 className={workStyles.sectionHeader}>
                    Overview
                </h1>
                <p className={workStyles.sectionText}>
                    As the final project for Deep Learning in Genomics, I worked with a team of undergraduate and graduate students to develop a multimodal deep learning model which can upscale complex and costly, yet highly informative HiC genomic interaction matrices.
                </p>
            </span>

            <span className={workStyles.section}>
                <h1 className={workStyles.sectionHeader}>
                    Background
                </h1>
                <p className={workStyles.sectionText}>
                    As the final project for Deep Learning in Genomics, I worked with a team of undergraduate and graduate students to develop a multimodal deep learning model which can upscale complex and costly, yet highly informative HiC genomic interaction matrices.

                    HiC matrices are experimentally gathered maps which detail the frequency of interaction between different genomic sections.

                    HiC matrices have been key in determining genomic structure, organization, and functionality, with higher resolution maps holding more specificity and detail about the genome.
                </p>

                <p className={workStyles.sectionText}>
                    Though low resolution HiC experimentation is relatively common place, high resolution HiC maps still remain costly and instensive to gather.

                    Therefore, our team focused on a method which could predict high resolution matrices at a high quality from just low resolution inputs. Moreover, we benchmarked our results against related papers, even while training with significantly less resources.
                </p>
            </span>            
        </WorkLayout>
    );
}
