import styles from "./page.module.css";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {ExpTile, ProjTile, HyperLink, IconHyperLink,  
  GithubProjLink, ReportLink, DriveLink} from './components/tiles'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Bumjin Joo</p>
      </div>

      <div className={styles.center}>
        <Stack direction = 'column'
              spacing={{xs: 4, sm: 4, md: 2}} 
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
                rowSpacing={{xs: 8, sm: 4}}
                columnSpacing={{xs:2, sm: 0, md: 6}}
                columns = {{xs: 2, sm: 2, md: 4}}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: '75%'
                }}
          >
            <Grid size={1} display="flex" justifyContent="center">
              <IconHyperLink text={<p>Github</p>} href="https://github.com/joobumjin" icon={<GitHubIcon />} />
            </Grid>
            <Grid size={1} display="flex" justifyContent="center">
              <IconHyperLink text={<p>LinkedIn</p>} href="https://www.linkedin.com/in/bumjin-joo/" icon={<LinkedInIcon />}/>
            </Grid>
            <Grid size={1} display="flex" justifyContent="center">
              <IconHyperLink text={<p>Resume</p>} href="https://drive.google.com/file/d/1GAxWJjdiknoXumj8lszhXeW0Kbf0XgwE/view?usp=sharing" icon={<TextSnippetIcon />}/>
            </Grid>
            <Grid size={1} display="flex" justifyContent="center">
              <IconHyperLink text={<p>Email</p>} href="mailto:bumjin.joo@gmail.com" icon={<EmailIcon />}/>
            </Grid>
          </Grid>
        </Stack>
      </div>

      <h1 className={styles.sectionHeader}>experience</h1>
        <ExpTile 
          org="Radiology AI Lab - RI Hospital"
          link="https://sites.brown.edu/airadiology/"
          loc="Providence, RI"
          position="Student Researcher"
          date="Oct 2025 - Present"
          skills= {["PyTorch", "Hugging Face", "Python", "Git", "Slurm"]}
        >
          <span className={styles.sub}>
            Currently exploring multimodal modeling techniques to predict pancreatic cancer patient survival outcomes and reaction to treatments.

            Coordinating closely with medical faculty to incorporate visual pancreatomy slides, textual physicians&apos; notes, and genomic mutation features.
          </span>
        </ExpTile>

        <ExpTile 
          org="Brown CS "
          link="https://cs.brown.edu/"
          loc="Providence, RI"
          position="Course Dev, Teaching Assistant"
          date="May 2022 - Present"
          skills= {["Tensorflow", "PyTorch", "Keras", "NumPy", "Jupyter", "Colab", "Pandas", "Git", "Bash"]}
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
          skills= {["PyTorch", "Jupyter", "Colab", "Optuna", "Git", "matplotlib", "Slurm", "Bash", "Docker"]}
        >
          <span className={styles.sub}>
            Broadly explored deep learning models for medical analytics, building code to train and optimize models on Brown&apos;s High Performance Computing Cluster. 
            Previously contributed to developing prototypes of multimodal contrastive transformers.
            Developed my Senior Honors Thesis: GraphSC, An Exploration into and Analysis of Graph Networks in Stem Cell Colony Characterization.
          </span>
        </ExpTile>

        <ExpTile 
          org="Mahmood Lab"
          link="https://faisal.ai/"
          loc="Cambridge, MA"
          position="Student Researcher"
          date="July 2022 - July 2025"
          skills= {["PyTorch", "Jupyter", "pandas", "sklearn", "matplotlib"]}
        >
          <span className={styles.sub}>
            Developed Multiple Instance Learning models to make patient survival predictions on gigapixel biopsy images. <HyperLink text="See paper here" href="https://www.sciencedirect.com/science/article/pii/S1535610822003178" />. 
            Additionally trained GAN models to create high resolution biopsy samples to serve as artificial training data for rare cancers
          </span>
        </ExpTile>

      <h1 className={styles.sectionHeader}>projects</h1>
      <ProjTile
        name="GraphSC"
        ext={<Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{xs: "center", sm: "end"}} spacing={0}>
                <ReportLink href="https://drive.google.com/file/u/1/d/1-m_HFV6-Dp_7ZMAOASNqEYBrU09KBUT2/view?usp=sharing"/>
                <GithubProjLink href="https://github.com/joobumjin/GraphSC" />
             </Stack>}
        skills = {["PyTorch", "Weights & Biases", "Jupyter", "Pandas", "matplotlib", "Seaborn", "Bash", "Slurm"]}
      >
        <span className={styles.sub}>
          A mutlitaksing graph-based approach to automated stem cell characterization from microscope imaging with <b>a reduction in average squared error of over 50%</b> in each of 3 target variables when compared to previous state of the art models and modern ViT & Foundation Modeling-based approaches. 
          The training time for the vision encoder was reduced from <b>days to just hours</b>.
          The graph network further achieved rich embeddings, enabling transfer learning onto novel targets with just a linear probe.
        </span>
      </ProjTile>

      <ProjTile
        name="YogaSplat"
        ext={<Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{xs: "center", sm: "end"}} spacing={0}>
                <ReportLink href="https://drive.google.com/file/d/15dR2u52O0wm3t0_ctjyrHtfP4D6_ozk1/view?usp=sharing" />
                <GithubProjLink href="https://github.com/mindy-kim/3d-world-models"/>
             </Stack>}
        skills = {["PyTorch", "NumPy", "Jupyter", "Pandas", "matplotlib", "Bash", "Slurm"]}
      >
        <span className={styles.sub}>
          A fast, action-conditioned novel-view generator for pre-existing videos, exploring extensions of 4D Gaussian Splats (4DGS). 
          Designed to generalize 4D Gaussians beyond a single reference video, YogaSplat demonstrates the capability for 4DGS models to encode multiple actions for a single target subject without the need to retrain distinct models.
        </span>
      </ProjTile>

      <ProjTile
        name="MAE Fine Tuning"
        ext={<Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{xs: "center", sm: "end"}} spacing={0}>
                <GithubProjLink href="https://github.com/joobumjin/mae_cs2952x"/>
             </Stack>}
        skills = {["Pytorch", "Torch Distributed", "Weights & Biases", "Hugging Face", "Slurm"]}
      >
        <span className={styles.sub}>
          An exploration into the Self Supervised Learning properties of the ViT-based <HyperLink text={"Masked Autoencoder"} href="https://arxiv.org/abs/2111.06377"/>. 

          This project partially reused model code, but also relied on manual rebuilds of the training regimes and Distributed Data Parallel system to ensure compatibility with Brown Oscar CCV computing and the associated Slurm batch requests.
          
          ViTMAEs were pretrained to reconstruct unlabled, masked images and fine tuned by linear probing the encoder&apos;s embeddings on a classification task.

          Ablation studies into optimization techniques like mean pooling encodings instead of using classification encodings, linear probe intitialization, choice of optimizer, learning rate decay method, and batch normalization demonstrated the relevance or lack of impact from such techniques in achieving optimal performance.
        </span>
      </ProjTile>

      <ProjTile
        name="ImTex"
        ext={<Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{xs: "center", sm: "end"}} spacing={0}>
                <ReportLink href="https://drive.google.com/file/d/16F2uisOPw3CV3Uyaqv39zMeTMSRBynEF/view?usp=sharing"/>
                <DriveLink href="https://drive.google.com/drive/folders/1k2lMFOw1wFnflUApc26V-A7m1Kk2hrtG?usp=sharing"/>
             </Stack>}
        skills = {["Python", "Colab", "PyTorch", "NumPy", "matplotlib"]}
      >
        <span className={styles.sub}>
          A from-scratch language model for converting images of math formulas to their associated LaTeX code. 
          Given a screenshot of a formula, the image encoder - transformer decoder model predicts out a LaTeX formula. 
          Certainly not perfect, but still decoded LaTeX-parsable code quite close to ground truth.
        </span>
      </ProjTile>


      <ProjTile
        name="BertQA"
        ext={<Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{xs: "center", sm: "end"}} spacing={0}>
                <DriveLink href="https://drive.google.com/drive/folders/1k2lMFOw1wFnflUApc26V-A7m1Kk2hrtG?usp=sharing"/>
             </Stack>}
        skills = {["Python", "Google Cloud Platform", "PyTorch", "Hugging Face", "NumPy", "NLTK"]}
      >
        <span className={styles.sub}>
          A repurposed autoregressive language model trained to highlight answers to questions in a body of text. 
          Achieved 89% precision, recall, and f1 score in <b>a span of hours</b> when fine-tuning a general next-token BERT model on the <HyperLink text="SQuAD 2.0 dataset " href="https://rajpurkar.github.io/SQuAD-explorer/"/>.
        </span>
      </ProjTile>

      <h1 className={styles.sectionHeader}>community involvement</h1>
      
      <ProjTile
        name="DAEBAK Dance Team"
        ext={<Stack direction={{ xs: 'column', sm: 'row' }} alignItems={{xs: "center", sm: "end"}} spacing={0}>
                <a className={styles.button} href="https://drive.google.com/drive/folders/1sDu__-1lZsyLlKTf1YJlNAE49XaZiFq9?usp=sharing" target="_blank">
                  <AddToDriveIcon/> <p>Google Drive Sample</p>
                </a>
             </Stack>}
        skills = {["Google Sheets", "SQL", "RegEx", "Google Forms", "Figma"]}
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
              Coordinated member availability to schedule practice and performance spaces from Brown University campus, averaging 8 hours of booked practice spaces per week 
            </li>
            <li>
              Managed over 100 different performers in 30 unique pieces 
            </li>
            <li>
              Flexibly adapted to diverse tasks as needed (Figma graphic design, social media management, performance media editing)
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
            <li>
              Performed at annual show case with over 800 audience members over 2 nights. <HyperLink text="Check it out here!" href="https://www.youtube.com/watch?v=XK6OhebFJ5k&list=PL5gZzQCnHAxHn6H6bmpQMIhFfGquDgnBo"/>
            </li>
            <li>
              Designed stage lighting and animations for select pieces 
            </li>
          </ul>
        </span>
      </ProjTile>
      
    </main>
  );
}
