import footerStyles from "./footer.module.css";
import styles from "../page.module.css"
import CodeIcon from '@mui/icons-material/Code';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <div className={footerStyles.footer}>
            <Stack direction={{sm: "column", md: "row"}} 
                    alignItems={{sm: "center", md: "flex-end"}} 
                    justifyContent={{sm: "center", md: "space-between"}}
                    className={footerStyles.inner}
            >
                <Stack direction="column" alignItems={{sm: "center", md: "flex-start"}}>
                    <b>thanks for visiting my portfolio</b>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{marginTop: 1}}>
                        <p>made with </p>
                        <CodeIcon />
                        <p> by me</p>
                    </Stack>
                </Stack>

                <Stack direction="row" alignItems="center" width="fit-content">
                    <IconButton className={styles.button} size="large" color="inherit" aria-label="send an email" href="mailto:bumjin.joo@gmail.com"><EmailIcon fontSize="inherit" /></IconButton>
                    <IconButton className={styles.button} size="large" color="inherit" aria-label="see my linkedin" href="https://www.linkedin.com/in/bumjin-joo/"><LinkedInIcon fontSize="inherit" /></IconButton>
                    <IconButton className={styles.button} size="large" color="inherit" aria-label="see my github" href="https://github.com/joobumjin"><GitHubIcon fontSize="inherit" /></IconButton>
                </Stack>
            </Stack>
        </div>
    );
}