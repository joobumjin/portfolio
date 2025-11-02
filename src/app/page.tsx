import Image from "next/image";
import styles from "./page.module.css";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import LaunchIcon from '@mui/icons-material/Launch';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {ExpTile, ProjTile, HyperLink, IconHyperLink, TextButtonLink, 
  GithubProjLink, ReportLink, DriveLink} from './components/tiles'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Bumjin Joo</p>
      </div>

      <div className={styles.center}>
        <Stack direction = 'column'
              spacing={2} 
              sx={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
        >
          <div className={styles.intro}>
            <p>{`hi, i'm Bumjin`}</p>
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
          <Grid container
                rowSpacing={{sm: 4, md: 6}}
                columnSpacing={{sm: 0, md: 6}}
                columns = {{sm: 2, md: 4}}
                sx={{
                  justifyItems: "center",
                  alignItems: "center",
                }}
          >
            <Grid size={1}
                  sx={{
                    justifyItems: "center",
                    alignItems: "center",
                  }}
            >
              <IconHyperLink text={<p>Github</p>} href="https://github.com/joobumjin" icon={<GitHubIcon />} />
            </Grid>
            <Grid size={1}
                  sx={{
                    justifyItems: "center",
                    alignItems: "center",
                  }}
            >
              <IconHyperLink text={<p>LinkedIn</p>} href="https://www.linkedin.com/in/bumjin-joo/" icon={<LinkedInIcon />}/>
            </Grid>
            <Grid size={1}
                  sx={{
                    justifyItems: "center",
                    alignItems: "center",
                  }}
            >
              <IconHyperLink text={<p>Resume</p>} href="https://drive.google.com/file/d/1GAxWJjdiknoXumj8lszhXeW0Kbf0XgwE/view?usp=sharing" icon={<TextSnippetIcon />}/>
            </Grid>
            <Grid size={1}
                  sx={{
                    justifyItems: "center",
                    alignItems: "center",
                  }}
            >
              <IconHyperLink text={<p>Email</p>} href="mailto:bumjin.joo@gmail.com" icon={<EmailIcon />}/>
            </Grid>
          </Grid>
        </Stack>
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
              <li> Extensively unit tested and play-tested assignments to improve assignment quality for users </li>
              <li> Hosted live debugging and Q&A sessions for conceptual / coding questions during weekly office hours </li>
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
                created and introduced Beras: a manual reimplementation of Tensorflow & PyTorch auto-differentiation tools for deep, gradient optimization models
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
                <ReportLink href="https://drive.google.com/file/u/1/d/1-m_HFV6-Dp_7ZMAOASNqEYBrU09KBUT2/view?usp=sharing"/>
                <GithubProjLink href="https://github.com/joobumjin/GraphSC" />
             </Stack>}
      >
        <span className={styles.sub}>
          <p>A graph-based approach to efficiently analyze stem cell imaging with state-of-the-art accuracy. Reduced training time from <b>days to just hours</b></p>
        </span>
      </ProjTile>

      <ProjTile
        name="YogaSplat"
        ext={<Stack direction={{ xs: 'column', sm: 'row' }} alignItems="end" spacing={0}>
                <ReportLink href="https://drive.google.com/file/d/15dR2u52O0wm3t0_ctjyrHtfP4D6_ozk1/view?usp=sharing" />
                <GithubProjLink href="https://github.com/mindy-kim/3d-world-models"/>
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
                <GithubProjLink href="https://github.com/joobumjin/mae_cs2952x"/>
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
                <DriveLink href="https://drive.google.com/drive/folders/1k2lMFOw1wFnflUApc26V-A7m1Kk2hrtG?usp=sharing"/>
             </Stack>}
      >
        <span className={styles.sub}>
            <p>asdf</p>
          </span>
      </ProjTile>

      <h1 className={styles.sectionHeader}>community involvement</h1>
      
      <ProjTile
        name="DAEBAK Dance Team"
        ext={<Stack direction={{ xs: 'column', sm: 'row' }} alignItems="end" spacing={0}>
                <a className={styles.button} href="https://drive.google.com/drive/folders/1sDu__-1lZsyLlKTf1YJlNAE49XaZiFq9?usp=sharing" target="_blank">
                  <AddToDriveIcon/> <p>Google Drive Sample</p>
                </a>
             </Stack>}
      >
        <span className={styles.sub}>
          <span>
            <h4>Vice Director</h4> <p>(Sept 2024 - May 2025)</p>
          </span>
          <ul>
            <li>
              developed a real-time system of Google Sheets for our Performer Casting List, Performer Practice Availability Aggregation, and Audience Member Ticket Aggregation

              <ul>
                <li>
                  <b>efficiently and automaticallly aggregated information</b> through spreadsheet manipulation techniques (Sheets Custom Functions, SQL, RegEx)
                </li>

                <li>
                  A/B tested forms to encourage faster response times from members 
                </li>

                <li>
                  <b>visualized aggregate availability</b> with custom filter rules into easily understood calendars
                </li>

                <li>
                  <b>reduced leadership workload by weeks</b>
                </li>
              </ul>
            </li>
            <li>
              Coordinated member availability to schedule and book spaces from Brown University campus 
            </li>
          </ul>
        </span>

        <span className={styles.sub}>
          <span>
            <h4>Performer, Teacher</h4> <p>(Sept 2021 - May 2025)</p>
          </span>
          <ul>
            <li>
              Hosted dance workshops to teach community members selected pieces of choreography
            </li>
          </ul>
        </span>
      </ProjTile>
      
    </main>
  );
}
