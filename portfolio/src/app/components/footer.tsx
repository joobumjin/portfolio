import styles from "./footer.module.css";
import CodeIcon from '@mui/icons-material/Code';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.inner}>
                <b>Thanks for visiting my portfolio</b>
                <div className={styles.lastline}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <p>Made with </p>
                        <CodeIcon />
                        <p> by me.</p>
                    </Stack>

                    <Stack direction="row">
                        <IconButton className={styles.card} size="large" color="inherit" aria-label="send an email" href="mailto:bumjin.joo@gmail.com"><EmailIcon fontSize="inherit" className="icon" /></IconButton>
                        <IconButton className={styles.card} size="large" color="inherit" aria-label="see my linkedin" href="https://www.linkedin.com/in/bumjin-joo/"><LinkedInIcon fontSize="inherit" className="icon" /></IconButton>
                        <IconButton className={styles.card} size="large" color="inherit" aria-label="see my github" href="https://github.com/joobumjin"><GitHubIcon fontSize="inherit" className="icon" /></IconButton>
                    </Stack>
                </div>

                
            </div>
        </div>
    );
}