import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';


function Home() {

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.left}>
        <FontAwesomeIcon className={styles.logoHome} icon={faTwitter} size="lg" rotation={180} style={{color: "#ffffff",}} />
        </div>
        <div className={styles.right}>
          <h2 className={styles.bigTitle}>See what's <br/> happening</h2>
          <h4>Join Hackatweet today.</h4>
          <button className={styles.signUpButton}>Sign Up</button>
          <h6>Already have an account?</h6>
          <button className={styles.signInButton}>Sign In</button>
        </div>
      </main>
    </div>
  );
}

export default Home;
