import {FaFacebook, FaInstagram, FaLinkedin, FaTiktok} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer>
      <div className={styles.socialIcons}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener" className={styles.link} aria-label="Facebook"><FaFacebook size={20}/></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener" className={styles.link} aria-label="Instagram"><FaInstagram size={20} /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener" className={styles.link} aria-label="LinkedIn"><FaLinkedin size={20}/></a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener" className={styles.link} aria-label="TikTok"><FaTiktok size={20} /></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener" className={styles.link} aria-label="Twitter"><FaXTwitter size={20} /></a>
      </div>
      <span className={styles.copy}>© {new Date().getFullYear()} MyApp. All rights reserved.</span>
    </footer>
  );
};

