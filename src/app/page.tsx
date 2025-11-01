import Image from "next/image";
import styles from "./page.module.css";
import Stack from '@mui/material/Stack';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import {ExpTile, ProjTile, HyperLink} from './components/tiles'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Bumjin Joo</p>
      </div>

      <div className={styles.center}>
        <div className={styles.mainSplit}>
          <div className={styles.intro}>
            <p>{`Hi, I'm Bumjin`}</p>
          </div>
          <div className={styles.desc}>
            <p>
              {`
                I'm a Machine Learning Engineer working towards an MSc in ML/AI @ Brown CS. 
                I love learning about how machines... learn!
                While I'm not engineering, you can usually find me in the dance studio with my team.
              `}
            </p>
          </div>
        </div>
      </div>

      <h1 className={styles.sectionHeader}>experience</h1>
        <ExpTile 
          org="Brown CS "
          link="https://cs.brown.edu/"
          loc="Providence, RI"
          position="Course Dev, Teaching Assistant"
          date="May 2022 - Present"
        >
          <span className={styles.sub}>
            <span>
              <h4>Graduate Deep Learning</h4> <p>(Sept 2025 - )</p>
            </span>
            <ul>
              <li>
                utilized GitHub Actions to automatically verify internal code functionality on every update
              </li>
              <li>
                helped students with transformers, autoencoders, diffusion, and more!
              </li>
            </ul>
          </span>  
            
          <span className={styles.sub}>  
            <span>
              <h4>Computer Vision</h4> <p>(Jan 2025 - May 2025)</p>
            </span>
            <ul>
              <li>
                asdf
              </li>
            </ul>
          </span>

          <span className={styles.sub}>  
            <span>
              <h4>Undergrad + Graduate Deep Learning</h4> <p>(May 2022 - May 2023, Jan 2024 - Dec 2024)</p>
            </span>
            <ul>
              <li>
                developed and refined course content (informational documents, labs, coding assignments) for 300+ concurrent students
              </li>
              <li>
                prototyped new ViT assignment which used transformers for generative image captioning
              </li>
              <li>
                introduced Beras: a manual reimplementation of Tensorflow & PyTorch auto-differentiation tools for deep, gradient optimization models
              </li>
              <li>
                helped students on topics including language modeling, transformers, GANs, and more
              </li>
              <li>
                mentored student groups through research-style deep learning projects
              </li>
            </ul>
          </span>
        </ExpTile>

        <ExpTile 
          org="Singh Lab @ Brown"
          link="https://rsinghlab.org/"
          loc="Providence, RI"
          position="Student Researcher"
          date="July 2022 - July 2025"
        >
          <span className={styles.sub}>
            <span>
              <h4>Graduate Deep Learning</h4> <p>(Sept 2025 - )</p>
            </span>
            <ul>
              <li>
                utilized GitHub Actions to automatically verify internal code functionality on every update
              </li>
              <li>
                helped students with transformers, autoencoders, diffusion, and more!
              </li>
            </ul>
          </span>
        </ExpTile>

        <ExpTile 
          org="Mahmood Lab"
          link="https://faisal.ai/"
          loc="Cambridge, MA"
          position="Student Researcher"
          date="July 2022 - July 2025"
        >
          <span className={styles.sub}>
            <span>
              <h4>Graduate Deep Learning</h4> <p>(Sept 2025 - )</p>
            </span>
            <ul>
              <li>
                utilized GitHub Actions to automatically verify internal code functionality on every update
              </li>
              <li>
                helped students with transformers, autoencoders, diffusion, and more!
              </li>
            </ul>
          </span>
        </ExpTile>

      <h1 className={styles.sectionHeader}>projects</h1>
      <ProjTile
        name="GraphSC"
        ext={<Stack direction={{ xs: 'column', sm: 'row' }} alignItems="end" spacing={0}>
                <a className={styles.button}><TextSnippetIcon/> <p>Report</p></a>
                <a className={styles.button}><GitHubIcon/> <p>Github Link</p></a>
             </Stack>}
      >
        <span className={styles.sub}>
            <p>asdf</p>
          </span>
      </ProjTile>

      <ProjTile
        name="YogaSplat"
        ext={<Stack direction={{ xs: 'column', sm: 'row' }} alignItems="end" spacing={0}>
                <a className={styles.button}><TextSnippetIcon/> <p>Report</p></a>
                <a className={styles.button}><GitHubIcon/> <p>Github Link</p></a>
             </Stack>}
      >
        <span className={styles.sub}>
            <p>asdf</p>
          </span>
      </ProjTile>

      <ProjTile
        name="MAE Fine Tuning"
        ext={<Stack direction={{ xs: 'column', sm: 'row' }} alignItems="end" spacing={0}>
                <a className={styles.button}><TextSnippetIcon/> <p>Report</p></a>
                <a 
                className={styles.button}
                href="https://github.com/joobumjin/mae_cs2952x"
                target="_blank"
                ><GitHubIcon/> <p>Github Link</p></a>
             </Stack>}
      >
        <span className={styles.sub}>
            <p>This project aimed to probe the Self Supervised Learning properties of a </p><HyperLink text={"Masked Autoencoder"} href="https://arxiv.org/abs/2111.06377"/>

            <p>
            The training regime consisted of pretraining on unlabeled images and then training a linear probe on the pretrained visual encoder to evaluate the information contained within pretrained representations.

            The MAE architecture is focused on learning to reconstruct images, given a partially masked out version of those images, using an autoencoder model. Below are two different reconstructions, one from the train split and one from the test split.
            </p>
          </span>
      </ProjTile>

      <ProjTile
        name="BertQA"
        ext={<Stack direction={{ xs: 'column', sm: 'row' }} alignItems="end" spacing={0}>
                <a className={styles.button}><TextSnippetIcon/> <p>Report</p></a>
                <a className={styles.button}><GitHubIcon/> <p>Github Link</p></a>
             </Stack>}
      >
        <span className={styles.sub}>
            <p>asdf</p>
          </span>
      </ProjTile>

      <h1 className={styles.sectionHeader}>community involvement</h1>
      
      <ProjTile
        name="DAEBAK"
        ext={<Stack direction={{ xs: 'column', sm: 'row' }} alignItems="end" spacing={0}>
                <a className={styles.button}><TextSnippetIcon/> <p>Report</p></a>
                <a className={styles.button} href="https://drive.google.com/drive/folders/1sDu__-1lZsyLlKTf1YJlNAE49XaZiFq9?usp=sharing" target="_blank">
                  <AddToDriveIcon/> <p>Google Drive Sample</p>
                </a>
             </Stack>}
      >
        <span className={styles.sub}>
            <p>asdf</p>
          </span>
      </ProjTile>
      
    </main>
  );
}
