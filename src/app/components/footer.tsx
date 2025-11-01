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
            <div className={footerStyles.inner}>
                <b>Thanks for visiting my portfolio</b>
                <div className={footerStyles.lastline}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <p>Made with </p>
                        <CodeIcon />
                        <p> by me.</p>
                    </Stack>

                    <Stack direction="row">
                        <IconButton className={styles.button} size="large" color="inherit" aria-label="send an email" href="mailto:bumjin.joo@gmail.com"><EmailIcon fontSize="inherit" className="icon" /></IconButton>
                        <IconButton className={styles.button} size="large" color="inherit" aria-label="see my linkedin" href="https://www.linkedin.com/in/bumjin-joo/"><LinkedInIcon fontSize="inherit" className="icon" /></IconButton>
                        <IconButton className={styles.button} size="large" color="inherit" aria-label="see my github" href="https://github.com/joobumjin"><GitHubIcon fontSize="inherit" className="icon" /></IconButton>
                    </Stack>
                </div>

                
            </div>
        </div>
    );
}