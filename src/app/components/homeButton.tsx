import hbStyles from "./homeButton.module.css";
import styles from "../page.module.css"
import Link from 'next/link'


export default function HomeButton() {
    return(
        <span className={hbStyles.hbWrapper}>
            <Link
                href="./"
                className={[hbStyles.left, styles.card].join(' ')}
                rel="noopener noreferrer"
            >
                <p><span className={[styles.toLeft, hbStyles.arrow].join(' ')}>&lt;</span> Back To Home</p>
            </Link>
        </span>
    );
}